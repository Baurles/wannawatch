"use cleint";

import MainStore from "@/store/store";

const Store = MainStore;

export const handleFecthFilms = async (to: number) => {
  try {
    let res = await fetch(`http://127.0.1.0:8000/api/films/list/${to}`).then(
      (response) => {
        return response.json();
      }
    );
    Store.setFilmsArray(res);
  } catch (e) {
    console.log(e);
  }
};
