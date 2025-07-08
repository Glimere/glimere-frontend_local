import { useWishlistStore } from "@/store/wishlistStore";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

interface LikeProps {
  apparelId: string;
}

const Like: React.FC<LikeProps> = ({ apparelId }) => {
  const { wishlist, addToWishlist, removeFromWishlist} =
    useWishlistStore();
  const [liked, setLiked] = useState(false);

  // Update liked state based on wishlist
  useEffect(() => {
    const isLiked =
      wishlist?.apparels?.some((item) => item?._id === apparelId) ?? false;
    setLiked(isLiked);
  }, [wishlist, apparelId]);

  const handleLike = async () => {
    const previousLiked = liked;
    setLiked(!liked); // Optimistic update

    try {
      if (previousLiked) {
        await removeFromWishlist(apparelId);
      } else {
        await addToWishlist(apparelId);
      }
    } catch (error) {
      setLiked(previousLiked); // Revert on error
    }
  };

  return (
    <div onClick={handleLike} className="cursor-pointer">
      <Heart
        className={`stroke-primary-100 stroke-[1px] ${
          liked ? "fill-primary-100" : ""
        }`}
      />
    </div>
  );
};

export default Like;
