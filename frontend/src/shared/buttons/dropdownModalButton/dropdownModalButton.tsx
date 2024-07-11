"use client";
import { motion } from "framer-motion";

export const DropDownModalButtonUI = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      whileHover={{ background: "	#111111", color: "white" }}
      className="w-full h-1/4 rounded-lg text-black cursor-pointer border-2 border-black  flex justify-center items-center"
    >
      {children}
    </motion.div>
  );
};
