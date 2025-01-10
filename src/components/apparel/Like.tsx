import { Heart } from "lucide-react";

interface LikeProps {
  liked: boolean;
  setLiked: (liked: boolean) => void;
}

const Like: React.FC<LikeProps> = ({ liked, setLiked }) => {
  return (
    <div onClick={() => setLiked(!liked)} className="cursor-pointer">
      <Heart
        className={` stroke-primary-100 stroke-[1px] ${
          liked ? "fill-primary-100" : ""
        }`}
      />
    </div>
  );
};

export default Like;
