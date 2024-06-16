"use client";
import { motion } from "framer-motion";

export const FilmCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="cursor-pointer w-1/6 pb-2 pl-1  h-1/2  ">
      <motion.div
        whileHover={{ scaleY: 1.02 }}
        style={{ width: "99%", height: "100%", position: "relative" }}
        className="cursor-pointer w-full h-full border-2 rounded-lg border-black"
      >
        {children}
      </motion.div>
    </div>
  );
};
