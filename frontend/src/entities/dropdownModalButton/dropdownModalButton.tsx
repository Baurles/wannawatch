import { DropDownModalButtonUI } from "@/shared/buttons/dropdownModalButton/dropdownModalButton";

export const DropDownModalButton = ({ buttonName }: { buttonName: string }) => {
  return (
    <DropDownModalButtonUI>
      <p>{buttonName}</p>
    </DropDownModalButtonUI>
  );
};
