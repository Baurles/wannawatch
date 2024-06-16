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

export const Country = observer(() => {
  const Store = MainStore;
  const id = "countries";
  const ref = useRef<HTMLInputElement>(null);
  const arrowId = "arrowCountries";

  useEffect(() => {
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
    if (Store.modalCountries) {
      Store.setModalCountries(value);
    } else {
      Store.setModalCountries(value);
    }
  };
  return (
    <section
      ref={ref}
      className="flex items-center cursor-pointer h-full flex-col justify-center   border-black "
    >
      <button>
        <DropDown arrowId={arrowId} placeholder="Все страны" />
      </button>

      <DropDownModal id={id}>
        <DropDownModalList>
          <DropDownModalButton buttonName="Test" />
          <DropDownModalButton buttonName="Test" />
          <DropDownModalButton buttonName="Test" />
          <DropDownModalButton buttonName="Test" />
          <DropDownModalButton buttonName="Test" />
          <DropDownModalButton buttonName="Test" />
          <DropDownModalButton buttonName="Test" />
          <DropDownModalButton buttonName="Test" />
          <DropDownModalButton buttonName="Test" />
          <DropDownModalButton buttonName="Test" />
        </DropDownModalList>
      </DropDownModal>
    </section>
  );
});
