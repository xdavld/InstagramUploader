import { env } from "@/env";





export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Instagram Uploader",
  description: "File uploader built with shadcn-ui, and react-dropzone",
  url:
    env.NEXT_PUBLIC_NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://software-engineering-project-eight.vercel.app/",
  links: { github: "https://github.com/xdavld/SoftwareEngineering-Project" },
}