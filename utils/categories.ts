import { IconType } from "react-icons";
import {
  MdOutlineCabin,
  MdOutlineVilla,
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
  | "apartment"
  | "house"
  | "cabin"
  | "cottage"
  | "townhouse"
  | "villa"
  | "tent"
  | "caravan"
  | "lodge";

export const categories: Category[] = [
  {
    label: "apartment",
    icon: PiBuildingApartmentBold,
  },
  {
    label: "house",
    icon: BsHouseHeart,
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
    label: "townhouse",
    icon: MdOutlineHolidayVillage,
  },
  {
    label: "villa",
    icon: MdOutlineVilla,
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