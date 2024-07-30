import Image from "next/image";

const ImageContainer = ({
  mainImage,
  name,
}: {
  mainImage: string;
  name: string;
}) => {
  return (
    <div className='relative mt-8 h-[400px] md:h-[500px]'>
      <Image
        src={mainImage}
        sizes='100vw'
        fill
        priority
        alt={name}
        className='object-cover rounded-md'
      />
    </div>
  );
};
export default ImageContainer;
