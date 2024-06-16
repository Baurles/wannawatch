export const CinemaFrame = ({children}:{children:React.ReactNode}) =>{
    return(
        <div className="w-full flex justify-between p-2 rounded-lg border-black border-2 h-full">
            {children}
        </div>
    )
}