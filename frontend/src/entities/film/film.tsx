import { FilmCard } from "@/shared/filmCard";
import Image from "next/image";

export const Film = ({
  image,
  filmName,
}: {
  image: string;
  filmName: string;
}) => {
  return (
    <FilmCard>
      <Image src={image} layout="fill" alt={filmName} />
    </FilmCard>
  );
};
