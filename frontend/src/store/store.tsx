"use client"

import { makeAutoObservable } from "mobx"


class Store {

    searchSwitch = true
    modalCategory = false
    modalCountries = false
    modalYears = false

    constructor(){
        makeAutoObservable(this)
    }

    setSearchSwitch(value:boolean){
        this.searchSwitch = value
    }
    setModalCategory(value:boolean){
        this.modalCategory = value
    }
    setModalCountries(value:boolean){
        this.modalCountries = value
    }
    setModalYears(value:boolean){
        this.modalYears = value
    }
}

const MainStore = new Store()
export default MainStore