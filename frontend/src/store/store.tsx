"use client";

import { makeAutoObservable } from "mobx";

class Store {
  searchSwitch = false;
  modalCategory = false;
  modalCountries = false;
  modalYears = false;
  modalButtonClicked = false;

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
}

const MainStore = new Store();
export default MainStore;
