import { IconType } from "react-icons";
import { FiTrello,  FiRadio, FiFilm } from "react-icons/fi";
import { GiCampfire } from "react-icons/gi";
import { PiCookingPot } from "react-icons/pi";
import { MdOutlineOutdoorGrill } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { LuMicrowave } from "react-icons/lu";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { IoCarSportOutline } from "react-icons/io5";
import { TbAirConditioning } from "react-icons/tb";

export type Amenity = {
  name: string;
  icon: IconType;
  selected: boolean;
};

export const amenities: Amenity[] = [
  { name: "air conditioning", icon: TbAirConditioning, selected: false },
  { name: "bbq grill", icon: MdOutlineOutdoorGrill, selected: false },
  { name: "bed linens", icon: IoBedOutline, selected: false },
  { name: "fireplace", icon: GiCampfire, selected: false },
  { name: "heating", icon: FiTrello, selected: false },
  { name: "kitchen", icon: PiCookingPot, selected: false },
  { name: "microwave", icon: LuMicrowave, selected: false },
  { name: "parking", icon: IoCarSportOutline, selected: false },
  { name: "refrigerator", icon: CgSmartHomeRefrigerator, selected: false },
  { name: "TV", icon: FiFilm, selected: false },
  { name: "washer", icon: MdOutlineLocalLaundryService, selected: false },
  { name: "wifi", icon: FiRadio, selected: false },
];
