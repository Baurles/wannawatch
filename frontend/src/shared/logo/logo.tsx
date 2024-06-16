"use client"

import MainStore from "@/store/store"

const Store = MainStore

export const Logo =() => {
    return(
        <>
            <h1 onClick={()=>Store.setChooseFilm(false)} className="cursor-pointer text-black text-2xl font-bold">WannaWatch</h1>
        </>
    )
}