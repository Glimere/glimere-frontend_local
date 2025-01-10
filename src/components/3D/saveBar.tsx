import { NextPage } from "next";
import { Button } from "../ui/button";
import Refresh from "../../../public/images/refresh.svg";

interface Props {}

const SaveBar: NextPage<Props> = ({}) => {
  return (
    <>
      <div className="absolute bottom-[10px] flex flex-row gap-[20px] scale-90 z-[3]">
        <Button className="bg-primary-100 rounded-full px-[80px]">Save Look</Button>
        <Button size="icon" className="rounded-full [&_svg]:size-4">
          <Refresh className=" scale-110"/>
        </Button>
      </div>
    </>
  );
};

export default SaveBar;
