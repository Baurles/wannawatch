"use client"
import MainStore from "@/store/store"
import { IoMdArrowDropdown } from "react-icons/io"

export const DropDown = ({placeholder,arrowId}:{placeholder:string,arrowId:string}) =>{

    return (
        <div className="h-fit w-36">
            <div className="p-2 cursor-pointer h-8 border-2  border-black text-black flex  justify-center items-center bg-white rounded-lg">
                <IoMdArrowDropdown id={arrowId}/>
                {placeholder}
            </div>
        </div>

    )
}