import { AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { NextPage } from "next";

import ThreeDIcon from "../../../public/images/3D-icon.svg";
import Edit from "../../../public/images/edit.svg";
import Reset from "../../../public/images/reset-edit.svg";
import Zoom from "../../../public/images/zoom.svg";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";

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
    <div className="absolute right-[6%] z-[3] flex h-full flex-col justify-center gap-[3rem] pb-[240px] pt-[65px] sm:right-[36.5%]">
      {editToggle ? (
        <></>
      ) : (
        <div className="mt-[50%] max-h-[200px] sm:mt-[50%]">
          <div className="flex flex-col items-center gap-[10px]">
            <ThreeDIcon />
            <Switch
              checked={threeDToggle}
              onCheckedChange={setThreeDToggle}
              className="data-[state=checked]:bg-primary-100"
            />
          </div>
        </div>
      )}

      <div className="flex flex-col gap-[1rem] self-center rounded-full bg-transparent-white-100 px-[0.7rem] py-[1.3rem] duration-300">
        <AnimatePresence>
          {threeDToggle && editToggle ? (
            <>
              <Button
                size="icon"
                className="rounded-full bg-transparent-white-100 hover:bg-[#fdfdfd] [&_svg]:size-7"
                onClick={() => setEditToggle(false)}
              >
                <X className="scale-75 text-primary-100" />
              </Button>
              <Button
                size="icon"
                className="rounded-full bg-[#ffffff] hover:bg-[#fdfdfd] [&_svg]:size-7"
              >
                <Reset />
              </Button>
              <Button
                size="icon"
                className="rounded-full bg-[#ffffff] hover:bg-[#fdfdfd] [&_svg]:size-6"
              >
                <Zoom />
              </Button>
            </>
          ) : (
            <Button
              size="icon"
              className="rounded-full bg-[#ffffff] hover:bg-[#fdfdfd] [&_svg]:size-9"
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
