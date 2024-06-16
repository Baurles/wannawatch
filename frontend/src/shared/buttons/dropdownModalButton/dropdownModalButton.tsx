"use client";

export const DropDownModalButtonUI = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full h-1/4 rounded-lg text-black cursor-pointer border-2 border-black  flex justify-center items-center">
      {children}
    </div>
  );
};
