import { AppSidebar } from "@/components/sidebar/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {SchedulerProvider} from "@/components/calendar/template/schedular-provider"
import {MonthView} from "@/components/calendar/template/month-view"


export function Calendar() {
  return (
    <SidebarProvider>
      <AppSidebar className="top-14 h-[calc(100vh-14)]"/>
      <SidebarInset>
        <div className="h-14"></div>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink>
                    Calendar
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="pt-0 p-4">
          <SchedulerProvider>
            <MonthView></MonthView>
          </SchedulerProvider>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
