"use client";
import MainStore from "@/store/store";
import { observer } from "mobx-react";
import { MouseEventHandler } from "react";
import { MdOutlineDarkMode } from "react-icons/md";

const Store = MainStore;
export const DarkModeSwitchUI = observer(
  ({ size, isClicked }: { size: number; isClicked: MouseEventHandler }) => {
    return (
      <MdOutlineDarkMode
        onClick={isClicked}
        color={Store.dark ? "white" : "black"}
        size={size}
      />
    );
  }
);
