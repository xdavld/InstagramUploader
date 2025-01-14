"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { ArrowLeft, ArrowRight } from "lucide-react";
import clsx from "clsx";

import { useScheduler } from "@/components/calendar/template/schedular-provider";
import { useModalContext } from "@/components/calendar/template/modal-provider";
import AddEventModal from "@/components/calendar/template/add-event-modal";
import ShowMoreEventsModal from "@/components/calendar/template/show-more-events-modal";
import EventStyled from "@/components/calendar/template/event-styled";
import { Event, CustomEventModal } from "@/components/calendar/template/types";

export function MonthView({
  prevButton,
  nextButton,
  CustomEventComponent,
  CustomEventModal,
  classNames,
}: {
  prevButton?: React.ReactNode;
  nextButton?: React.ReactNode;
  CustomEventComponent?: React.FC<Event>;
  CustomEventModal?: CustomEventModal;
  classNames?: { prev?: string; next?: string; addEvent?: string };
}) {
  const { getters, weekStartsOn } = useScheduler();
  const { showModal } = useModalContext();

  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = getters.getDaysInMonth(
    currentDate.getMonth(),
    currentDate.getFullYear()
  );

  const handlePrevMonth = () => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1
    );
    setCurrentDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );
    setCurrentDate(newDate);
  };

  function handleAddEvent(selectedDay: number) {
    showModal({
      title: "Add Event",
      body: <AddEventModal />,
      getter: async () => {
        const startDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          selectedDay ?? 1,
          0,
          0,
          0,
          0
        );
        const endDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          selectedDay ?? 1,
          23,
          59,
          59,
          999
        );
        return { startDate, endDate };
      },
    });
  }

  function handleShowMoreEvents(dayEvents: Event[]) {
    showModal({
      title: dayEvents && dayEvents[0]?.startDate.toDateString(),
      body: <ShowMoreEventsModal />,
      getter: async () => ({ dayEvents }),
    });
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const daysOfWeek =
    weekStartsOn === "monday"
      ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );

  const startOffset =
    (firstDayOfMonth.getDay() - (weekStartsOn === "monday" ? 1 : 0) + 7) % 7;

  // Calculate previous month's last days for placeholders
  const prevMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() - 1,
    1
  );
  const lastDateOfPrevMonth = new Date(
    prevMonth.getFullYear(),
    prevMonth.getMonth() + 1,
    0
  ).getDate();
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          {prevButton ? (
            <div onClick={handlePrevMonth}>{prevButton}</div>
          ) : (
            <motion.div
              className="hover:z-50 border-none rounded group flex flex-col"
              variants={itemVariants}
            >
              <Card
                isPressable
                className="shadow-md  relative flex p-4 border border-default-100"
                onClick={handlePrevMonth}
                ><div className="flex"><div className="pe-2"><ArrowLeft/></div>Prev</div>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white tracking-tighter text-lg font-semibold">
                  </span>
                </div>
              </Card>
            </motion.div>
          )}
          <motion.div
            key={currentDate.getMonth()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl my-5 tracking-tighter font-bold"
          >
            {currentDate.toLocaleString("default", { month: "long" })}{" "}
            {currentDate.getFullYear()}
          </motion.div>
          {nextButton ? (
            <div onClick={handleNextMonth}>{nextButton}</div>
          ) : (
            <motion.div
              className="hover:z-50 border-none rounded group flex flex-col"
              variants={itemVariants}
            >
              <Card
                isPressable
                className="shadow-md  relative flex p-4 border border-default-100"
                onClick={handleNextMonth}
                ><div className="flex">Next<div className="ps-2"><ArrowRight/></div></div>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white tracking-tighter text-lg font-semibold">
                  </span>
                </div>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={currentDate.getMonth()}
          className="grid grid-cols-7 gap-1 sm:gap-2"
        >
          {daysOfWeek.map((day, idx) => (
            <div
              key={idx}
              className="text-left my-8 text-4xl tracking-tighter font-medium"
            >
              {day}
            </div>
          ))}

          {Array.from({ length: startOffset }).map((_, idx) => (
            <div key={`offset-${idx}`} className="h-[150px] opacity-50">
              <div className={clsx("font-semibold relative text-3xl mb-1")}>
                {lastDateOfPrevMonth - startOffset + idx + 1}
              </div>
            </div>
          ))}

          {daysInMonth.map((dayObj) => {
            const dayEvents = getters.getEventsForDay(dayObj.day, currentDate);

            return (
              <motion.div
                className="hover:z-50 border-none h-[150px] rounded group flex flex-col"
                key={dayObj.day}
                variants={itemVariants}
              >
                <Card
                  isPressable={!!dayEvents?.length}
                  className="shadow-md relative flex p-4 border border-default-100 h-full"
                  onClick={dayEvents?.length > 0 ? () => handleShowMoreEvents(dayEvents) : undefined}
                >
                  <div
                    className={clsx(
                      "font-semibold relative text-3xl mb-1",
                      "text-muted-foreground",
                      new Date().getDate() === dayObj.day &&
                        new Date().getMonth() === currentDate.getMonth() &&
                        new Date().getFullYear() === currentDate.getFullYear()
                        ? "text-[#49DB4F]"
                        : ""
                    )}
                  >
                    {dayObj.day}
                  </div>
                  <div className="flex-grow flex flex-col gap-2 w-full overflow-hidden">
                    <AnimatePresence mode="wait">
                      {dayEvents?.length > 0 && (
                        <EventStyled
                          event={{
                            ...dayEvents[0],
                            CustomEventComponent,
                            minmized: true,
                          }}
                          CustomEventModal={CustomEventModal}
                        />
                      )}
                    </AnimatePresence>
                    {dayEvents.length > 1 && (
                      <Chip
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShowMoreEvents(dayEvents);
                        }}
                        variant="flat"
                        className="hover:bg-default-200 absolute right-2 text-xs top-2 transition duration-300"
                      >
                        {dayEvents.length > 1
                          ? `+${dayEvents.length - 1}`
                          : " "}
                      </Chip>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white tracking-tighter text-lg font-semibold">
                    </span>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}