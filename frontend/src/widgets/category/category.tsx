"use client";
import { ModalSequence } from "@/shared/animations/animationSequences/modalSequence";
import { DropDown } from "@/shared/buttons/dropdown";
import { DropDownModalButton } from "@/entities/dropdownModalButton";
import { DropDownModal } from "@/shared/dropdownModal";
import { DropDownModalList } from "@/shared/dropdownModalList";
import MainStore from "@/store/store";
import { animate } from "framer-motion";
import { observer } from "mobx-react";
import { useEffect, useRef } from "react";
import { handleFetchCategories } from "@/features/fetchFilters";

export const Category = observer(() => {
  const Store = MainStore;
  const id = "category";
  const ref = useRef<HTMLInputElement>(null);
  const arrowId = "arrowCategory";

  useEffect(() => {
    handleFetchCategories();
    let handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (ref.current !== null) {
        if (ref.current.contains(target)) {
          handleClick(true);
          let sequence = ModalSequence(id, arrowId, 180, "inline");
          animate(sequence);
        } else {
          ref.current.focus();
          handleClick(false);
          let sequence = ModalSequence(id, arrowId, 0, "none");
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
      className="cursor-pointer flex items-center  h-fit justify-center   border-black "
    >
      <DropDown arrowId={arrowId} placeholder="Все жанры" />

      <DropDownModal id={id}>
        <DropDownModalList>
          {Store.categories.map((e, index) => (
            <DropDownModalButton key={e.id} buttonName={e.name} />
          ))}
        </DropDownModalList>
      </DropDownModal>
    </section>
  );
});
