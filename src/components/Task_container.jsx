"use client";
import { useState } from "react";

export const Task_container = ({
  check_name,
  delelteClick,
  isChecked,
  onCheckboxChange,
}) => {
  // const [isChecked, setIsChecked] = useState(false);

  // const handleOnChange = () => {
  //   setIsChecked(!isChecked);
  // };

  return (
    <div
      className={
        "w-[345px] h-[62px] flex flex-row justify-between p-[16px] rounded-md bg-[#F9FAFB]"
      }>
      <div className="flex gap-2">
        <input
          type="checkbox"
          checked={isChecked}
          // onChange={handleOnChange}
          onChange={onCheckboxChange}
          className=" accent-gray-400 scale-150 text-black flex"
        />
        <p className={`text-black ${isChecked ? "line-through" : null}`}>
          {check_name}
        </p>
      </div>

      <button
        onClick={delelteClick}
        className={` h-[32px] bg-red-300 text-red-400 hover:text-red-600 rounded-[6px] border-solid px-[12px] py-[4px] flex items-center justify-center `}>
        {"Delete"}
      </button>
    </div>
  );
};
