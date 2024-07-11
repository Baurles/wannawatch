"use client";

import MainStore from "@/store/store";

const Store = MainStore;

export const handleScrollFilms = () => {
  if (document.getElementById("viewH") != null) {
    const getHeight = Number(
      getComputedStyle(
        document.getElementById("viewH") as HTMLElement
      ).height.slice(0, -2)
    );
    if (
      (document.getElementById("viewH") as HTMLElement).scrollTop >
      getHeight / 50
    ) {
      Store.setFilmsScrollPosition(20);
    }
  }
};
