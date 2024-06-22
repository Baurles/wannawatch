import { FilmCard } from "@/shared/filmCard";
import Image from "next/image";
import { MouseEventHandler } from "react";

export const Film = ({
  image,
  filmName,
  isClicked,
}: {
  image: string;
  filmName: string;
  isClicked: MouseEventHandler;
}) => {
  return (
    <FilmCard>
      <Image src={image} onClick={isClicked} layout="fill" alt={filmName} />
    </FilmCard>
  );
};
