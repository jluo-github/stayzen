import { Amenity, amenityIcons } from "@/utils/amenities";

const Amenities = ({ amenities }: { amenities: string }) => {
  const amenitiesList: Amenity[] = JSON.parse(amenities as string);

  // check if all amenities are not selected
  const noAmenities = amenitiesList.every((amenity) => !amenity.selected);
  if (noAmenities) return null;

  return (
    <div className='mt-4'>
      <h3 className='mb-4'>What this place offers</h3>
      <div className='grid grid-cols-2 '>
        {amenitiesList.map((amenity) => {
          if (!amenity.selected) return null;
          const Icon = amenityIcons[amenity.name];

          return (
            <div key={amenity.name} className='flex items-center gap-x-4 mb-2'>
              {Icon && <Icon className='h-6 w-6 text-primary dark:text-violet-400' />}
              <span className='text-sm capitalize'>{amenity.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Amenities;
