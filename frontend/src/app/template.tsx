"use client";

import { useEffect } from "react";
import { animatePageIn } from "@/features/pageLoading";
import { motion } from "framer-motion";
export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        id="banner-text"
        className="banner-text w-screen font-bold text-9xl justify-center items-center flex text-white h-screen fixed color-black z-30"
      >
        <h1>WANNA WATCH</h1>
      </motion.div>
      <div
        id="banner-1"
        className="banner min-h-screen bg-black z-20 fixed top-0 left-0 w-1/4"
      ></div>

      <div
        id="banner-2"
        className="banner min-h-screen bg-black z-20 fixed top-0 left-1/4 w-1/4"
      ></div>

      <div
        id="banner-3"
        className="banner min-h-screen bg-black z-20 fixed top-0 left-2/4 w-1/4"
      ></div>

      <div
        id="banner-4"
        className="banner min-h-screen bg-black z-20 fixed top-0 left-3/4 w-1/4"
      ></div>
      {children}
    </>
  );
}
