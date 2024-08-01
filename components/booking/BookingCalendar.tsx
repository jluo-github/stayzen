"use client";

import { Calendar } from "@/components/ui/calendar";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { DateRange } from "react-day-picker";
import { usePropertyStore } from "@/utils/store";
import {
  generateDisabledDates,
  generateDateRange,
  defaultSelected,
  generateBlockedPeriods,
} from "@/utils/calendar";
import { set } from "date-fns";

const BookingCalendar = () => {
  const { toast } = useToast();
  const currentDate = new Date();
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);
  const { bookings } = usePropertyStore((state) => state);
  // grey out dates before today
  const blockedDates = generateBlockedPeriods({ bookings, today: currentDate });
  // grey out dates that are already booked
  const unavailableDates = generateDisabledDates(blockedDates);

  useEffect(() => {
    const selectedRange = generateDateRange(range);

    // check if selected dates are already booked
    const isUnavailableIncluded = selectedRange.some((date) => {
      // return false if no date is booked
      if (unavailableDates[date]) {
        setRange(defaultSelected);
        toast({
          description: "Some dates are already booked, please try again",
        });
        return true;
      }
      return false;
    });
    usePropertyStore.setState({ range });
  }, [range]);

  return (
    <Calendar
      mode='range'
      defaultMonth={currentDate}
      selected={range}
      onSelect={setRange}
      className='mb-4'
      disabled={blockedDates}
    />
  );
};

export default BookingCalendar;
