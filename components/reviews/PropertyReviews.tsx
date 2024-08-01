import { fetchPropertyReviewsAction } from "@/utils/actions";
import ReviewCard from "./ReviewCard";

const PropertyReviews = async ({ propertyId }: { propertyId: string }) => {
  const reviews = await fetchPropertyReviewsAction(propertyId);
  if (reviews.length < 1) return <div>No reviews yet</div>;

  return (
    <div className='mt-8'>
      <h2 className='mt-2'>Reviews</h2>

      <div className='grid md:grid-cols-2 gap-8 mt-4'>
        {reviews.map((review) => {
          const { comment, rating } = review;
          const { firstName, profileImage } = review.profile;

          const reviewInfo = {
            comment,
            rating,
            name: firstName,
            image: profileImage,
          };
          return <ReviewCard key={review.id} reviewInfo={reviewInfo} />;
        })}
      </div>
    </div>
  );
};

export default PropertyReviews;

