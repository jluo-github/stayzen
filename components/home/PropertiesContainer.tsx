import { fetchPropertiesAction } from "@/utils/actions";
import PropertiesList from "./PropertiesList";
import EmptyList from "./EmptyList";
import type { PropertyCardProps } from "@/utils/types";

const PropertiesContainer = async ({
  category,
  search,
}: {
  category?: string;
  search?: string;
}) => {
  const properties: PropertyCardProps[] = await fetchPropertiesAction({
    search,
    category,
  });
  if (properties.length === 0) {
    return (
      <EmptyList
        heading='No results.'
        message='Please change your filters.'
        btnText='Reset Filters'
      />
    );
  }

  return <PropertiesList properties={properties} />;
};
export default PropertiesContainer;
