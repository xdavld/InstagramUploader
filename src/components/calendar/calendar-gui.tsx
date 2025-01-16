import { AppSidebar } from "@/components/sidebar/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import React, { useEffect, useState } from "react";
import { SchedulerProvider } from "@/components/calendar/template/schedular-provider";
import { MonthView } from "@/components/calendar/template/month-view";
import { LoadingSpinner } from "@/components/loading-spinner";

export function Calendar() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState({
      userName: "",
      urlProfile: "",
    })

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoading(true);

        // Fetch Media
        const responseMedia = await fetch("/api/instagram/fetchMedia");

        if (!responseMedia.ok) {
          console.error("Failed to fetch media.", responseMedia.statusText);
          return;
        }

        const dataMedia = await responseMedia.json();

        const mappedEventsMedia = dataMedia.map((item) => ({
          id: item.id,
          title: item.media_url || "unknown",
          description: item.caption || "unknown",
          startDate: new Date(item.timestamp),
          endDate: new Date(item.timestamp),
          variant:
            item.media_type.toLowerCase() === "image"
              ? "primary"
              : item.media_type.toLowerCase() === "video"
              ? "warning"
              : "default",
        }));

        // Fetch Stories
        const responseStory = await fetch("/api/instagram/fetchStory");

        if (!responseStory.ok) {
          console.error("Failed to fetch stories.", responseStory.statusText);
          return;
        }

        const dataStory = await responseStory.json();

        const mappedEventsStory = dataStory.map((item) => ({
          id: item.id,
          title: item.media_url || "unknown",
          description: "",
          startDate: new Date(item.timestamp),
          endDate: new Date(item.timestamp),
          variant: "danger",
        }));

        // Combine Media and Stories
        const combinedEvents = [...mappedEventsMedia, ...mappedEventsStory];

        setEvents(combinedEvents);

        const responseProfile = await fetch("/api/instagram/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })

        if (!responseProfile.ok) {
          const errorData = await responseProfile.json()
          throw new Error(errorData.error || "Failed to fetch profile")
        }

        const dataProfile = await responseProfile.json()
        const newProfile = {
          userName: dataProfile.username,
          urlProfile: dataProfile.profilePictureUrl,
        }
        setProfile(newProfile)
      } catch (error) {
        console.error("Error fetching data:", error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <SidebarProvider>
      <AppSidebar className="top-14 h-[calc(100vh-14)]" />
      <SidebarInset>
        <div className="h-14"></div>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink>Calendar</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        {isLoading ? (
          <div className="flex justify-center">
            <LoadingSpinner />
          </div>
        ) : (
          <div className="pt-0 p-4">
            <SchedulerProvider initialState={events} weekStartsOn="monday">
              <MonthView profile={profile}></MonthView>
            </SchedulerProvider>
          </div>
        )}
      </SidebarInset>
    </SidebarProvider>
  );
}
