"use client"

import React, { useEffect, useState } from "react"

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
// Import your InstaClone
import InstaClone from "@/components/feedview/grid-view"
import { LoadingSpinner } from "@/components/loading-spinner"
import { AppSidebar } from "@/components/sidebar/app-sidebar"

export function FeedView() {
  const [profile, setProfile] = useState({
    username: "",
    profilePictureUrl: "https://avatar.iran.liara.run/public/#49",
    followersCount: 0,
    followsCount: 0,
    mediaCount: 0,
  })
  const [posts, setPosts] = useState<{ type: string; src: string }[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedProfile = sessionStorage.getItem("profile")
      if (storedProfile) {
        const parsedProfile = JSON.parse(storedProfile)
        setProfile(parsedProfile)
      }
    }

    const fetchMedia = async () => {
      try {
        const response = await fetch("/api/instagram/fetchMedia")
        if (!response.ok) {
          throw new Error("Failed to fetch media data")
        }
        const data = await response.json()

        const transformedPosts = data.map((media: any) => ({
          type: media.media_type.toLowerCase(),
          src: media.media_url,
        }))

        setPosts(transformedPosts)
      } catch (error) {
        console.error("Failed to fetch media:", error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMedia()
  }, [])

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
                  <BreadcrumbLink>Feed View</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        {/* Pass the isLoading state to InstaClone */}
        <InstaClone
          isLoading={isLoading}
          profilePicture={profile.profilePictureUrl || ""}
          username={profile.username || ""}
          postsCount={profile.mediaCount || 0}
          followersCount={profile.followersCount || 0}
          followingCount={profile.followsCount || 0}
          bio={"Feed View Page"}
          website={""}
          categories={""}
          posts={posts}
        />
      </SidebarInset>
    </SidebarProvider>
  )
}
