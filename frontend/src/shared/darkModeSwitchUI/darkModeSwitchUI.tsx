"use client";
import MainStore from "@/store/store";
import { observer } from "mobx-react";
import { MouseEventHandler } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { motion } from "framer-motion";

const Store = MainStore;
export const DarkModeSwitchUI = observer(
  ({ size, isClicked }: { size: number; isClicked: MouseEventHandler }) => {
    return (
      <motion.button whileHover={{ scale: 1.05 }}>
        <MdOutlineDarkMode
          className="cursor-pointer"
          onClick={isClicked}
          color={Store.dark ? "white" : "black"}
          size={size}
        />
      </motion.button>
    );
  }
);
