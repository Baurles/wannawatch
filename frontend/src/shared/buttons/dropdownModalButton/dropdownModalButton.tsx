"use client";
import MainStore from "@/store/store";
import { motion } from "framer-motion";
import { observer } from "mobx-react";
import { MouseEventHandler } from "react";

const Store = MainStore;

export const DropDownModalButtonUI = observer(
  ({
    children,
    isClicked,
  }: {
    children: React.ReactNode;
    isClicked: MouseEventHandler;
  }) => {
    return (
      <motion.div
        onClick={isClicked}
        whileHover={{
          background: Store.dark ? "white" : "black",
          color: Store.dark ? "black" : "white",
          scale: 1.05,
        }}
        className="w-full h-1/4 rounded-lg  dark:text-white dark:border-white text-black cursor-pointer border-2 border-black  flex justify-center items-center"
      >
        {children}
      </motion.div>
    );
  }
);
