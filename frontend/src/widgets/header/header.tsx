import { Git } from "@/app/shared/buttons/git"
import { Telegram } from "@/app/shared/buttons/telegram"
import { HeaderUI } from "@/app/shared/header"
import { HeaderButtons } from "@/app/shared/headerButtons"
import { Logo } from "@/app/shared/logo"
import { Search } from "@/app/shared/search"

export const Header = ({children}:{children:React.ReactNode}) =>{
    return(
        <>
            <HeaderUI>
                <div className="flex justify-between items-center w-full">
                    <Logo/>
                    <Search/>
                    {children}
                    <HeaderButtons>
                        <Git color="black" size={30}/>
                        <Telegram color="black" size={30}/>
                    </HeaderButtons>
                </div>
                
            </HeaderUI>
        </>
    )
}