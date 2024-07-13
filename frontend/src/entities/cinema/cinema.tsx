import { CinemaFrame } from "@/shared/cinemaFrame";
import { FilmNameFrame } from "@/shared/filmNameFrame";
import { LinksFrame } from "@/shared/linksFrame";
import { Player } from "@/shared/player";
import { PlayerLoadingSplash } from "@/shared/playerLoadingSplash";
import MainStore from "@/store/store";

const Store = MainStore;

export const Cinema = ({ children }: { children: React.ReactNode }) => {
  return (
    <CinemaFrame>
      <div className="w-full h-full">
        {Store.isFilmPlayerLoading ? <PlayerLoadingSplash /> : <Player />}
        {children}
      </div>
      <FilmNameFrame>
        <LinksFrame />
      </FilmNameFrame>
    </CinemaFrame>
  );
};
