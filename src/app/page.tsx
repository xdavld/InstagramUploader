"use client";

import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/layouts/site-header";
import { Shell } from "@/components/shell";
import { Uploader } from "@/components/uploader/uploader-gui"

export default function IndexPage() {


  return (
    <>
      <SiteHeader />
      <Shell>
        <Uploader />
      </Shell>
    </>
  )
}