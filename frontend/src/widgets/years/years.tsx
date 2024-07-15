"use client";
import { ModalSequence } from "@/shared/animations/animationSequences/modalSequence";
import { DropDownModal } from "@/shared/dropdownModal";
import { DropDownModalList } from "@/shared/dropdownModalList";
import MainStore from "@/store/store";
import { animate } from "framer-motion";
import { observer } from "mobx-react";
import { lazy, Suspense, useEffect, useRef } from "react";
import { handleFetchYears } from "@/features/fetchFilters";
import SquareButton from "@/shared/buttons/squareButton";
import SuspensePage from "@/shared/suspencePage";

const LazySquareButton = lazy(
  () => import("../../shared/buttons/squareButton/index")
);

export const Years = observer(() => {
  const Store = MainStore;
  const id = "years";
  const ref = useRef<HTMLInputElement>(null);
  const arrowId = "arrowYears";
  const buttonId = "buttonYears";
  useEffect(() => {
    handleFetchYears();
    let handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (ref.current !== null) {
        if (ref.current.contains(target)) {
          handleClick(true);
          let sequence = ModalSequence(
            id,
            arrowId,
            180,
            "inline",
            buttonId,
            Store.dark ? "white" : "black",
            Store.dark ? "black" : "white"
          );
          animate(sequence);
        } else {
          ref.current.focus();
          handleClick(false);
          let sequence = ModalSequence(
            id,
            arrowId,
            0,
            "none",
            buttonId,
            Store.dark ? "black" : "white",
            Store.dark ? "white" : "black"
          );
          animate(sequence);
        }
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const handleClick = (value: boolean) => {
    if (Store.modalYears) {
      Store.setModalYears(value);
    } else {
      Store.setModalYears(value);
    }
  };
  return (
    <section
      ref={ref}
      className="flex items-center cursor-pointer  h-full flex-col justify-center   border-black "
    >
      <SquareButton
        variant="main"
        buttonId={buttonId}
        arrowId={arrowId}
        placeholder={Store.currentYear}
      />

      <DropDownModal id={id}>
        <DropDownModalList>
          {Store.years.map((e, index) => (
            <Suspense key={e.id} fallback={<SuspensePage />}>
              <LazySquareButton
                variant="inner"
                onClick={() => Store.setChooseYears(e.name)}
                key={e.id}
                buttonName={e.name}
              />
            </Suspense>
          ))}
        </DropDownModalList>
      </DropDownModal>
    </section>
  );
});
