"use client";
import MainStore from "@/store/store";
import { observer } from "mobx-react";

const Store = MainStore;

export const FilmNameFrame = observer(
  ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="w-1/4 dark:text-white h-full items-center flex flex-col text-black">
        <div className=" w-full flex flex-col items-center pb-2 border-b-2 dark:border-white dark:text-white border-black text-black">
          <h1 className=" text-3xl font-bold">{Store.currentFilm.name}</h1>
          <div>
            <p>
              {Store.currentFilm.year} ({Store.currentFilm.country})
            </p>
          </div>
        </div>
        {children}
      </div>
    );
  }
);
