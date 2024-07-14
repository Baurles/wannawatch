import { handleChooseFilm } from "@/features/handleChooseFilm/handleChooseFilm";
import { FilmCard } from "@/shared/filmCard";
import { FilmInListProps } from "@/shared/types/types";
import Image from "next/image";

export const Film = (props: FilmInListProps) => {
  const { image, filmName, ...restProps } = props;
  return (
    <FilmCard {...restProps}>
      <Image src={image} layout="fill" alt={filmName} />
    </FilmCard>
  );
};
