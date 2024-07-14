"use client";

import MainStore from "@/store/store";
import { handleFecthFilms } from "../fetchFilms";

const Store = MainStore;

export const handleScrollFilms = () => {
  if (document.getElementById("viewH") != null) {
    const getHeight = Number(
      getComputedStyle(
        document.getElementById("viewH") as HTMLElement
      ).height.slice(0, -2)
    );
    if (
      (document.getElementById("viewH") as HTMLElement).scrollHeight -
        ((document.getElementById("viewH") as HTMLElement).scrollTop +
          getHeight) <
      200
    ) {
      Store.setFilmsScrollPosition(16);
      handleFecthFilms(
        Store.filmsScrollPositionStart,
        Store.filmsScrollPositionEnd
      );
      console.log(Store.filmsArray);
    }
  }
};
