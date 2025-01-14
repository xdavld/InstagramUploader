"use client";

import React, { useEffect, useState } from "react";



import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarMenu } from "@/components/ui/sidebar";





export function NavProfile() {
  const [profile, setProfile] = useState({
    username: "",
    profilePictureUrl: "",
    followersCount: 0,
    followsCount: 0,
    mediaCount: 0,
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isPreviewMode = sessionStorage.getItem("previewMode") === "true"

      if (isPreviewMode) {
        // Mock data for preview mode
        setProfile({
          username: "preview_user",
          profilePictureUrl: "/images/dummy_pb.png",
          followersCount: 0,
          followsCount: 0,
          mediaCount: 0,
        })
        setLoading(false)
        return
      }

      const storedProfile = sessionStorage.getItem("profile")
      if (storedProfile) {
        setProfile(JSON.parse(storedProfile))
        setLoading(false)
        return
      }

      const fetchProfile = async () => {
        try {
          const token = sessionStorage.getItem("accessToken")
          if (!token) {
            throw new Error("Access token not found")
          }

          const response = await fetch("/api/instagram/profile", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          })

          if (!response.ok) {
            const errorData = await response.json()
            throw new Error(errorData.error || "Failed to fetch profile")
          }

          const data = await response.json()
          const newProfile = {
            username: data.username,
            profilePictureUrl: data.profilePictureUrl,
            followersCount: data.followersCount,
            followsCount: data.followsCount,
            mediaCount: data.mediaCount,
          }
          setProfile(newProfile)
          sessionStorage.setItem("profile", JSON.stringify(newProfile))
        } catch (err) {
          console.error("Fetch Profile Error:", err)
          setError(err.message)
        } finally {
          setLoading(false)
        }
      }

      fetchProfile()
    }
  }, [])

  if (loading) {
    return (
      <SidebarMenu className="flex items-center justify-center">
        <Avatar className="relative top-3 h-[7rem] w-[7rem]">
          <AvatarFallback></AvatarFallback>
        </Avatar>
        <div className="relative top-4 pb-4 text-transparent">username</div>
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
      <div className="text-sm text-gray-600">
        Followers: {profile.followersCount} | Following: {profile.followsCount}
      </div>
    </SidebarMenu>
  )
}