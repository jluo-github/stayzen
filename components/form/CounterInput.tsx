"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LuMinus, LuPlus } from "react-icons/lu";

import { Button } from "../ui/button";
import { useState } from "react";

const CounterInput = ({
  detail,
  defaultValue,
}: {
  detail: string;
  defaultValue?: number;
}) => {
  const [count, setCount] = useState(defaultValue || 0);
  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <Card className='mb-4'>
      <input type='hidden' name={detail} value={count} />

      {/* card header */}
      <CardHeader className='flex flex-col gap-y-5'>
        {/* title */}
        <div className='flex items-center justify-between flex-wrap'>
          <div className='flex items-center gap-x-4'>
            <h3 className='capitalize'>{detail}</h3>
            <span className='text-muted-foreground'>
              Specify the number of {detail}
            </span>
          </div>
        </div>

        {/* buttons */}
        <div className='flex items-center gap-4'>
          <Button
            variant='outline'
            size='icon'
            type='button'
            onClick={decrement}>
            <LuMinus className='w-5 h-5 text-primary dark:text-violet-300' />
          </Button>

          {/* count */}
          {/* <input type='text' name={detail} value={count} className='text-xl font-bold w-5 text-center'/> */}
          <span className='text-xl font-bold w-5 text-center'>{count}</span>

          <Button
            variant='outline'
            size='icon'
            type='button'
            onClick={increment}>
            <LuPlus className='w-5 h-5 text-primary dark:text-violet-300' />
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
};
export default CounterInput;
