"use client";
import { ModalSequence } from "@/shared/animations/animationSequences/modalSequence";
import { DropDownModal } from "@/shared/dropdownModal";
import { DropDownModalList } from "@/shared/dropdownModalList";
import MainStore from "@/store/store";
import { animate } from "framer-motion";
import { observer } from "mobx-react";
import { useEffect, useRef } from "react";
import { handleFetchCountries } from "@/features/fetchFilters";
import { handleFilterButtons } from "@/features/handleFilterButtons";
import { SquareButton } from "@/shared/buttons/squareButton";

export const Country = observer(() => {
  const Store = MainStore;
  const id = "countries";
  const ref = useRef<HTMLInputElement>(null);
  const arrowId = "arrowCountries";
  const buttonId = "buttonCountries";

  useEffect(() => {
    handleFetchCountries();
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
      <SquareButton
        variant="main"
        buttonId={buttonId}
        arrowId={arrowId}
        placeholder={Store.currentCountry}
      />

      <DropDownModal id={id}>
        <DropDownModalList>
          {Store.countries.map((e, index) => (
            <SquareButton
              variant="inner"
              onClick={() => handleFilterButtons(e, "country")}
              key={e.id}
              buttonName={e.name}
            />
          ))}
        </DropDownModalList>
      </DropDownModal>
    </section>
  );
});
