"use client";
import MainStore from "@/store/store";
import { AnimationSequence } from "framer-motion";

const Store = MainStore;

export const ModalSequence = (
  id: string,
  arrowId: string,
  deg: number,
  display: string,
  buttonId: string,
  bgcolor: string,
  col: string
) => {
  const sequence: AnimationSequence = [
    [`#${arrowId}`, { rotate: deg }, { duration: 0.3 }],
    [`#${id}`, { display: `${display}` }, { at: "<" }],
    [
      `#${buttonId}`,
      { background: `${bgcolor}`, color: `${col}` },
      { at: "<" },
    ],
  ];
  return sequence;
};
