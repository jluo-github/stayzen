import { FaStar } from "react-icons/fa";
import { fetchRatingAction } from "@/utils/actions";

const PropertyRating = async ({
  propertyId,
  inPage,
}: {
  propertyId: string;
  inPage: boolean;
}) => {
  const { rating, count } = await fetchRatingAction(propertyId);
  if (!rating) return null;

  const className = `flex items-center gap-1 ${inPage ? "text-md" : "text-sm"}`;
  const countText = count > 1 ? "reviews" : "review";
  const countValue = inPage ? ` / ${count} ${countText}` : "";

  return (
    <span className={className}>
      {rating} <FaStar className='w-3 h-3 text-yellow-400' /> {countValue}
    </span>
  );
};

export default PropertyRating;
