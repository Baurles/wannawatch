import { CinemaFrame } from "@/shared/cinemaFrame";
import { FilmNameFrame } from "@/shared/filmNameFrame";
import { LinksFrame } from "@/shared/linksFrame";
import { Player } from "@/shared/player";

export const Cinema = ({ children }: { children: React.ReactNode }) => {
  return (
    <CinemaFrame>
      <div className="w-3/4 h-full">
        <Player />
        {children}
      </div>
      <FilmNameFrame>
        <LinksFrame />
      </FilmNameFrame>
    </CinemaFrame>
  );
};
