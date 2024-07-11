"use client";
import { motion } from "framer-motion";
import { MouseEventHandler } from "react";
export const DropDownModalButtonUI = ({
  children,
  isClicked,
}: {
  children: React.ReactNode;
  isClicked: MouseEventHandler;
}) => {
  return (
    <motion.div
      onClick={isClicked}
      whileHover={{ background: "	#111111", color: "white" }}
      className="w-full h-1/4 rounded-lg text-black cursor-pointer border-2 border-black  flex justify-center items-center"
    >
      {children}
    </motion.div>
  );
};
