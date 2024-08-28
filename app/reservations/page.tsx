import { fetchReservationsAction } from "@/utils/actions";
import Link from "next/link";
import EmptyList from "@/components/home/EmptyList";
import CountryFlagAndName from "@/components/card/CountryFlagAndName";

import { formatDate, formatCurrency } from "@/utils/format";
import Stats from "@/components/reservations/Stats";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ReservationsPage = async () => {
  const reservations = await fetchReservationsAction();

  if (reservations.length === 0) return <EmptyList />;

  return (
    <>
      <Stats />
      <div className='mt-12'>
        <h4 className='mb-4'>Total reservations: {reservations.length}</h4>
        <Table>
          <TableCaption>A list of your recent reservations.</TableCaption>
          {/*table header */}
          <TableHeader>
            <TableRow>
              <TableHead>Property Name</TableHead>
              <TableHead>Country</TableHead>
              <TableHead>Nights</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Check In</TableHead>
              <TableHead>Check Out</TableHead>
            </TableRow>
          </TableHeader>
          {/*table body */}
          <TableBody>
            {reservations.map((reservation) => {
              const {
                id,
                orderTotal,
                totalNights,
                checkIn,
                checkOut,
                property,
              } = reservation;
              const { id: propertyId, name, country } = property;
              const startDate = formatDate(checkIn);
              const endDate = formatDate(checkOut);

              return (
                <TableRow key={id}>
                  <TableCell>
                    <Link
                      className='underline text-muted-foreground'
                      href={`/properties/${propertyId}`}>
                      {name}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <CountryFlagAndName countryCode={country} />
                  </TableCell>
                  <TableCell>{totalNights}</TableCell>
                  <TableCell>{formatCurrency(orderTotal)}</TableCell>
                  <TableCell>{startDate}</TableCell>
                  <TableCell>{endDate}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </>
  );
};
export default ReservationsPage;
