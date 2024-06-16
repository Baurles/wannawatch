"use client";

import { makeAutoObservable } from "mobx";

class Store {
  searchSwitch = false;
  modalCategory = false;
  modalCountries = false;
  modalYears = false;
  modalButtonClicked = false;
  chooseFilm = true
  searchData = ""

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
  setChooseFilm(value:boolean){
    this.chooseFilm = value
    console.log("kek")
  }
  setSearchData(value:string){
    this.searchData = value
    console.log(this.searchData)
  }
}

const MainStore = new Store();
export default MainStore;
