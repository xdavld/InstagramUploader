"use client";

import React, { useState, useEffect } from "react";
import { Chip } from "@nextui-org/chip";
import { useModalContext } from "@/components/calendar/template/modal-provider";
import AddEventModal from "@/components/calendar/template/add-event-modal";
import { Event, CustomEventModal } from "@/components/calendar/template/types";
import { useScheduler } from "@/components/calendar/template/schedular-provider";
import { motion } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { PreviewPost } from "@/components/calendar/template/preview-post";
import { PreviewStory } from "@/components/calendar/template/preview-story";
import { ChevronDown } from "lucide-react"

// Function to format date
const formatDate = (date: Date) => {
  return date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

interface EventStyledProps extends Event {
  minmized?: boolean;
  CustomEventComponent?: React.FC<Event>;
}

interface ProfileProps {
  userName?: string;
  urlProfile?: string;
}

export default function EventStyled({
  event,
  profile,
  CustomEventModal,
}: {
  event: EventStyledProps;
  profile: ProfileProps;
  CustomEventModal?: CustomEventModal;
}) {

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return event?.minmized ? (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      key={event?.id}
      className="w-full relative use-automation-zoom-in cursor-pointer border border-default-400/60 rounded-lg flex flex-col flex-grow"
    >
      <Chip
        onClickCapture={(e) => {
          e.stopPropagation();
        }}
        variant="flat"
        color={event?.variant}
        classNames={{ content: "p-0" }}
        className="min-w-full items-start p-0 flex-grow flex-col flex h-full rounded-md"
      >
        <div className="flex p-0 flex-col flex-grow px-1 rounded-md items-start justify-center w-full h-full">
          <h1 className="p-0 font-semibold line-clamp-1 text-[1.2vw]">
            {event?.variant === "primary"
              ? "Post"
              : event?.variant === "warning"
              ? "Reel"
              : event?.variant === "danger"
              ? "Story"
              : "Unknown Type"}
          </h1>
          <div className="flex justify-between w-full pt-2">
            <p className="text-sm text-[1.2vw]">{formatDate(event?.startDate)}</p>
          </div>
        </div>
      </Chip>
    </motion.div>
  ) : (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      style={{
        backgroundColor:
          event?.variant === "primary"
            ? "var(--nextui-colors-primary)"
            : event?.variant === "warning"
            ? "var(--nextui-colors-warning)"
            : event?.variant === "danger"
            ? "var(--nextui-colors-danger)"
            : "var(--nextui-colors-default)", // Fallback-Farbe
      }}
    >
      <AccordionItem value={event?.id} className="border-b-0">
      <AccordionTrigger onClick={handleToggle} className="py-1.5">
      <Chip
        variant="flat"
        color={event?.variant}
        classNames={{ content: "p-0 w-full" }}
        className="min-w-full items-start p-3 flex-grow flex-col flex h-full rounded-md"
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex p-0 flex-col flex-grow px-1 rounded-md items-start justify-center h-full">
            <h1 className="p-0 font-semibold line-clamp-1 text-[1.2vw]">
              {event?.variant === "primary"
                ? "Post"
                : event?.variant === "warning"
                ? "Reel"
                : event?.variant === "danger"
                ? "Story"
                : "Unknown Type"}
            </h1>
            <div className="flex justify-between w-full pt-2">
              <p className="text-sm text-[1.2vw]">{formatDate(event?.startDate)}</p>
            </div>
          </div>
          {/* ChevronDown mit Animation */}
          <ChevronDown
            className={`h-8 w-8 text-muted-foreground transition-transform duration-200 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </Chip>
    </AccordionTrigger>
        <AccordionContent className="flex items-center justify-center">
        {event?.variant === "primary" || event?.variant === "warning" ? (
          <PreviewPost
            urlProfile={profile?.urlProfile || ""}
            urlPost={event?.title || ""}
            caption={event?.description || ""}
            userName={profile?.userName || "Default User"}
            type={
              event?.variant === "primary"
                ? "image"
                : event?.variant === "warning"
                ? "video"
                : "Unknown Type"
            }
          />
        ) : (
          <PreviewStory 
            urlProfile={profile?.urlProfile || ""}
            urlPost={event?.title || ""}
            userName={profile?.userName || "Default User"}
          />
        )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
