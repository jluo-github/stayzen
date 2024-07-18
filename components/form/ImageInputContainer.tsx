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
  const [isUpdateFormVisible, setUpdateFormVisible] = useState(false);

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
          className='w-24 h-24 rounded-md object-cover mb-4'
        />
      ) : (
        userIcon
      )}

      {/* button */}
      <Button
        variant='outline'
        size='sm'
        onClick={() => setUpdateFormVisible((prev) => !prev)}>
        {text}
      </Button>

      {/* if update form visible */}
      {isUpdateFormVisible && (
        <div>
          <FormContainer action={action}>
            {props.children}
            <ImageInput />
            <SubmitButton size='sm' />
          </FormContainer>
        </div>
      )}
    </>
  );
};
export default ImageInputContainer;
