import { FaStar } from "react-icons/fa";

const PropertyRating = ({
  propertyId,
  inPage,
}: {
  propertyId: string;
  inPage: boolean;
}) => {
  //todo temp
  const rating = 4.7;
  const count = 100;

  const className = `flex items-center gap-1 ${inPage ? "text-md" : "text-sm"}`;
  const countText = count > 1 ? "reviews" : "review";
  const countValue = `(${count}) ${inPage ? countText : ""}`;

  return (
    <span className={className}>
      <FaStar className='w-3 h-3' />
      {rating} {countValue}
    </span>
  );
};
export default PropertyRating;
