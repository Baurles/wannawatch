"use client";
import MainStore from "@/store/store";

const Store = MainStore;

export const handleChooseFilm = () => {
  Store.setChooseFilm(true);
  Store.setCurrentFilm();
};
