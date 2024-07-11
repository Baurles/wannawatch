"use client";
import { DropDownModalButtonUI } from "@/shared/buttons/dropdownModalButton/dropdownModalButton";
import { MouseEventHandler } from "react";
export const DropDownModalButton = ({
  buttonName,
  isClicked,
}: {
  buttonName: string;
  isClicked: MouseEventHandler;
}) => {
  return (
    <DropDownModalButtonUI isClicked={isClicked}>
      <p>{buttonName}</p>
    </DropDownModalButtonUI>
  );
};
