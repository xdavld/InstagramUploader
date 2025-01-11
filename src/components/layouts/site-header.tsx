import { useEffect, useState } from "react";
import Link from "next/link";
import { File } from "lucide-react";
import { FaInstagram } from "react-icons/fa";



import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { ModeToggle } from "@/components/layouts/mode-toggle";





export function SiteHeader() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    const clientId = "967181185255438"
    const redirectUri = "https://software-engineering-project-eight.vercel.app/"
    const scope = encodeURIComponent(
      "instagram_business_basic,instagram_business_manage_messages,instagram_business_manage_comments,instagram_business_content_publish"
    )
    const oauthUrl = `https://www.instagram.com/oauth/authorize?enable_fb_login=0&force_authentication=1&client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`

    window.location.href = oauthUrl
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const code = urlParams.get("code")
    const accessToken = localStorage.getItem("instagram_access_token")

    if (accessToken) {
      setIsAuthenticated(true)
      return
    }

    if (code) {
      const fetchAccessToken = async () => {
        try {
          const response = await fetch("/api/instagram/oauth.ts", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ code }),
          })

          if (!response.ok) {
            throw new Error("Failed to fetch access token")
          }

          const data = await response.json()
          localStorage.setItem("instagram_access_token", data.access_token)
          setIsAuthenticated(true)
        } catch (error) {
          console.error("Error fetching access token:", error)
        }
      }

      fetchAccessToken()
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-2 flex items-center md:mr-6 md:space-x-2">
          <FaInstagram className="size-4" aria-hidden="true" />
          <span className="hidden font-bold md:inline-block">
            {siteConfig.name}
          </span>
        </Link>
        <nav className="flex flex-1 items-center md:justify-end">
          {/* Login Button */}
          {!isAuthenticated ? (
            <Button
              size="lg"
              style={{ marginRight: "20px" }}
              onClick={handleLogin}
            >
              Logout
            </Button>
          ) : (
            <p>Welcome back!</p>
          )}
          <Button variant="ghost" size="icon" className="size-8" asChild>
            <Link
              aria-label="GitHub repo"
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.gitHub className="size-4" aria-hidden="true" />
            </Link>
          </Button>
          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}