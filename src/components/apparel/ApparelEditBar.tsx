import { NextPage } from "next";
import ThreeDIcon from "../../../public/images/3D-icon.svg";
import Edit from "../../../public/images/edit.svg";
import Reset from "../../../public/images/reset-edit.svg";
import Zoom from "../../../public/images/zoom.svg";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";


interface Props {
  threeDToggle: boolean;
  setThreeDToggle: any;
  editToggle: boolean;
  setEditToggle: any;
}

const ApparelEditBar: NextPage<Props> = ({
  threeDToggle,
  setThreeDToggle,
  editToggle,
  setEditToggle,
}) => {
  return (
    <div className="absolute right-[33%] h-full flex flex-col gap-[3rem] z-[3] pt-[120px]">
      <div className="max-h-[200px]">
        {editToggle ? (
          <></>
        ) : (
          <div className="flex flex-row gap-[10px] items-center">
            <Switch checked={threeDToggle} onCheckedChange={setThreeDToggle} className="data-[state=checked]:bg-primary-100"/>
            <ThreeDIcon />
          </div>
        )}
      </div>

      <div className="bg-transparent-100 rounded-full py-[1.3rem] px-[0.7rem] self-center flex flex-col gap-[1rem] duration-300">
        <AnimatePresence>
          {threeDToggle && editToggle ? (
            <>
              <Button
                size="icon"
                className="rounded-full [&_svg]:size-7 bg-transparent-100 hover:bg-[#fdfdfd]"
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
