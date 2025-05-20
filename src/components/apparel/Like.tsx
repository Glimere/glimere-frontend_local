import { Heart } from "lucide-react";
import { useWishlistStore } from "@/store/wishlistStore";
import { useState, useEffect } from "react";

interface LikeProps {
  apparelId: string;
}

const Like: React.FC<LikeProps> = ({ apparelId }) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlistStore();
  const [liked, setLiked] = useState(false);

  // Check if the apparel is in the wishlist
  useEffect(() => {
    const isLiked = wishlist?.apparels?.some((item) => item?._id === apparelId) ?? false;
    setLiked(isLiked);
  }, [wishlist, apparelId]);

  const handleLike = async () => {
    if (liked) {
      removeFromWishlist(apparelId);
    } else {
      addToWishlist(apparelId);
    }
    // Optimistically update liked state
    setLiked(!liked);
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
