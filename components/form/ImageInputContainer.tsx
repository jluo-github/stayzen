"use client";
import { useState, type ReactNode } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import FormContainer from "./FormContainer";
import ImageInput from "./ImageInput";
import { SubmitButton } from "./Buttons";
import { type actionFunction } from "@/utils/types";
import { LuUser2 } from "react-icons/lu";

type ImageInputContainerProps = {
  image: string;
  name: string;
  action: actionFunction;
  text: string;
  children?: ReactNode;
};

const ImageInputContainer = (props: ImageInputContainerProps) => {
  const { image, name, action, text } = props;
  const [isFormVisible, setFormVisible] = useState(false);

  // show user icon if no image
  const userIcon = (
    <LuUser2 className='w-24 h-24 bg-primary text-white rounded-md mb-4' />
  );

  return (
    <>
      {/* image */}
      {image ? (
        <Image
          src={image}
          width={100}
          height={100}
          alt={name}
          className='w-24 h-24 rounded-md object- mb-4'
        />
      ) : (
        userIcon
      )}

      {/* button */}
      <Button
        variant='outline'
        size='sm'
        onClick={() => setFormVisible((prev) => !prev)}>
        {text}
      </Button>

      {/* if update form visible */}
      {isFormVisible && (
        <div className='max-w-lg mt-4'>
          <FormContainer action={action}>
            {props.children}
            <ImageInput />
            <SubmitButton
              size='sm'
              text='Upload Profile Image'
              className='my-6'
            />
          </FormContainer>
        </div>
      )}
    </>
  );
};
export default ImageInputContainer;
