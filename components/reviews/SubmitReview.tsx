"use client";
import { useState } from "react";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import { Card } from "@/components/ui/card";
import RatingInput from "@/components/form/RatingInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import { Button } from "@/components/ui/button";
import { createReviewAction } from "@/utils/actions";
import { TextAreaAuto, TextAreaInputAuto } from "../form/TextAreaAuto";

const SubmitReview = ({ propertyId }: { propertyId: string }) => {
  const [formVisible, setFormVisible] = useState(false);

  return (
    <div className='mt-8 '>
      <Button onClick={() => setFormVisible((prev) => !prev)}>
        Leave a Review
      </Button>

      {formVisible && (
        <Card className='p-8 mt-8'>
          {/* form */}
          <FormContainer action={createReviewAction}>
            <input type='hidden' name='propertyId' value={propertyId} />
            {/* rating */}
            <RatingInput name='rating' />
            {/* text area */}
            <TextAreaInputAuto
              name='comment'
              labelText='Your Review'
              defaultValue='Amazing place !!!'
            />

            <SubmitButton text='Submit' className='mt-4' />
          </FormContainer>
        </Card>
      )}
    </div>
  );
};
export default SubmitReview;
