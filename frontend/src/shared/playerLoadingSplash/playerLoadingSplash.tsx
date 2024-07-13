"use client";
import { animate, motion } from "framer-motion";
import { PlayerLoadingSplashSequence } from "../animations/animationSequences/playerSplashSequence";
import { useEffect } from "react";
import MainStore from "@/store/store";

const Store = MainStore;

export const PlayerLoadingSplash = () => {
  useEffect(() => {
    let sequence = PlayerLoadingSplashSequence("playerSplash");
    animate(sequence, { repeat: Infinity, repeatType: "loop" });
  }, []);
  return (
    <motion.div
      id="playerSplash"
      className="w-full dark:bg-white h-3/4 rounded-xl bg-black"
    ></motion.div>
  );
};
