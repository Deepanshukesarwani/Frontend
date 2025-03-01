import React from 'react';

interface ButtonProps {
    name: string;
}

const ButtonStyle: React.FC<ButtonProps> = ({ name }) => {
    return (
      <button className="relative w-[126px] h-[100%] px-4 py-1 text-white text-[12px] uppercase tracking-wide border-2 border-purple-500 font-thin bg-transparent hover:bg-purple-600 transition-all duration-300 button-radius font-vtf-justina">
       {name}
      </button>
    );
  };
  
  export default ButtonStyle;