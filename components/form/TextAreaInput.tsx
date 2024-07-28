import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type TextAreaInputProps = {
  name: string;
  labelText?: string;
  defaultValue?: string;
};

const tempDefaultDescription =
  "Charming Downtown Loft with Modern Amenities. Experience the vibrant heart of the city in this stylish downtown loft, perfect for solo travelers or couples seeking an urban retreat. This Airbnb offers a blend of modern comfort and historic charm, featuring exposed brick walls, high ceilings, and large windows that flood the space with natural light. The open-concept living area includes a fully equipped kitchen, cozy dining nook, and a comfortable lounge space with a flat-screen TV. The bedroom, adorned with plush bedding and contemporary decor, promises restful nights. Located within walking distance to trendy cafes, boutique shops, and cultural attractions, this loft is your ideal home base for exploring the city's best offerings. Enjoy the convenience of high-speed Wi-Fi, air conditioning, and a washer/dryer unit, ensuring a hassle-free stay.";

const TextareaInput = ({
  name,
  labelText,
  defaultValue,
}: TextAreaInputProps) => {
  return (
    <div className='mb-4'>
      <Label className='capitalize'>{labelText || name}</Label>

      <Textarea
        className='leading-loose'
        id={name}
        name={name}
        defaultValue={defaultValue || tempDefaultDescription}
        rows={4}
        required
      />
    </div>
  );
};
export default TextareaInput;
