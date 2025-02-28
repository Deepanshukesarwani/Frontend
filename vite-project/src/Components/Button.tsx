// import { div } from "framer-motion/client";

// const ButtonStyle =()=>{

//     return(
//          <div className="relative bg-red-300 w-[125px] h-[26px]">
//             <div className=" absolute clip-custom-upperShape top-0 right-0 bg-black"></div>
//             <div className=" absolute clip-custom-lowerShape bottom-0 right-0 bg-black"></div>
//          </div>
//     );
// }
// export default ButtonStyle;

const ButtonStyle = () => {
    return (
      <button className="relative w-[126px] h-[100%] px-4 py-1 text-white font-bold uppercase tracking-wide border-2 border-purple-500 text-sm bg-transparent hover:bg-purple-600 transition-all duration-300 clip-custom">
        Create Team
      </button>
    );
  };
  
  export default ButtonStyle;