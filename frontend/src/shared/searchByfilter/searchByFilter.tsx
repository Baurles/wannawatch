"use client";
import { motion } from "framer-motion";

export const SearchByFilterUI = ({ placeholder }: { placeholder: string }) => {
  return (
    <button className="">
      <motion.div whileHover={{ scale: 1.05 }} className="h-fit w-36">
        <div className="p-2 cursor-pointer h-8 dark:text-white dark:bg-black dark:border-white border-2  border-black text-black flex  justify-center items-center bg-white rounded-lg">
          {placeholder}
        </div>
      </motion.div>
    </button>
  );
};
