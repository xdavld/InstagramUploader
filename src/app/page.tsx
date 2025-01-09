"use client";

import { useEffect, useState } from "react";



import { SiteHeader } from "@/components/layouts/site-header";
import { Shell } from "@/components/shell";
import { BasicUploaderDemo } from "@/components/uploader/basic-uploader-demo";





export default function IndexPage() {


  return (
    <>
      <SiteHeader />
      <Shell>
        <BasicUploaderDemo />
      </Shell>
    </>
  )
}