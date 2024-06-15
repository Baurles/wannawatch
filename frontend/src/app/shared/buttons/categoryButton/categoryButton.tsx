export const CategoryButton = ({category}:{category:string}) =>{
    return(
        <div className="flex justify-center items-center w-12 text-sm text-black h-8 border-2 border-black rounded-lg">
            <h2>{category}</h2>
        </div>
    )
}