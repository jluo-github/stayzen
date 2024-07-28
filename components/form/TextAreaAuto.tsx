"use client";
import { useEffect, useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type TextAreaInputProps = {
  name: string;
  labelText?: string;
  defaultValue?: string;
};

const tempDefaultDescription =
  "Charming Downtown Loft with Modern Amenities. Experience the vibrant heart of the city in this stylish downtown loft, perfect for solo travelers or couples seeking an urban retreat. This Airbnb offers a blend of modern comfort and historic charm, featuring exposed brick walls, high ceilings, and large windows that flood the space with natural light. The open-concept living area includes a fully equipped kitchen, cozy dining nook, and a comfortable lounge space with a flat-screen TV. The bedroom, adorned with plush bedding and contemporary decor, promises restful nights. Located within walking distance to trendy cafes, boutique shops, and cultural attractions, this loft is your ideal home base for exploring the city's best offerings. Enjoy the convenience of high-speed Wi-Fi, air conditioning, and a washer/dryer unit, ensuring a hassle-free stay.";

export const TextAreaInputAuto = ({
  name,
  labelText,
  defaultValue,
}: TextAreaInputProps) => {
  const MAX_CHAR = 1000;
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [content, setContent] = useState<string>("");
  const [remainingChar, setRemainingChar] = useState<number>(MAX_CHAR);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    // if character length is less or equal to MAX_CHAR
    if (newValue.length <= MAX_CHAR) {
      setContent(newValue);
      // set remaining character
      setRemainingChar(MAX_CHAR - newValue.length);
      // auto expand the textarea
      autoExpand();
    }
  };

  const autoExpand = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      //reset to shrink the textarea
      textarea.style.height = "auto";
      // Set new height
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };
  return (
    <div className='mb-4'>
      <Label className='capitalize'>{labelText || name}</Label>

      <>
        <Textarea
          ref={textareaRef}
          value={content}
          onInput={handleInput}
          className='leading-loose overflow-hidden resize-none'
          id={name}
          name={name}
          rows={1}
          required
        />
        <div className='text-right '>{remainingChar}</div>
      </>
    </div>
  );
};

// auto expand textarea
export const TextAreaAuto = () => {
  const MAX_CHAR = 50;
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [content, setContent] = useState<string>("");
  const [remainingChar, setRemainingChar] = useState<number>(MAX_CHAR);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    // if character length is less or equal to MAX_CHAR
    if (newValue.length <= MAX_CHAR) {
      setContent(newValue);
      // set remaining character
      setRemainingChar(MAX_CHAR - newValue.length);
      // auto expand the textarea
      autoExpand();
    }
  };

  const autoExpand = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      //reset to shrink the textarea
      textarea.style.height = "auto";
      // Set new height
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  return (
    <div className='flex flex-col my-4 w-full'>
      <label htmlFor='textarea'>Message</label>
      <>
        <textarea
          ref={textareaRef}
          value={content}
          id='textarea'
          rows={1}
          onInput={handleInput}
          placeholder='Textarea'
          className='overflow-hidden resize-none border border-violet-500 rounded-md p-2 w-full'
        />
        <div className='text-right'>{remainingChar}</div>
      </>
    </div>
  );
};
