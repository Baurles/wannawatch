"use client";

import MainStore from "@/store/store";
import { HTMLMotionProps, motion } from "framer-motion";
import { observer } from "mobx-react";
import { MouseEventHandler } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

interface SquareButtonProps extends HTMLMotionProps<"button"> {
  placeholder?: string;
  arrowId?: string;
  buttonId?: string;
  variant: "main" | "inner";
  isClicked?: MouseEventHandler;
  buttonName?: string;
}

const Store = MainStore;

export const SquareButton = observer((props: SquareButtonProps) => {
  const { placeholder, arrowId, buttonId, variant, buttonName, ...restProps } =
    props;

  if (variant == "main") {
    return (
      <motion.button
        {...restProps}
        whileHover={{ scale: 1.05 }}
        className="h-fit w-36"
      >
        <div
          id={buttonId}
          className="p-2 cursor-pointer h-8 dark:text-white dark:bg-black dark:border-white border-2  border-black text-black flex  justify-center items-center bg-white rounded-lg"
        >
          <IoMdArrowDropdown id={arrowId} />
          {placeholder}
        </div>
      </motion.button>
    );
  }
  if (variant == "inner") {
    return (
      <motion.button
        {...restProps}
        whileHover={{
          background: Store.dark ? "white" : "black",
          color: Store.dark ? "black" : "white",
          scale: 1.05,
        }}
        className="w-full h-1/4 rounded-lg  dark:text-white dark:border-white text-black cursor-pointer border-2 border-black  flex justify-center items-center"
      >
        <p>{buttonName}</p>
      </motion.button>
    );
  }
});
