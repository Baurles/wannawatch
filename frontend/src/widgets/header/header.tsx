import { DarkModeSwitch } from "@/features/handleDarkModeSwitch";
import { LinkButton } from "@/shared/buttons/linkButton";
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
            <LinkButton size={30} variant="Git" />
            <LinkButton size={30} variant="Telegram" />
          </HeaderButtons>
        </div>
      </HeaderUI>
    </>
  );
};
