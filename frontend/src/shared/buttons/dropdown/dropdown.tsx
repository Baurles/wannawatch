export const DropDown = ({placeholder}:{placeholder:string}) =>{
    return (
        <div className="p-2 cursor-pointer h-8 border-2 border-black text-black flex  justify-center items-center bg-white rounded-lg">
            {placeholder}
        </div>
    )
}