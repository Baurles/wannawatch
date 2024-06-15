import { AnimationSequence } from "framer-motion"

export const ModalSequence = (id:string, arrowId:string,deg:number) => {
    const sequence:AnimationSequence = [
        [`#${id}`,{opacity:1},{duration:0.5}],
        [`#${arrowId}`,{rotate:deg},{duration:0.5,at:"<"}]
    ]
    
    return sequence
}
