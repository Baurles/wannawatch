import { FaTelegram } from "react-icons/fa"

export const Telegram = ({color,size}:{color:string,size:number}) => {
    return(
        <> 
            <FaTelegram className="cursor-pointer" color={color} size={size} />
        </>
    )
}