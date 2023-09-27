import { ReactComponent as GlimereSweet } from '../assets/images/glimere-sweet.svg'
import { ReactComponent as GlimereLogo } from '../assets/images/glimereLogo.svg'
import { Link } from 'react-router-dom'

export default function LandingNav() {
    return (
        <>
            <div className="bg-transparent h-[80px] w-full absolute flex flex-row justify-between items-center px-[40px] sm:px-[80px] z-[1]">
                <div className="">

                    <GlimereLogo style={{ color: "#ed7534" }} height="35" className={`w-[40px] block sm:hidden`} />
                    <GlimereSweet style={{ color: "#ed7534" }} height="35" className={`w-[120px] hidden sm:block`} />

                </div>
                <div className="flex flex-row items-center">
                    <div className='h-full w-[250px] flex flex-row justify-between items-center mr-[80px]'>
                        <Link to="./services">
                            <div className="h-[20px] w-[40px] text-[#9d5c0d] text-[15px]">Home</div>
                        </Link>
                        <Link to="./services">
                            <div className="h-[20px] w-[40px] text-[#9d5c0d] text-[15px]">About</div>
                        </Link>
                        <Link to="./services">
                            <div className="h-[20px] w-[40px] text-[#9d5c0d] text-[15px]">Services</div>
                        </Link>
                        <Link to="./services">
                            <div className="h-[20px] w-[40px] text-[#9d5c0d] text-[15px]">Contact</div>
                        </Link>

                    </div>
                    <div className="">
                        <Link to="/login" state="signin">
                        <div className='px-[35px] py-[5px] bg-[#ed7534] duration-150 hover:bg-[#9d5c0d] flex justify-center items-center text-white text-[15px] rounded-full cursor-pointer'
                        // onClick={props.handleButtonClick}
                        >
                            Sign Up
                        </div>
                        </Link>
                        
                    </div>
                </div>

            </div>
        </>
    )
}
