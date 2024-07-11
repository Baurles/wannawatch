"use client";

import { observer } from "mobx-react";
import { IoMdArrowDropdown } from "react-icons/io";

export const DropDown = observer(
  ({
    placeholder,
    arrowId,
    buttonId,
  }: {
    placeholder: string;
    arrowId: string;
    buttonId: string;
  }) => {
    return (
      <div className="h-fit w-36">
        <div
          id={buttonId}
          className="p-2 cursor-pointer h-8 dark:text-white dark:bg-black dark:border-white border-2  border-black text-black flex  justify-center items-center bg-white rounded-lg"
        >
          <IoMdArrowDropdown id={arrowId} />
          {placeholder}
        </div>
      </div>
    );
  }
);
