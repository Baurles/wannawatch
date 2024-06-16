import { Git } from "@/shared/buttons/git";
import { Telegram } from "@/shared/buttons/telegram";
import { HeaderUI } from "@/shared/header";
import { HeaderButtons } from "@/shared/headerButtons";
import { Logo } from "@/shared/logo";

export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HeaderUI>
        <div className="flex justify-between items-center w-full">
          <Logo />

          {children}
          <HeaderButtons>
            <Git color="black" size={30} />
            <Telegram color="black" size={30} />
          </HeaderButtons>
        </div>
      </HeaderUI>
    </>
  );
};
