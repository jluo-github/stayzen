import BookingCalendar from "@/components/booking/BookingCalendar";
import FavoriteToggleButton from "@/components/card/FavoriteToggleButton";
import PropertyRating from "@/components/card/PropertyRating";
import BreadCrumbs from "@/components/properties/BreadCrumbs";
import ImageContainer from "@/components/properties/ImageContainer";
import PropertyDetails from "@/components/properties/PropertyDetails";
import ShareButton from "@/components/properties/ShareButton";
import UserInfo from "@/components/properties/UserInfo";
import { fetchPropertyDetailsAction } from "@/utils/actions";
import Description from "@/components/properties/Description";

import { redirect } from "next/navigation";
import { Separator } from "@radix-ui/react-dropdown-menu";
import Amenities from "@/components/properties/Amenities";

const PropertyDetailsPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const property = await fetchPropertyDetailsAction(id);

  if (!property) redirect("/");

  const {
    name,
    tagline,
    baths,
    bedrooms,
    beds,
    guests,
    image,
    profile,
    description,
    amenities,
  } = property;
  const details = { baths, bedrooms, beds, guests };

  const { firstName, profileImage } = profile;

  console.log('amenities', amenities);

  return (
    <>
      <BreadCrumbs name={name} />

      <header className='flex items-center justify-between mt-4'>
        <h1 className=''>{tagline}</h1>
        <div className=' flex items-center gap-x-4'>
          {/* share button */}
          <ShareButton propertyId={id} name={name} />

          {/* favorite button */}
          <FavoriteToggleButton propertyId={id} />
        </div>
      </header>

      {/* image */}
      <ImageContainer mainImage={image} name={name} />

      <div className='md:grid sm:grid-cols-9  gap-x-12 mt-12'>
        {/* name, rating */}
        <div className='sm:col-span-6 '>
          <div className='flex items-center gap-x-4'>
            <h1 className=''>{name}</h1>
            <PropertyRating inPage propertyId={id} />
          </div>

          {/* details */}
          <PropertyDetails details={details} />

          {/* user info */}
          <UserInfo profile={{ firstName, profileImage }} />
          <Separator className='mt-6' />

          {/* description */}
          <Description description={description} />

          {/* amenities */}
          <Amenities amenities={amenities} />

          {/* countries */}

          {/* map */}
        </div>

        {/* calendar */}
        <div className='flex flex-col items-center sm:col-span-3 '>
          <BookingCalendar />
        </div>
      </div>
    </>
  );
};
export default PropertyDetailsPage;
