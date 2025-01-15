import { AppSidebar } from "@/components/sidebar/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import React, { useEffect, useState } from "react"
import {SchedulerProvider} from "@/components/calendar/template/schedular-provider"
import {MonthView} from "@/components/calendar/template/month-view"

export function Calendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/instagram/fetchMedia"); // Passe die URL entsprechend an

        if (!response.ok) {
          console.error("Failed to fetch events.", response.statusText);
          return;
        }

        const data = await response.json();

        const mappedEvents = data.map((item) => ({
          id: item.id,
          title: item.media_url || "unknown",
          description: item.caption || "unknown",
          startDate: new Date(item.timestamp),
          endDate: new Date(item.timestamp),
          variant: item.media_type.toLowerCase() === "image" ? "primary" : item.media_type.toLowerCase() === "video" ? "warning" : "default",
        }));

        setEvents(mappedEvents);
        console.log("Fetched data:", mappedEvents);
      } catch (error) {
        console.error("Error fetching events:", error.message);
      }
    };

    fetchEvents();
  }, []);

  return (
    <SidebarProvider>
      <AppSidebar className="top-14 h-[calc(100vh-14)]"/>
      <SidebarInset>
        <div className="h-14"></div>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink>
                    Calendar
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="pt-0 p-4">
          <SchedulerProvider initialState={events} weekStartsOn="monday">
            <MonthView></MonthView>
          </SchedulerProvider>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
