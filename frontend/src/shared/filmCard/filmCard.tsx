"use client"
import Image from "next/image"
import test from "../../../testpng/test.jpg"
import {motion} from "framer-motion"

export const FilmCard = () => {
    
    return(
        <div className="cursor-pointer w-1/6 p-2 h-1/2  ">
            <motion.div whileHover={{scale:1.05}} style={{width: '100%', height: '100%', position: 'relative'}} className="cursor-pointer w-full h-full border-2 rounded-lg border-black">
                <Image src={test} layout="fill" alt="Film"/>
            </motion.div>
        </div>
    )
}