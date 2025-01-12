"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  SunMoon,
  Calendar,
  Upload,
  Github,
} from "lucide-react"

import { NavExplore } from "@/components/sidebar/nav-explore"
import { NavSettings } from "@/components/sidebar/nav-settings"
import { NavProfile } from "@/components/sidebar/nav-profile"
import { NavLogout } from "@/components/sidebar/nav-logout"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"


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
      name: "Github",
      url: "https://github.com/xdavld/SoftwareEngineering-Project",
      icon: Github,
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
