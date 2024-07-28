"use client";
import { useState } from "react";
import { amenities, Amenity } from "@/utils/amenities";
import { Checkbox } from "@/components/ui/checkbox";

const AmenitiesInput = ({ defaultValue }: { defaultValue?: Amenity[] }) => {
  const [selectedA, setSelectedA] = useState<Amenity[]>(
    defaultValue || amenities
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

      <div className='grid grid-cols-2 gap-2 sm:gap-4 sm:grid-cols-3'>
        {selectedA.map((amenity) => (
          <div
            key={amenity.name}
            className='flex space-x-2 sm:space-x-6 items-center '>
            {/* toggle checkbox */}
            <Checkbox
              id={amenity.name}
              checked={amenity.selected}
              onCheckedChange={() => toggleChange(amenity)}
            />

            {/*label: icon, name */}
            <label
              htmlFor={amenity.name}
              className='flex items-center gap-x-2 capitalize text-sm leading-none'>
              <amenity.icon className='w-4 h-4' />
              {amenity.name}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};
export default AmenitiesInput;
