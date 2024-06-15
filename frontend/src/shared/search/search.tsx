"use client"
import {animate, motion} from "framer-motion"
import { searchInRollSequence, searchOutRollSequence } from "../animations/animationSequences/searchRollSequence"
import MainStore from "@/store/store"
import { useEffect, useRef } from "react"
import { observer } from "mobx-react"


export const Search = observer(() => {
    const Store = MainStore
    const ref = useRef<HTMLInputElement>(null)

    useEffect(()=>{
        let handler = (e:MouseEvent)=>{
            const target = e.target as HTMLElement

            if(ref.current !== null){
                if(ref.current.contains(target)){
                    console.log("ge")
                    handleClick(true)
                }
                ref.current.focus()
                handleClick(false)
            }
        }
        document.addEventListener("mousedown",handler)
        return ()=>{
            document.removeEventListener("mousedown",handler)
        }
    },[])
    const handleClick = (value:boolean) =>{
        if(Store.searchSwitch){
            animate(searchOutRollSequence)
            Store.setSearchSwitch(value) 
        }else{
            animate(searchInRollSequence)
            Store.setSearchSwitch(value) 
        }
        
    }
    
    
    return(
        <div className="w-1/2 flex justify-end">
            <motion.input ref={ref}  initial={{width:"25%"}} className="border-black border-2 h-8 rounded-lg bg-white text-black p-2" placeholder="Найти фильм" type="text" />
        </div>
        
    )
})