export const Films = ({children}:{children:React.ReactNode}) => {
    return(
        <div className="flex  justify-start flex-wrap  pt-2 pl-2 pr-2 mt-2 mb-2 w-full h-full border-black border-2 rounded-lg">
                {children}
        </div>
    )
}