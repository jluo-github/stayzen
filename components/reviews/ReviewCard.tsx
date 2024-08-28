import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Rating from "./Rating";
import Comment from "./Comment";

type ReviewCardProps = {
  reviewInfo: {
    comment: string;
    rating: number;
    name: string;
    image: string;
  };
  children?: React.ReactNode;
};

const ReviewCard = ({ reviewInfo, children }: ReviewCardProps) => {
  const { comment, rating, name, image } = reviewInfo;

  return (
    <Card id='reviews' className='relative'>
      {/* header */}
      <CardHeader>
        <div className='flex items-center'>
          {/* image */}
          <img
            src={image}
            alt='profile'
            className='w-12 h-12 rounded-full object-cover'
          />
          {/* name, rating */}
          <div className='ml-4'>
            <h3 className='capitalize mb-1'>{name}</h3>

            <Rating rating={rating} />
          </div>
        </div>
      </CardHeader>
      {/* comment */}
      <CardContent>
        <Comment comment={comment} />
      </CardContent>

      {/* children */}
      {/* delete button */}
      <div className='absolute top-3 right-3'>{children}</div>
    </Card>
  );
};
export default ReviewCard;
