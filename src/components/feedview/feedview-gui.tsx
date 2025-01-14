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
import InstaClone from "@/components/feedview/grid-view"
import { AppSidebar } from "@/components/sidebar/app-sidebar"

export function FeedView() {
  const [profile, setProfile] = useState({
    username: "",
    profilePictureUrl: "/images/dummy_pb.png",
    followersCount: 0,
    followsCount: 0,
    mediaCount: 0,
  })
  const [posts, setPosts] = useState<{ type: string; src: string }[]>([])

  useEffect(() => {
    // Load profile from sessionStorage
    if (typeof window !== "undefined") {
      const storedProfile = sessionStorage.getItem("profile")
      if (storedProfile) {
        setProfile(JSON.parse(storedProfile))
      }
    }
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

        {/* Pass the posts and setPosts to InstaClone */}
        <InstaClone profile={profile} posts={posts} setPosts={setPosts} />
      </SidebarInset>
    </SidebarProvider>
  )
}
