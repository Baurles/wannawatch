export const LinksFrame = () => {
  return (
    <div className="mt-4 h-full gap-4 flex flex-col items-center w-full text-black">
      <p className="text-black text-xl font-bold">Смотреть</p>
      <div className="flex flex-col border-2 border-black w-full h-full rounded-xl gap-2 p-2 items-center">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg ">testName</h2>
          <span className="text-sm">testLINK</span>
        </div>
      </div>
    </div>
  );
};
