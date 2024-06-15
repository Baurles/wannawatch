"use client"
import {motion} from "framer-motion"

export const DropDownModal = ({id,children}:{id:string,children:React.ReactNode}) =>{
    return(
        <motion.div initial={{opacity:0}} id={id} className="z-20 pt-24 absolute ">
            <div className="p-2 mt-20 w-36 h-36 rounded-lg border-black border-2 bg-white">
                {children}
            </div>
        </motion.div>
    )
}
