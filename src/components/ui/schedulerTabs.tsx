import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { DateTimePicker } from "@/components/ui/calendarForm"

interface SchedulerTabsProps {
    value: string;
    setSelectedTab: (value: string) => void;
  }
  
  export function SchedulerTabs({ value, setSelectedTab }: SchedulerTabsProps) {
  return (
    <Tabs value={value} className="w-full" onValueChange={setSelectedTab}>
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
            <DateTimePicker></DateTimePicker>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}