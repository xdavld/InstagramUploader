"use client"

import {
  LogOut,
} from "lucide-react"
import {
  SidebarMenu,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

export function NavLogout() {

  return (
    <SidebarMenu>
      <SidebarMenuButton> {/*onClick={() => handleLogout()}*/}
      <LogOut />
      Logout
      </SidebarMenuButton>
    </SidebarMenu>)
}