import EventStyled from "@/components/calendar/template/event-styled";
import { useModalContext } from "@/components/calendar/template/modal-provider";
import { Event } from "@/components/calendar/template/types";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area"

interface ProfileProps {
  userName?: string;
  urlProfile?: string;
}

export default function ShowMoreEventsModal({ profile }: { profile: ProfileProps }) {
  const { data } = useModalContext();
  const dayEvents = data?.dayEvents || [];

  return (
    <div className="flex flex-col gap-2">
      <ScrollArea className="w-full overflow-y-auto" style={{ maxHeight: "80vh" }}>
        {dayEvents.map((event) => (
          <EventStyled
            key={event.id}
            event={{ ...event }}
            profile={{
              userName: profile?.userName || "Default User",
              urlProfile: profile?.urlProfile || "",
            }}
          />
        ))}
      </ScrollArea>
    </div>
  );
}

