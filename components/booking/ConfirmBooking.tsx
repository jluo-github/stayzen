"use client";
import { SignInButton, useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { usePropertyStore } from "@/utils/store";
import FormContainer from "@/components/form/FormContainer";
import { SubmitButton } from "@/components/form/Buttons";
import { createBookingAction } from "@/utils/actions";


const ConfirmBooking = () => {
  const { userId } = useAuth();
  const { propertyId, range } = usePropertyStore((state) => state);
  const checkIn = range?.from as Date;
  const checkOut = range?.to as Date;

  if (!userId) {
    return (
      <SignInButton mode='modal'>
        <Button type='button' className='w-full'>
          Please Sign In to Book
        </Button>
      </SignInButton>
    );
  }

  const handleSubmit = createBookingAction.bind(null, {
    propertyId,
    checkIn,
    checkOut,
  });

  return (
    <>
      <FormContainer action={handleSubmit}>
        <SubmitButton text='Reserve' className='w-full' />
      </FormContainer>
    </>
  );
};
export default ConfirmBooking;
