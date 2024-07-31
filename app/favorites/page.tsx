import EmptyList from "@/components/home/EmptyList";
import PropertiesList from "@/components/home/PropertiesList";
import { fetchFavoritesAction } from "@/utils/actions";

const FavoritesPage = async () => {
  const favorites = await fetchFavoritesAction();
  
  if (favorites.length === 0) {
    return <EmptyList />;
  }

  return <PropertiesList properties={favorites} />;
};
export default FavoritesPage;
