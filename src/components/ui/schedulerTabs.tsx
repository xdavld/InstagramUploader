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
  setMediaType: (value: string) => void
}

export function SchedulerTabs({
  value,
  setSelectedTab,
  setScheduledTime,
  setMediaType,
}: SchedulerTabsProps) {
  const handleTabChange = (tabValue: string) => {
    setSelectedTab(tabValue)

    if (tabValue === "now") {
      setScheduledTime(new Date())
    }
  }

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setMediaType("STORIES") // Set to Stories when checked
    } else {
      setMediaType("REELS") // Default back to Reels
    }
  }

  return (
    <Tabs value={value} className="w-full" onValueChange={handleTabChange}>
      <TabsList className="grid w-full grid-cols-3 items-center">
        <TabsTrigger value="now">Now</TabsTrigger>
        <TabsTrigger value="schedule">Schedule</TabsTrigger>
        <TabsTrigger value="more">More Options</TabsTrigger>
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

      <TabsContent value="more">
        <Card>
          <CardHeader>
            <CardTitle>Additional Options</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Limit Number of Posts per Day */}
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="quantity">Limit Posts per Day</Label>
              <div className="flex items-center space-x-2">
                <Input type="number" id="quantity" defaultValue="0" min="0" />
                <Button type="submit">Set Limit</Button>
              </div>
            </div>
            {/* Story Posts */}
            <div className="flex items-center space-x-4">
              <Checkbox id="story" onChange={handleCheckboxChange} />
              <div>
                <Label htmlFor="story">Share as a Story</Label>
                <p className="text-sm text-muted-foreground">
                  Your post will be visible on your profile for 24 hours.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
