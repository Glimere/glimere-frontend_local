import { NextPage } from "next";
import Facebook from "../../../public/images/facebook.svg";
import Instagram from "../../../public/images/instagram.svg";
import Linkedin from "../../../public/images/linkedin.svg";
import Twitter from "../../../public/images/twitter.svg";
import GlimereLogo from "../../../public/images/glimerenew.svg";


const LandingFooter: NextPage = () => {
  return (
    <>
      <div className="bg-light flex flex-col sm:flex-row gap-[20px] justify-between items-center px-[25px] sm:px-[5.75rem] py-[10px] sm:py-[50px]">
        <div className="h-[30px] w-[30px]">
          <GlimereLogo className="text-primary-100" />
        </div>
        <div className="h-[40px] flex flex-row gap-[20px] justify-between items-center">
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
    </>
  );
};

export default LandingFooter;
