"use client";
import MainStore from "@/store/store";

const Store = MainStore;

export const handleChooseFilm = (id: number) => {
  Store.setChooseFilm(true);
  Store.setCurrentFilmId(id);
  Store.setCurrentFilm();
};
