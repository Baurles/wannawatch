"use client";
import MainStore from "@/store/store";
import { motion } from "framer-motion";
import { observer } from "mobx-react";

export const FilmCard = observer(({ children }: { children: React.ReactNode }) => {
  const Store = MainStore
  return (
    <div className="cursor-pointer w-1/6 pb-2 pl-1  h-1/2  ">
      <motion.div
        onClick={()=>Store.setChooseFilm(true)}
        whileHover={{ scaleY: 1.02 }}
        style={{ width: "99%", height: "100%", position: "relative" }}
        className="cursor-pointer w-full h-full border-2 rounded-lg border-black"
      >
        {children}
      </motion.div>
    </div>
  );
})
