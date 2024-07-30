import { categories } from "@/utils/categories";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import Link from "next/link";

const CategoriesList = ({
  category,
  search,
}: {
  category?: string;
  search?: string;
}) => {
  const searchTerm = search ? `&search=${search}` : "";

  return (
    <>
      <ScrollArea className='py-6'>
        <div className='flex items-center justify-between '>
          {categories.map((cat) => {
            const isActive = cat.label === category;
            return (
              <Link
                key={cat.label}
                href={`/?category=${cat.label}${searchTerm}`}>
                <div
                  className={`${
                    isActive ? "text-primary" : ""
                  } flex flex-col items-center px-1 cursor-pointer duration-300 hover:text-primary `}>
                  <cat.icon className='w-8 h-8 lg:w-12 lg:h-12' />
                  <p className='capitalize mt-1 text-xs md:text-sm lg:text-lg'>
                    {cat.label}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
        <ScrollBar orientation='horizontal' />
      </ScrollArea>
    </>
  );
};
export default CategoriesList;
