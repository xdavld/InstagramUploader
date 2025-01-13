"use client";

import React, { useEffect, useState } from "react";



import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarMenu } from "@/components/ui/sidebar";





export function NavProfile() {
  const [profile, setProfile] = useState({
    username: "",
    profilePictureUrl: "",
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("/api/instagram/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || "Failed to fetch profile")
        }

        const data = await response.json()
        setProfile({
          username: data.username,
          profilePictureUrl: data.profilePictureUrl, // Corrected key
        })
      } catch (err) {
        console.error("Fetch Profile Error:", err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [])


  if (loading) {
    return (
      <SidebarMenu className="flex items-center justify-center">
        Loading...
      </SidebarMenu>
    )
  }

  if (error) {
    return (
      <SidebarMenu className="flex items-center justify-center">
        Error: {error}
      </SidebarMenu>
    )
  }

  return (
    <SidebarMenu className="flex flex-col items-center justify-center">
      <Avatar className="relative top-3 h-[7rem] w-[7rem]">
        {profile.profilePictureUrl ? (
          <AvatarImage src={profile.profilePictureUrl} alt="Profile Picture" />
        ) : (
          <AvatarFallback>Profile</AvatarFallback>
        )}
      </Avatar>
      <div className="relative top-4 pb-4">@{profile.username}</div>
    </SidebarMenu>
  )
}