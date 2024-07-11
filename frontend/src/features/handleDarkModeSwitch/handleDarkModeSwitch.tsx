"use client";
import { DarkModeSwitchUI } from "@/shared/darkModeSwitchUI";
import MainStore from "@/store/store";

export const handleDarkModeSwitch = () => {
  document.documentElement.classList.add("dark");
  Store.dark ? Store.setDark(false) : Store.setDark(true);
};

const Store = MainStore;

export const DarkModeSwitch = () => {
  return (
    <DarkModeSwitchUI isClicked={() => handleDarkModeSwitch()} size={30} />
  );
};
