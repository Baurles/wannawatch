export const DropDownModalList = ({children}:{children:React.ReactNode}) =>{
    return(
        <div className="w-full flex flex-col gap-2 justify-start items-center scrollbar-hide overflow-y-scroll scroll-hidden h-full p-2 ">
            {children}
        </div>
    )
}