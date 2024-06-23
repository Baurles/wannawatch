"use client";

export const Recomendations = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full  pt-2 h-1/4">
      <div className="w-full justify-center pt-2 pl-2 pr-2 gap-2 border-black border-2 rounded-xl items-center   flex h-full ">
        {children}
      </div>
    </div>
  );
};
