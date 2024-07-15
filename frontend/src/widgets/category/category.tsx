"use client";
import { ModalSequence } from "@/shared/animations/animationSequences/modalSequence";
import { DropDownModal } from "@/shared/dropdownModal";
import { DropDownModalList } from "@/shared/dropdownModalList";
import MainStore from "@/store/store";
import { animate } from "framer-motion";
import { observer } from "mobx-react";
import { lazy, Suspense, useEffect, useRef } from "react";
import { handleFetchCategories } from "@/features/fetchFilters";
import { handleFilterButtons } from "@/features/handleFilterButtons";
import SquareButton from "@/shared/buttons/squareButton";
import SuspensePage from "@/shared/suspencePage";

const LazySquareButton = lazy(
  () => import("../../shared/buttons/squareButton/index")
);

export const Category = observer(() => {
  const Store = MainStore;
  const id = "category";
  const ref = useRef<HTMLInputElement>(null);
  const arrowId = "arrowCategory";
  const buttonId = "buttonCategory";
  useEffect(() => {
    handleFetchCategories();
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
    if (Store.modalCategory) {
      Store.setModalCategory(value);
    } else {
      Store.setModalCategory(value);
    }
  };
  return (
    <section
      ref={ref}
      className="cursor-pointer  dark:border-white flex items-center  h-fit justify-center   border-black "
    >
      <SquareButton
        variant="main"
        buttonId={buttonId}
        arrowId={arrowId}
        placeholder={Store.currentCategory}
      />

      <DropDownModal id={id}>
        <DropDownModalList>
          {Store.categories.map((e, index) => (
            <Suspense fallback={<SuspensePage />} key={e.id}>
              <LazySquareButton
                variant="inner"
                onClick={() => handleFilterButtons(e, "category")}
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
