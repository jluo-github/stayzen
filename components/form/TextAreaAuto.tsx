"use client";
import { useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type TextAreaInputProps = {
  name: string;
  labelText?: string;
  defaultValue?: string;
};

export const TextAreaInputAuto = ({ name, labelText, defaultValue }: TextAreaInputProps) => {
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

      <div>
        <Textarea
          ref={textareaRef}
          onInput={handleInput}
          defaultValue={defaultValue}
          className='leading-loose overflow-hidden resize-none dark:border-violet-800'
          id={name}
          name={name}
          rows={1}
          required
        />
        <div className='text-right '>{remainingChar}</div>
      </div>
    </div>
  );
};

// auto expand textarea no argument
export const TextAreaAuto = () => {
  const MAX_CHAR = 500;
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
      <div>
        <textarea
          ref={textareaRef}
          defaultValue='defaultValue'
          id='textarea'
          rows={1}
          onInput={handleInput}
          placeholder='Textarea'
          className='overflow-hidden resize-none  dark:border-violet-800 rounded-md p-2 w-full'
        />
        <div className='text-right'>{remainingChar}</div>
      </div>
    </div>
  );
};
