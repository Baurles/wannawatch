"use client";

export const FilmListFrame = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-2 flex dark:bg-black flex-col items-center  rounded-lg w-full h-full bg-white">
      {children}
    </div>
  );
};
