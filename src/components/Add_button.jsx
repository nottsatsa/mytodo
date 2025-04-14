"use client";
import { useState } from "react";

export const Add_button = ({}) => {
  let [added_task, setAdded_task] = useState(0);

  function handleClick() {
    setAdded_task(!added_task);
  }

  return (
    <div>
      <button
        onClick={handleClick}
        className={
          "h-[32px] bg-slate-500 rounded-[6px] border-solid px-[12px] py-[4px] flex items-center justify-center "
        }>
        {`Adddd ${added_task}`}
      </button>
    </div>
  );
};

// --------------------------------------------------------------
