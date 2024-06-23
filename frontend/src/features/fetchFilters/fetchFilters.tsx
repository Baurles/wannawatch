"use cleint";
import MainStore from "@/store/store";

const Store = MainStore;

export const handleFetchCountries = async () => {
  try {
    let res = await fetch(
      "http://127.0.1.0:8000/api/films/filters/country"
    ).then((response) => {
      return response.json();
    });
    Store.setCountriesArray(res);
  } catch (e) {
    console.log(e);
  }
};

export const handleFetchCategories = async () => {
  try {
    let res = await fetch(
      "http://127.0.1.0:8000/api/films/filters/category"
    ).then((response) => {
      return response.json();
    });
    Store.setCategoriesArray(res);
  } catch (e) {
    console.log(e);
  }
};

export const handleFetchYears = async () => {
  try {
    let res = await fetch("http://127.0.1.0:8000/api/films/filters/years").then(
      (response) => {
        return response.json();
      }
    );
    Store.setYearsArray(res);
  } catch (e) {
    console.log(e);
  }
};
