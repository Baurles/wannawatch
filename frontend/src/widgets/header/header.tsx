import { DarkModeSwitch } from "@/features/handleDarkModeSwitch";
import { Git } from "@/shared/buttons/git";
import { Telegram } from "@/shared/buttons/telegram";
import { HeaderUI } from "@/shared/header";
import { HeaderButtons } from "@/shared/headerButtons";
import { Logo } from "@/shared/logo";

export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HeaderUI>
        <div className="flex dark:bg-black dark:text-white justify-between items-center w-full">
          <Logo />

          {children}
          <HeaderButtons>
            <DarkModeSwitch />
            <Git size={30} />
            <Telegram size={30} />
          </HeaderButtons>
        </div>
      </HeaderUI>
    </>
  );
};
