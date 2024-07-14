"use client";
import { FaGithub, FaTelegram } from "react-icons/fa";
import { HTMLMotionProps, motion } from "framer-motion";
import MainStore from "@/store/store";
import { observer } from "mobx-react";

const Store = MainStore;

interface LinkButtonProps extends HTMLMotionProps<"button"> {
  size: number;
  variant: "Git" | "Telegram";
}

export const LinkButton = observer((props: LinkButtonProps) => {
  const { size, variant, ...restProps } = props;
  const links = {
    Git: "https://github.com/Baurles",
    Telegram: "https://t.me/baurlesprod",
  };
  if (variant == "Git") {
    return (
      <motion.button {...restProps} whileHover={{ scale: 1.05 }}>
        <a href={links.Git}>
          <FaGithub
            className="cursor-pointer"
            color={Store.dark ? "white" : "black"}
            size={size}
          />
        </a>
      </motion.button>
    );
  }
  if (variant == "Telegram") {
    return (
      <motion.button whileHover={{ scale: 1.05 }}>
        <a href={links.Telegram}>
          <FaTelegram
            className="cursor-pointer"
            color={Store.dark ? "white" : "black"}
            size={size}
          />
        </a>
      </motion.button>
    );
  }
});
