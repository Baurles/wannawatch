import MainStore from "@/store/store";
import { FilterProps } from "@/shared/types/types";

const Store = MainStore;

export const handleFilterButtons = async (e: FilterProps, type: string) => {
  switch (type) {
    case "category": {
      Store.setChooseCategory(e.name);
      const category = e.name;
      const url = new URL(
        `http://127.0.1.0:8000/api/films/filters/category/${category}`
      ).href;
      console.log(url);
      try {
        // let res = await fetch(
        //   `http://127.0.1.0:8000/api/films/list/${category}`
        // ).then((response) => {
        //   return response.json();
        // });
        // Store.setFilmsArray(res);
      } catch (e) {
        console.log(e);
      }
      break;
    }

    case "country": {
      Store.setChooseCountry(e.name);
      const country = e.name;
      const url = new URL(
        `http://127.0.1.0:8000/api/films/filters/country/${country}`
      ).href;
      console.log(url);
      try {
        let res = await fetch(url).then((response) => {
          return response.json();
        });
        Store.setFilteredArray(res);
      } catch (e) {
        console.log(e);
      }
      break;
    }
    case "years": {
      Store.setChooseYears(e.name);
      const years = e.name;
      const url = new URL(
        `http://127.0.1.0:8000/api/films/filters/years/${years}`
      ).href;
      console.log(url);
      try {
        // let res = await fetch(
        //   `http://127.0.1.0:8000/api/films/list/${category}`
        // ).then((response) => {
        //   return response.json();
        // });
        // Store.setFilmsArray(res);
      } catch (e) {
        console.log(e);
      }
      break;
    }
    default: {
      console.log("tadam");
    }
  }
};
