"use client";
import { Film } from "@/entities/film";
import { handleFecthFilms } from "@/features/fetchFilms";
import { handleChooseFilm } from "@/features/handleChooseFilm/handleChooseFilm";
import { handleScrollFilms } from "@/features/handleScrollFilms/handleScrollFilms";
import { Recomendations } from "@/shared/recomendations/recomendations";
import MainStore from "@/store/store";
import { observer } from "mobx-react";
import { lazy, Suspense, useEffect, useLayoutEffect } from "react";
import SuspensePage from "@/shared/suspencePage";

const Store = MainStore;

const LazyCinema = lazy(() => import("../../entities/cinema/index"));

export const Films = observer(() => {
  useEffect(() => {
    if ((document.getElementById("viewH") as HTMLElement) != null) {
      (document.getElementById("viewH") as HTMLElement).addEventListener(
        "scroll",
        handleScrollFilms
      );
    }

    return () => {
      if ((document.getElementById("viewH") as HTMLElement) != null) {
        (document.getElementById("viewH") as HTMLElement).removeEventListener(
          "scroll",
          handleScrollFilms
        );
      }
    };
  }, [Store.chooseFilm]);

  useLayoutEffect(() => {
    handleFecthFilms(0, 20);
  }, []);

  if (!Store.chooseFilm && Store.filmsArray !== null) {
    return (
      <div
        id="viewH"
        className="flex overflow-y-auto justify-center flex-wrap text-black  pt-2  scrollbar-hide mt-2 mb-2 w-full h-full border-black border-2 rounded-lg"
      >
        {Store.filmsArray.map((e, index) => (
          <div className="w-1/8 h-1/2" key={index}>
            <Film
              onClick={() => handleChooseFilm(e.id)}
              image={`${Store.filmsArray[index].ImgURL}`}
              filmName={`${Store.filmsArray[index].name}`}
            />
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <Suspense fallback={<SuspensePage />}>
        <LazyCinema>
          <Recomendations>
            {Store.filmsArray.map((e, index) => {
              if (index < 15) {
                return (
                  <div className="w-1/5 h-full" key={index}>
                    <Film
                      onClick={() => handleChooseFilm(e.id)}
                      image={`${Store.filmsArray[index].ImgURL}`}
                      filmName={`${Store.filmsArray[index].name}`}
                    />
                  </div>
                );
              }
            })}
          </Recomendations>
        </LazyCinema>
      </Suspense>
    );
  }
});
