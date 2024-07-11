export const HeaderUI = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="w-full fixed dark:bg-black dark:border-white h-fit gap-2 flex flex-col border-b-2 border-black justify-between p-2 pr-4 pl-4 items-center bg-white border-solid rounded-b-xl z-10">
      {children}
    </header>
  );
};
