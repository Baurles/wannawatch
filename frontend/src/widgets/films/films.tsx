"use client"
import { Film } from "@/entities/film";
import { CinemaFrame } from "@/shared/cinemaFrame";
import { Player } from "@/shared/player";
import MainStore from "@/store/store";
import { observer } from "mobx-react";

const Store = MainStore

export const Films = observer(() => {
  if(!Store.chooseFilm){
     return (
    <div className="flex overflow-y-auto justify-start flex-wrap   pt-2 pl-2 pr-2 scrollbar-hide mt-2 mb-2 w-full h-full border-black border-2 rounded-lg">
      <Film image={"/"} filmName={""} />
      <Film image={"/"} filmName={""} />
      <Film image={"/"} filmName={""} />
      <Film image={"/"} filmName={""} />
      <Film image={"/"} filmName={""} />
      <Film image={"/"} filmName={""} />
      <Film image={"/"} filmName={""} />
      <Film image={"/"} filmName={""} />
      <Film image={"/"} filmName={""} />
      <Film image={"/"} filmName={""} />
      <Film image={"/"} filmName={""} />
      <Film image={"/"} filmName={""} />
      <Film image={"/"} filmName={""} />
      <Film image={"/"} filmName={""} />
      <Film image={"/"} filmName={""} />
      <Film image={"/"} filmName={""} />
      <Film image={"/"} filmName={""} />
      <Film image={"/"} filmName={""} />
    </div>
  )}else{
    return (
    <CinemaFrame>
        <Player/>
    </CinemaFrame>)
  };
});
