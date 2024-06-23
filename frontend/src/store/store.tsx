"use client";

import { FilmProps, FilterProps } from "@/shared/types/types";
import { makeAutoObservable } from "mobx";

class Store {
  searchSwitch = false;
  modalCategory = false;
  modalCountries = false;
  modalYears = false;
  modalButtonClicked = false;
  chooseFilm = false;
  searchData = "";
  currentFilmId = 0;
  currentFilm = {} as FilmProps;

  currentCountry = {} as FilmProps;

  currentCategory = {} as FilmProps;

  currentYear = {} as FilmProps;

  years = [] as FilterProps[];
  categories = [] as FilterProps[];

  countries = [] as FilterProps[];

  filmsArray = [] as FilmProps[];

  filmsScrollPositionStart = 0;
  filmsScrollPositionEnd = 20;
  constructor() {
    makeAutoObservable(this);
  }

  setSearchSwitch(value: boolean) {
    this.searchSwitch = value;
  }
  setModalCategory(value: boolean) {
    this.modalCategory = value;
  }
  setModalCountries(value: boolean) {
    this.modalCountries = value;
  }
  setModalYears(value: boolean) {
    this.modalYears = value;
  }
  setModalButtonClicked(value: boolean) {
    this.modalButtonClicked = value;
  }
  setChooseFilm(value: boolean) {
    this.chooseFilm = value;
  }
  setSearchData(value: string) {
    this.searchData = value;
    console.log(this.searchData);
  }
  setFilmsArray(value: FilmProps[]) {
    this.filmsArray = this.filmsArray.concat(value);
  }
  setCurrentFilmId(id: number) {
    this.currentFilmId = id;
  }
  setCurrentFilm() {
    this.currentFilm = this.filmsArray[this.currentFilmId - 1];
  }
  setCountriesArray(value: FilterProps[]) {
    this.countries = value;
  }
  setCategoriesArray(value: FilterProps[]) {
    this.categories = value;
  }
  setYearsArray(value: FilterProps[]) {
    this.years = value;
  }
  setFilmsScrollPosition(value: number) {
    this.filmsScrollPositionStart = this.filmsScrollPositionStart + value;
    this.filmsScrollPositionEnd = this.filmsScrollPositionEnd + value;
  }
}

const MainStore = new Store();
export default MainStore;
