import { AnimationSequence } from "framer-motion";

export const PlayerLoadingSplashSequence = (id: string) => {
  const sequence: AnimationSequence = [
    [
      `#${id}`,
      { scale: 1.004, background: "#555555" },
      { duration: 2, ease: "easeIn", type: "tween" },
    ],
    [
      `#${id}`,
      { scale: 1, background: "#333333" },
      { duration: 2, ease: "easeOut", type: "tween" },
    ],
  ];
  return sequence;
};
