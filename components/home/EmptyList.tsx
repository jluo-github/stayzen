import { Button } from "../ui/button";
import Link from "next/link";

const EmptyList = ({
  heading = "No items in the list.",
  message = "Keep exploring.",
  btnText = "Back home",
}: {
  heading?: string;
  message?: string;
  btnText?: string;
}) => {
  return (
    <div className='mt-4'>
      <h2 className=''>{heading}</h2>
      <h4 className=''>{message}</h4>
      <Button asChild className='mt-4' size='lg'>
        <Link href='/'>{btnText}</Link>
      </Button>
    </div>
  );
};
export default EmptyList;
