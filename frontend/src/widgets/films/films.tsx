"use client";
import { Cinema } from "@/entities/cinema";
import { Film } from "@/entities/film";
import { handleFecthFilms } from "@/features/fetchFilms";

import { Recomendations } from "@/shared/recomendations/recomendations";

import MainStore from "@/store/store";
import { observer } from "mobx-react";
import { useEffect } from "react";

const Store = MainStore;

export const Films = observer(() => {
  useEffect(() => {
    handleFecthFilms();
  }, []);

  if (!Store.chooseFilm && Store.filmsArray !== null) {
    return (
      <div className="flex overflow-y-auto justify-start flex-wrap text-black  pt-2 pl-2 pr-2 scrollbar-hide mt-2 mb-2 w-full h-full border-black border-2 rounded-lg">
        {Store.filmsArray.map((e, index) => (
          <div className="w-1/6 h-1/2" key={e.id}>
            <Film
              isClicked={() => Store.setCurrentFilmId(e.id)}
              image={`${Store.filmsArray[index].ImgURL}`}
              filmName={`${Store.filmsArray[index].name}`}
            />
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <Cinema>
        <Recomendations>
          {Store.filmsArray.map((e, index) => (
            <div className="w-32 h-full" key={e.id}>
              <Film
                isClicked={() => Store.setCurrentFilmId(e.id)}
                image={`${Store.filmsArray[index].ImgURL}`}
                filmName={`${Store.filmsArray[index].name}`}
              />
            </div>
          ))}
        </Recomendations>
      </Cinema>
    );
  }
});
