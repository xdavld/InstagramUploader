import EventStyled from "@/components/calendar/template/event-styled";
import { useModalContext } from "@/components/calendar/template/modal-provider";
import { Event } from "@/components/calendar/template/types";
import React from "react";

export default function ShowMoreEventsModal() {
  const { data } = useModalContext();
  const dayEvents = data?.dayEvents || [];

  return (
    <div className="flex flex-col gap-2">
      {dayEvents.map((event: Event) => (
        <EventStyled key={event.id} event={{ ...event }} />
      ))}
    </div>
  );
}
