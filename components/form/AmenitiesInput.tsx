"use client";
import { useState } from "react";
import { amenities, Amenity } from "@/utils/amenities";
import { Checkbox } from "@/components/ui/checkbox";

const AmenitiesInput = ({ defaultValue }: { defaultValue?: Amenity[] }) => {
  const amenitiesWithIcon = defaultValue?.map(({ name, selected }) => ({
    name,
    selected,
    icon: amenities.find((amenity) => amenity.name === name)!.icon,
  }));
  const [selectedA, setSelectedA] = useState<Amenity[]>(
    amenitiesWithIcon || amenities
  );

  const toggleChange = (newAmenity: Amenity) => {
    setSelectedA((prev) =>
      prev.map((prevChecked) =>
        prevChecked.name === newAmenity.name
          ? { ...prevChecked, selected: !prevChecked.selected }
          : prevChecked
      )
    );
  };

  return (
    <>
      <input type='hidden' name='amenities' value={JSON.stringify(selectedA)} />

      <div className='grid grid-cols-2 gap-1 sm:gap-2 md:gap-3 sm:grid-cols-3'>
        {selectedA.map((amenity) => (
          <div
            key={amenity.name}
            className='flex space-x-2 sm:space-x-4 items-center '>
            {/* toggle checkbox */}
            <Checkbox
              className=' dark:border-violet-300'
              id={amenity.name}
              checked={amenity.selected}
              onCheckedChange={() => toggleChange(amenity)}
            />

            {/*label: icon, name */}
            <label
              htmlFor={amenity.name}
              className='flex items-center gap-x-2 capitalize text-sm leading-none lg:text-lg'>
              {amenity.name}
              <amenity.icon className='w-4 h-4 text-violet-600 dark:text-violet-400' />
            </label>
          </div>
        ))}
      </div>
    </>
  );
};
export default AmenitiesInput;
