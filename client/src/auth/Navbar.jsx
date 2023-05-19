// import {ReactComponent as Glimere} from '../assets/images/glimere.svg'
// import {ReactComponent as GlimereLogo} from '../assets/images/glimereLogo.svg'


const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <>
    <div className="w-full h-[60px] px-[40px] py-[10px] flex flex-row absolute z-10">
      <div className="flex-[4]">
        {/* <Glimere/>
        <GlimereLogo/> */}

        <div className="h-full w-[60%]"></div>
      </div>
      <div className="flex-[6]"></div>
    </div>
    
    </>
  )
}