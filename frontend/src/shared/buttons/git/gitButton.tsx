import { FaGithub } from "react-icons/fa"

export const Git = ({color,size}:{color:string,size:number}) => {
    return(
        <FaGithub className="cursor-pointer" color={color} size={size} />
    )
}