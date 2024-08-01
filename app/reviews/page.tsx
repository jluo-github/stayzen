import EmptyList from "@/components/home/EmptyList";
import { deleteReviewAction, fetchReviewsByUserAction } from "@/utils/actions";
import ReviewCard from "@/components/reviews/ReviewCard";
import FormContainer from "@/components/form/FormContainer";
import { IconButton } from "@/components/form/Buttons";

const ReviewsPage = async () => {
  const reviews = await fetchReviewsByUserAction();
  if (reviews.length === 0) return <EmptyList />;

  return (
    <>
      <h2 className='mb-4'>Your Reviews</h2>

      <div className='grid sm:grid-cols-2 gap-4 mt-4'>
        {reviews.map((review) => {
          const { id, comment, rating } = review;
          const { name, image } = review.property;

          const reviewInfo = {
            comment,
            rating,
            name,
            image,
          };

          return (
            <ReviewCard key={id} reviewInfo={reviewInfo}>
              <DeleteReview reviewId={id} />
            </ReviewCard>
          );
        })}
      </div>
    </>
  );
};

// Delete Review component
const DeleteReview = async ({ reviewId }: { reviewId: string }) => {
  // bind reviewId to prevState
  const deleteReview = deleteReviewAction.bind(null, { reviewId });

  return (
    <FormContainer action={deleteReview}>
      <IconButton actionType='delete' />
    </FormContainer>
  );
};

export default ReviewsPage;

