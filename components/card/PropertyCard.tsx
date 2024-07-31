import Image from "next/image";
import Link from "next/link";
import CountryFlagAndName from "./CountryFlagAndName";
import PropertyRating from "./PropertyRating";
import FavoriteToggleButton from "./FavoriteToggleButton";
import { PropertyCardProps } from "@/utils/types";
import { formatCurrency } from "@/utils/format";

const PropertyCard = ({ property }: { property: PropertyCardProps }) => {
  const { name, image, price } = property;
  const { country, id: propertyId, tagline } = property;

  return (
    <div className='group relative'>
      <Link href={`/properties/${propertyId}`}>
        {/* image */}
        <div className='relative h-[300px] mb-2 overflow-hidden rounded-md'>
          <Image
            src={image}
            fill
            sizes='(max-width:768px) 100vw, 50vw'
            alt={name}
            className='rounded-md object-cover transform group-hover:scale-110 transition-transform duration-700'
          />
        </div>

        <div className='flex items-center justify-between '>
          {/* name */}
          <h3 className='mt-1'>{name.substring(0, 30)}</h3>

          {/* property rating */}
          <PropertyRating propertyId={propertyId} inPage={false} />
        </div>

        {/* tagline */}
        <p className='text-sm mt-1 text-muted-foreground'>
          {tagline.substring(0, 40)}
        </p>

        <div className='flex items-center justify-between mt-1'>
          {/* price */}
          <p className='text-sm mt-1'>
            <span className=''>{formatCurrency(price)}</span> / night
          </p>
          {/* country and flag */}
          <CountryFlagAndName countryCode={country} />
        </div>
      </Link>

      {/* favorite button */}
      <div className='absolute top-5 right-5 z-10'>
        <FavoriteToggleButton propertyId={propertyId} />
      </div>
    </div>
  );
};
export default PropertyCard;
