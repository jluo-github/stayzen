import EmptyList from "@/components/home/EmptyList";
import CountryFlagAndName from "@/components/card/CountryFlagAndName";
import Link from "next/link";

import { formatDate, formatCurrency } from "@/utils/format";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import FormContainer from "@/components/form/FormContainer";
import { IconButton } from "@/components/form/Buttons";
import { fetchBookingsAction, deleteBookingAction } from "@/utils/actions";

const BookingsPage = async () => {
  const bookings = await fetchBookingsAction();
  if (bookings.length === 0) {
    return <EmptyList />;
  }

  return (
    <div className='mt-12'>
      <h3 className='my-4'>Total bookings: {bookings.length}</h3>
      <Table>
        <TableCaption>A list of your recent bookings.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Property Name</TableHead>
            <TableHead>Country</TableHead>
            <TableHead>Nights</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Check In</TableHead>
            <TableHead>Check Out</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map((booking) => {
            const { id, orderTotal, totalNights, checkIn, checkOut } = booking;
            const { id: propertyId, name, country } = booking.property;
            const startDate = formatDate(checkIn);
            const endDate = formatDate(checkOut);

            return (
              <TableRow key={id}>
                <TableCell className='font-medium'>
                  <Link href={`/properties/${propertyId}`}>{name}</Link>
                </TableCell>
                <TableCell>
                  <CountryFlagAndName countryCode={country} />
                </TableCell>
                <TableCell>{totalNights}</TableCell>
                <TableCell>{formatCurrency(orderTotal)}</TableCell>
                <TableCell>{startDate}</TableCell>
                <TableCell>{endDate}</TableCell>
                <TableCell>
                  <DeleteBooking bookingId={id} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

const DeleteBooking = ({ bookingId }: { bookingId: string }) => {
  const deleteBooking = deleteBookingAction.bind(null, { bookingId });
  return (
    <FormContainer action={deleteBooking}>
      <IconButton actionType='delete' />
    </FormContainer>
  );
};
export default BookingsPage;
