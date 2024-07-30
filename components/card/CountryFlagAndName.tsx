import { findCountryByCode } from "@/utils/countries";

const CountryFlagAndName = ({ country }: { country: string }) => {
  const validCountry = findCountryByCode(country)!;

  const countryName =
    validCountry.name.length > 20
      ? `${validCountry.name.substring(0, 20)}...`
      : validCountry.name;

  return (
    <span className='flex items-center justify-between gap-2 text-sm '>
      {validCountry?.flag} {countryName}
    </span>
  );
};
export default CountryFlagAndName;
