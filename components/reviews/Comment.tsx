"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Comment = ({ comment }: { comment: string }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  const longComment = comment.length > 100;
  const displayComment =
    longComment && !showMore ? `${comment.slice(0, 100)}...` : comment;

  return (
    <>
      <p>{displayComment}</p>

      {longComment && (
        <Button
          variant='link'
          className='pl-0 text-violet-600 dark:text-violet-400'
          onClick={toggleShowMore}>
          {showMore ? "Show Less" : "Show More"}
        </Button>
      )}
    </>
  );
};
export default Comment;
