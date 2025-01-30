interface BubbleProps {
  classes: string;
  img: string;
}

const Bubble = (props: BubbleProps) => {
  return (
    <div className={`absolute rounded-full duration-500 bg-cover bg-center bg-no-repeat border-solid border-[7px] border-[#272727] ${props.classes}`}
         style={{ backgroundImage: `url(${props.img})` }}
    >
    </div>
  );
};
export default Bubble;