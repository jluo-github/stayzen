import { IconType } from "react-icons";
import {
  MdOutlineCabin,
  MdOutlineHouse,
  MdOutlineHolidayVillage,
} from "react-icons/md";

import { TbCaravan, TbBuildingCottage } from "react-icons/tb";
import { PiBuildingApartmentBold, PiTent } from "react-icons/pi";
import { BsHouseHeart, BsHouse } from "react-icons/bs";
export type Category = {
  label: CategoryLabel;
  icon: IconType;
};

export type CategoryLabel =
  | "house"
  | "apartment"
  | "cabin"
  | "cottage"
  | "tiny house"
  | "villa"
  | "tent"
  | "caravan"
  | "lodge";

export const categories: Category[] = [
  {
    label: "house",
    icon: BsHouseHeart,
  },
  {
    label: "apartment",
    icon: PiBuildingApartmentBold,
  },
  {
    label: "cabin",
    icon: BsHouse,
  },
  {
    label: "cottage",
    icon: TbBuildingCottage,
  },
  {
    label: "tiny house",
    icon: MdOutlineHouse,
  },
  {
    label: "villa",
    icon: MdOutlineHolidayVillage,
  },
  {
    label: "tent",
    icon: PiTent,
  },
  {
    label: "caravan",
    icon: TbCaravan,
  },

  {
    label: "lodge",
    icon: MdOutlineCabin,
  },
];
