import { HTMLMotionProps } from "framer-motion";

export interface FilmProps {
  id: number;
  name: string;
  description: string;
  ImgURL: string;
  rate: "string";
  country: "string";
  year: "string";
}

export interface FilterProps {
  id: number;
  name: string;
}

export interface FilmCardProps extends HTMLMotionProps<"div"> {
  children?: React.ReactNode;
}

export interface FilmInListProps extends FilmCardProps {
  image: string;
  filmName: string;
}
