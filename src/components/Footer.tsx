import Link from 'next/link';
import GlimereLogo from '../../public/images/Glimere-Logo.svg';
import Facebook from '../../public/images/facebook.svg';
import Instagram from '../../public/images/instagram.svg';
import Linkedin from '../../public/images/linkedin.svg';
import Twitter from '../../public/images/twitter.svg';

export default function Footer() {
  return (
    <footer className="w-full bg-light">
      <div className="px-5 py-10 flex flex-col sm:px-10 lg:grid grid-cols-3 sm:gap-[60px] lg:gap-y-32">
        <div className="lg:col-span-1">
          <GlimereLogo className="w-[50px] h-[50px] hidden sm:block text-dark" />
        </div>
        <div className="grid grid-cols-2 gap-9 md:grid-cols-4 lg:col-span-2 lg:mb-0">
          {/* Feature Links */}
          <div>
            <h6 className="mb-5 font-medium text-lg text-dark">Shop Custom</h6>
            <div className="flex flex-col gap-4 text-[#a0775a] hover:text-[#e7ab80] text-sm">
              <Link href="#">How it Works</Link>
              <Link href="#">Partner Offers</Link>
              <Link href="#">Store Examples</Link>
            </div>
          </div>
          {/* Company Links */}
          <div>
            <h6 className="mb-5 font-medium text-lg text-dark">Company</h6>
            <div className="flex flex-col gap-4 text-[#a0775a] hover:text-[#e7ab80] text-sm duration-150">
              <Link href="#">Leaders</Link>
              <Link href="#">About Us</Link>
              <Link href="#">Careers</Link>
              <Link href="#">News</Link>
            </div>
          </div>
          {/* Resources Links */}
          <div>
            <h6 className="mb-5 font-medium text-lg text-dark">Resources</h6>
            <div className="flex flex-col gap-4 text-[#a0775a] hover:text-[#e7ab80] text-sm duration-150">
              <Link href="#">Overview</Link>
              <Link href="#">Blog</Link>
              <Link href="#">Webinars</Link>
              <Link href="#">Events</Link>
              <Link href="#">Design & Production</Link>
            </div>
          </div>
          {/* Get Help Links */}
          <div>
            <h6 className="mb-5 font-medium text-lg text-dark">Get Help</h6>
            <div className="flex flex-col gap-4 text-[#a0775a] hover:text-[#e7ab80] text-sm duration-150">
              <Link href="#">FAQs</Link> 
              <Link href="#">Contact</Link>
              <Link href="#">Tech Support</Link>
              <Link href="#">API Documentation</Link>
            </div>
          </div>
        </div>
        <div className="text-center lg:col-span-3 md:flex justify-between items-center">
          {/* Social Media Icons */}
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
          {/* Footer Text */}
          <p className="text-dark font-medium order-1">
            © 2023 Glimere
          </p>
        </div>
      </div>
    </footer>
  );
}