"use client"

import {
  SidebarMenu,
} from "@/components/ui/sidebar"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function NavProfile() {

  return (
    <SidebarMenu className="flex items-center justify-center">
      <Avatar className="relative top-3 h-[7rem] w-[7rem]">
        <AvatarImage/>
        <AvatarFallback>Profile</AvatarFallback>
      </Avatar>
      <div className="relative top-4 pb-4">@username</div>
    </SidebarMenu>
  )
}