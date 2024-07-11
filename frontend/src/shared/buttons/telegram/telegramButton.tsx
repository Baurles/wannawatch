"use client";
import { FaTelegram } from "react-icons/fa";
import { motion } from "framer-motion";
import { observer } from "mobx-react";
import MainStore from "@/store/store";

const Store = MainStore;

export const Telegram = observer(({ size }: { size: number }) => {
  return (
    <motion.button whileHover={{ scale: 1.05 }}>
      <a href="https://t.me/baurlesprod">
        <FaTelegram
          className="cursor-pointer"
          color={Store.dark ? "white" : "black"}
          size={size}
        />
      </a>
    </motion.button>
  );
});
