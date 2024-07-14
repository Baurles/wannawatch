"use client";
import { DarkModeSwitcher } from "@/shared/buttons/darkModeSwitcher";
import MainStore from "@/store/store";

export const handleDarkModeSwitch = () => {
  Store.dark
    ? document.documentElement.classList.remove("dark")
    : document.documentElement.classList.add("dark");
  Store.dark ? Store.setDark(false) : Store.setDark(true);
};

const Store = MainStore;

export const DarkModeSwitch = () => {
  return <DarkModeSwitcher onClick={() => handleDarkModeSwitch()} size={30} />;
};
