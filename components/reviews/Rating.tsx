import { FaStar, FaRegStar } from "react-icons/fa";

const Rating = ({ rating }: { rating: number }) => {
  // rating = 2
  // 1 <= 2 true
  // 2 <= 2 true
  // 3 <= 2 false
  // ....
  const stars = Array.from({ length: 5 }, (_, i) => i + 1 <= rating);

  return (
    <div className='flex items-center gap-x-1'>
      {/* check if full star */}
      {stars.map((fullStar, index) => {
        const className = `w-3 h-3 ${
          fullStar ? "text-yellow-400" : "text-gray-400"
        }`;

        return fullStar ? (
          <FaStar className={className} key={index} />
        ) : (
          <FaRegStar className={className} key={index} />
        );
      })}
    </div>
  );
};

export default Rating;
