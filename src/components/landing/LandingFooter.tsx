import { NextPage } from "next";

import Facebook from "../../../public/images/facebook.svg";
import GlimereLogo from "../../../public/images/Glimere-Logo.svg";
import Instagram from "../../../public/images/instagram.svg";
import Linkedin from "../../../public/images/linkedin.svg";
import Twitter from "../../../public/images/twitter.svg";

const LandingFooter: NextPage = () => {
  return (
    <>
      <div className="flex w-full justify-center">
        <div className="flex w-full max-w-[1440px] flex-col items-center justify-between gap-[20px] px-[25px] py-[10px] *:bg-light sm:flex-row sm:px-[5.75rem] sm:py-[50px]">
          <div className="h-[30px] w-[30px]">
            <GlimereLogo className="text-primary-100" />
          </div>
          <div className="flex h-[40px] flex-row items-center justify-between gap-[20px]">
            <a
              href="https://web.facebook.com/Glimere"
              className="h-[30px] w-[30px]"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook className="text-dark" />
            </a>
            <a
              href="https://twitter.com/glimereofficial"
              className="h-[30px] w-[30px]"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter className="text-dark" />
            </a>
            <a
              href="https://www.instagram.com/glimereofficial/"
              className="h-[30px] w-[30px]"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className="text-dark" />
            </a>
            <a
              href="https://www.linkedin.com/company/glimere/"
              className="h-[30px] w-[30px]"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="text-dark" />
            </a>
          </div>
          <span className="">© 2023 Glimere</span>
        </div>
      </div>
    </>
  );
};

export default LandingFooter;
