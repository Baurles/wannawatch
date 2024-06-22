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
  currentFilm = {
    id: 0,
    name: "",
    description: "",
    ImgURL: "",
    rate: "",
    country: "",
    year: "",
  };

  currentCountry = {
    id: 0,
    name: "",
  };

  countries = [this.currentCountry];

  filmsArray = [this.currentFilm];

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
    console.log("kek");
  }
  setSearchData(value: string) {
    this.searchData = value;
    console.log(this.searchData);
  }
  setFilmsArray(value: FilmProps[]) {
    this.filmsArray = value;
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
}

const MainStore = new Store();
export default MainStore;
