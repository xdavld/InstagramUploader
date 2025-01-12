"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Calendar,
  Command,
  Frame,
  GalleryVerticalEnd,
  Grid3x3,
  SunMoon,
  Upload,
} from "lucide-react"



import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar";
import { NavExplore } from "@/components/sidebar/nav-explore";
import { NavLogout } from "@/components/sidebar/nav-logout";
import { NavProfile } from "@/components/sidebar/nav-profile";
import { NavSettings } from "@/components/sidebar/nav-settings";





const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  explore: [
    {
      name: "Calendar",
      url: "/dashboard",
      icon: Calendar,
    },
    {
      name: "Uploader",
      url: "/uploader",
      icon: Upload,
    },
    {
      name: "Feed View",
      url: "/feedview",
      icon: Grid3x3,
    },
  ],
  navSettings: [
    {
      title: "Theme",
      url: "#",
      icon: SunMoon,
      items: [
        {
          title: "Light",
          mode: "light",
        },
        {
          title: "Dark",
          mode: "dark",
        },
        {
          title: "System",
          mode: "system",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="group-data-[collapsible=icon]:hidden">
        <NavProfile />
      </SidebarHeader>
      <SidebarContent>
        <NavExplore items={data.explore} />
        <NavSettings items={data.navSettings} />
      </SidebarContent>
      <SidebarFooter>
        <NavLogout />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}