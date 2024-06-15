import { Git } from "@/shared/buttons/git"
import { Telegram } from "@/shared/buttons/telegram"
import { HeaderUI } from "@/shared/header"
import { HeaderButtons } from "@/shared/headerButtons"
import { Logo } from "@/shared/logo"
import { Search } from "@/shared/search"

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