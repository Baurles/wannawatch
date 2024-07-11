import { FilmListFrame } from "@/shared/flimList";

import { Films } from "@/widgets/films";

export const MainPage = () => {
  return (
    <main className="pt-14 pl-2 pr-2  pb-2 w-full h-full">
      <FilmListFrame>
        <Films />
      </FilmListFrame>
    </main>
  );
};
