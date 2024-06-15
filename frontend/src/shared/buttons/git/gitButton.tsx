"use client"
import { FaGithub } from "react-icons/fa"
import {motion} from "framer-motion"

export const Git = ({color,size}:{color:string,size:number}) => {
    return(
        <motion.button whileHover={{scale:1.05}}>
            <a href="https://github.com/Baurles">
                <FaGithub className="cursor-pointer" color={color} size={size} />
            </a>
        </motion.button>      
    )
}