import { DateRange } from "react-day-picker";
import { Booking } from "@/utils/types";

export const defaultSelected: DateRange = {
  from: undefined,
  to: undefined,
};

// Generate a list of blocked periods
export const generateBlockedPeriods = ({
  bookings,
  today,
}: {
  bookings: Booking[];
  today: Date;
}) => {
  today.setHours(0, 0, 0, 0); // Set the time to 00:00:00.000

  const disabledDays: DateRange[] = [
    ...bookings.map((booking) => ({
      from: booking.checkIn,
      to: booking.checkOut,
    })),
    {
      from: new Date(0), // This is 01 January 1970 00:00:00 UTC.
      to: new Date(today.getTime() - 24 * 60 * 60 * 1000), // This is yesterday.
    },
  ];
  return disabledDays;
};

// Generate a range of dates between two dates
export const generateDateRange = (range: DateRange | undefined): string[] => {
  if (!range || !range.from || !range.to) return [];

  let startDate = new Date(range.from);
  const endDate = new Date(range.to);
  const dateRange: string[] = [];

  while (startDate <= endDate) {
    const dateString = startDate.toISOString().split("T")[0];
    dateRange.push(dateString);
    startDate.setDate(startDate.getDate() + 1);
  }

  return dateRange;
};

// Generates a mapping of disabled dates
export const generateDisabledDates = (
  disabledDays: DateRange[]
): { [key: string]: boolean } => {
  if (disabledDays.length === 0) return {};

  const disabledDates: { [key: string]: boolean } = {};
  const today = new Date();
  today.setHours(0, 0, 0, 0); // set time to 00:00:00 to compare only the date part

  disabledDays.forEach((range) => {
    if (!range.from || !range.to) return;

    let startDate = new Date(range.from);
    const endDate = new Date(range.to);

    while (startDate <= endDate) {
      if (startDate < today) {
        startDate.setDate(startDate.getDate() + 1);
        continue;
      }
      const dateString = startDate.toISOString().split("T")[0];
      disabledDates[dateString] = true;
      startDate.setDate(startDate.getDate() + 1);
    }
  });

  return disabledDates;
};

// Calculate the number of days between two dates
export function calculateDaysBetween({
  checkIn,
  checkOut,
}: {
  checkIn: Date;
  checkOut: Date;
}) {
  // Calculate the difference in milliseconds
  const diffInMs = Math.abs(checkOut.getTime() - checkIn.getTime());

  // Convert the difference in milliseconds to days
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

  return diffInDays;
}
