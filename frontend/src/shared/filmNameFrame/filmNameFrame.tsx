"use client";
import MainStore from "@/store/store";

const Store = MainStore;

export const FilmNameFrame = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-1/4 h-full items-center flex flex-col text-black">
      <div className=" w-full flex flex-col items-center pb-2 border-b-2  border-black text-black">
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
};
