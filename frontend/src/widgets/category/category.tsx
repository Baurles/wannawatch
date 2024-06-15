import { CategoryButton } from "@/app/shared/buttons/categoryButton"
import { DropDown } from "@/app/shared/buttons/dropdown"

export const Category = () => {
    return(
        <section className="flex items-center w-full h-1/3 gap-2 justify-center   border-black ">
            <DropDown placeholder="Все жанры"/>
            
        </section>

    )
}