"use client";
import { motion } from "framer-motion";
import { observer } from "mobx-react";
import { FilmCardProps } from "../types/types";

export const FilmCard = observer((props: FilmCardProps) => {
  const { children, ...restProps } = props;
  return (
    <div className="cursor-pointer  w-full pb-2 pl-1  h-full  ">
      <motion.div
        {...restProps}
        whileHover={{
          scaleY: 1.02,
          scaleX: 1.02,
          boxShadow: "0px 10px 2 rgba(0, 0, 0, 0.8)",
        }}
        style={{ width: "99%", height: "100%", position: "relative" }}
        className="pb-2 pl-1 cursor-pointer w-full h-full border-2 rounded-l border-black"
      >
        {children}
      </motion.div>
    </div>
  );
});
