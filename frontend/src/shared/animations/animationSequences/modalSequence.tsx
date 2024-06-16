"use client";
import MainStore from "@/store/store";
import { AnimationSequence } from "framer-motion";

const Store = MainStore;

export const ModalSequence = (
  id: string,
  arrowId: string,
  deg: number,
  display: string
) => {
  const sequence: AnimationSequence = [
    [`#${arrowId}`, { rotate: deg }, { duration: 0.3 }],
    [`#${id}`, { display: `${display}` }, { at: "<" }],
  ];
  return sequence;
};
