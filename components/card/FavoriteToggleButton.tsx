import { FaHeart } from "react-icons/fa";
import { Button } from "@/components/ui/button";

import { auth } from "@clerk/nextjs/server";
import { CardSignInButton } from "../form/Buttons";
import { fetchFavoriteIdAction } from "@/utils/actions";
import FavoriteToggleForm from "./FavoriteToggleForm";

const FavoriteToggleButton = async ({ propertyId }: { propertyId: string }) => {
  const { userId } = auth();

  // If user is not logged in, show the sign in button
  if (!userId) {
    return <CardSignInButton />;
  }

  const favoriteId = await fetchFavoriteIdAction({ propertyId });

  return <FavoriteToggleForm favoriteId={favoriteId} propertyId={propertyId} />;
};
export default FavoriteToggleButton;
