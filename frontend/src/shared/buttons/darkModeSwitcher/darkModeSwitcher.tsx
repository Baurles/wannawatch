"use client";
import MainStore from "@/store/store";
import { observer } from "mobx-react";
import { MdOutlineDarkMode } from "react-icons/md";
import { HTMLMotionProps, motion } from "framer-motion";

const Store = MainStore;

interface DarkModeSwitcherProps extends HTMLMotionProps<"button"> {
  size: number;
}

export const DarkModeSwitcher = observer((props: DarkModeSwitcherProps) => {
  const { size, ...restProps } = props;
  return (
    <motion.button {...restProps} whileHover={{ scale: 1.05 }}>
      <MdOutlineDarkMode
        className="cursor-pointer"
        color={Store.dark ? "white" : "black"}
        size={size}
      />
    </motion.button>
  );
});
