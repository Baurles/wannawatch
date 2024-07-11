"use client";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import MainStore from "@/store/store";
import { observer } from "mobx-react";

const Store = MainStore;

export const Git = observer(({ size }: { size: number }) => {
  return (
    <motion.button whileHover={{ scale: 1.05 }}>
      <a href="https://github.com/Baurles">
        <FaGithub
          className="cursor-pointer"
          color={Store.dark ? "white" : "black"}
          size={size}
        />
      </a>
    </motion.button>
  );
});
