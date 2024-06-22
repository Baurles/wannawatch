"use client";
import { handleChooseFilm } from "@/features/handleChooseFilm/handleChooseFilm";
import { motion } from "framer-motion";
import { observer } from "mobx-react";

export const FilmCard = observer(
  ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="cursor-pointer  w-full pb-2 pl-1  h-full  ">
        <motion.div
          onClick={() => handleChooseFilm()}
          whileHover={{ scaleY: 1.02 }}
          style={{ width: "99%", height: "100%", position: "relative" }}
          className="cursor-pointer w-full h-full border-2 rounded-lg border-black"
        >
          {children}
        </motion.div>
      </div>
    );
  }
);
