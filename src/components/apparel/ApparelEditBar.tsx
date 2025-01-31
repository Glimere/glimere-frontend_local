import { NextPage } from "next";
import ThreeDIcon from "../../../public/images/3D-icon.svg";
import Edit from "../../../public/images/edit.svg";
import Reset from "../../../public/images/reset-edit.svg";
import Zoom from "../../../public/images/zoom.svg";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import { AnimatePresence } from "framer-motion";
import { X } from "lucide-react";


interface Props {
  threeDToggle: boolean;
  setThreeDToggle: (value: boolean) => void;
  editToggle: boolean;
  setEditToggle: (value: boolean) => void;
}

const ApparelEditBar: NextPage<Props> = ({
  threeDToggle,
  setThreeDToggle,
  editToggle,
  setEditToggle,
}) => {
  return (
    <div className="absolute right-[6%] sm:right-[36.5%] flex flex-col gap-[3rem] z-[3] pt-[50%] sm:pt-[10%]">
      <div className="max-h-[200px]">
        {editToggle ? (
          <></>
        ) : (
          <div className="flex flex-col gap-[10px] items-center">
            <ThreeDIcon /> <Switch checked={threeDToggle} onCheckedChange={setThreeDToggle} className="data-[state=checked]:bg-primary-100"/>
           
          </div>
        )}
      </div>

      <div className="bg-transparent-white-100 rounded-full py-[1.3rem] px-[0.7rem] self-center flex flex-col gap-[1rem] duration-300">
        <AnimatePresence>
          {threeDToggle && editToggle ? (
            <>
              <Button
                size="icon"
                className="rounded-full [&_svg]:size-7 bg-transparent-white-100 hover:bg-[#fdfdfd]"
                onClick={() => setEditToggle(false)}
              >
                <X className=" text-primary-100 scale-75"/>
              </Button>
              <Button
                size="icon"
                className="rounded-full [&_svg]:size-7 bg-[#ffffff] hover:bg-[#fdfdfd]"
              >
                <Reset />
              </Button>
              <Button
                size="icon"
                className="rounded-full [&_svg]:size-6 bg-[#ffffff] hover:bg-[#fdfdfd]"
              >
                <Zoom />
              </Button>
            </>
          ) : (
            <Button
              size="icon"
              className="rounded-full [&_svg]:size-9 bg-[#ffffff] hover:bg-[#fdfdfd]"
              onClick={() => {
                setEditToggle(true);
                setThreeDToggle(true);
              }}
            >
              <Edit />
            </Button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ApparelEditBar;
