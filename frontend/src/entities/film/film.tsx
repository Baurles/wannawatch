import FilmCard from "@/shared/filmCard";
import SuspensePage from "@/shared/suspencePage";
import { FilmInListProps } from "@/shared/types/types";
import Image from "next/image";
import { lazy, Suspense } from "react";

const LazyCard = lazy(() => import("../../shared/filmCard/index"));
export const Film = (props: FilmInListProps) => {
  const { image, filmName, ...restProps } = props;
  return (
    <Suspense fallback={<SuspensePage />}>
      <LazyCard {...restProps}>
        <Image src={image} layout="fill" alt={filmName} />
      </LazyCard>
    </Suspense>
  );
};
