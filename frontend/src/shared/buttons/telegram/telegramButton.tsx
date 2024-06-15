"use client"
import { FaTelegram } from "react-icons/fa"
import {motion} from "framer-motion"

export const Telegram = ({color,size}:{color:string,size:number}) => {
    return(
        <motion.button whileHover={{scale:1.05}}> 
            <a href="https://t.me/baurlesprod">
                <FaTelegram className="cursor-pointer" color={color} size={size} />
            </a>
        </motion.button>
    )
}