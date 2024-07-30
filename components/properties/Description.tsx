"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Description = ({ description }: { description: string }) => {
  const [showMore, setShowMore] = useState(false);

  // split the description into words
  const words = description.split(" ");
  // check if the text is long
  const longText = words.length > 100;

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  // display the first 100 words or the full description
  const displayText =
    !showMore && longText ? words.slice(0, 100).join(" ") + "..." : description;

  return (
    <div className='mt-4'>
      <h3 className='mb-4'>Description</h3>
      <p className='text-muted-foreground leading-loose'>{displayText}</p>

      {/* show more or less button */}
      {longText && (
        <Button variant='link' className='pl-0' onClick={toggleShowMore}>
          {showMore ? "Show less" : "Show more"}
        </Button>
      )}
    </div>
  );
};
export default Description;
