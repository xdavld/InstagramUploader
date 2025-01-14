import React from "react"

import { DateTimePicker } from "@/components/ui/calendarForm"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface SchedulerTabsProps {
  value: string
  setSelectedTab: (value: string) => void
  setScheduledTime: (value: Date) => void
}

export function SchedulerTabs({
  value,
  setSelectedTab,
  setScheduledTime,
}: SchedulerTabsProps) {
  const handleTabChange = (tabValue: string) => {
    setSelectedTab(tabValue)

    if (tabValue === "now") {
      setScheduledTime(new Date())
    }
  }

  return (
    <Tabs value={value} className="w-full" onValueChange={handleTabChange}>
      <TabsList className="grid w-full grid-cols-2 items-center">
        <TabsTrigger value="now">Now</TabsTrigger>
        <TabsTrigger value="schedule">Schedule</TabsTrigger>
      </TabsList>

      <TabsContent value="schedule">
        <Card>
          <CardHeader>
            <CardTitle>Date & Time</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <DateTimePicker onDateChange={setScheduledTime} />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
