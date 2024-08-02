import {
  fetchRentalByIdAction,
  updatePropertyImageAction,
  updatePropertyAction,
} from "@/utils/actions";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import CategoriesInput from "@/components/form/CategoriesInput";
import PriceInput from "@/components/form/PriceInput";
import CountriesInput from "@/components/form/CountriesInput";
import CounterInput from "@/components/form/CounterInput";
import AmenitiesInput from "@/components/form/AmenitiesInput";
import { SubmitButton } from "@/components/form/Buttons";
import { redirect } from "next/navigation";
import { type Amenity } from "@/utils/amenities";
import ImageInputContainer from "@/components/form/ImageInputContainer";
import { TextAreaInputAuto } from "@/components/form/TextAreaAuto";

const EditRentalPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const property = await fetchRentalByIdAction(id);
  if (!property) redirect("/");

  const {
    name,
    image,
    tagline,
    price,
    category,
    country,
    description,
    guests,
    bedrooms,
    beds,
    baths,
    amenities,
  } = property;

  const defaultAmenities: Amenity[] = JSON.parse(amenities);

  return (
    <>
      <h1 className='mb-12'>Edit Property</h1>

      <div className='border p-8 rounded-md '>
        {/* image */}
        <div className='mb-4'>
          <ImageInputContainer
            action={updatePropertyImageAction}
            name={name}
            text='Update Image'
            image={image}>
            <input type='hidden' name='id' value={id} />
          </ImageInputContainer>
        </div>

        {/* form input */}
        <FormContainer action={updatePropertyAction}>
          <input type='hidden' name='id' value={id} />
          {/* name */}
          <div className='grid md:grid-cols-2 gap-8 mb-4'>
            <FormInput
              name='name'
              type='text'
              label='Name (20 limit)'
              defaultValue={name}
            />
            <FormInput
              name='tagline'
              type='text'
              label='Tagline (20 limit)'
              defaultValue={tagline}
            />
            <PriceInput defaultValue={price} />
            <CategoriesInput defaultValue={category} />
            <CountriesInput defaultValue={country} />
          </div>

          {/* textarea */}
          <TextAreaInputAuto
            name='description'
            labelText='Description'
            defaultValue={description}
          />

          {/* guests count */}
          <CounterInput detail='guests' defaultValue={guests} />
          <CounterInput detail='bedrooms' defaultValue={bedrooms} />
          <CounterInput detail='beds' defaultValue={beds} />
          <CounterInput detail='baths' defaultValue={baths} />

          {/* amenities */}
          <h3 className='mt-6 mb-2'>Amenities</h3>
          <AmenitiesInput defaultValue={defaultAmenities} />
          {/* edit button */}
          <SubmitButton text='Edit Property' className='mt-12' />
        </FormContainer>
      </div>
    </>
  );
};
export default EditRentalPage;
