import { CategoryButton } from "@/shared/buttons/categoryButton"
import { DropDown } from "@/shared/buttons/dropdown"

export const Category = () => {
    return(
        <section className="flex items-center  h-full justify-center   border-black ">
            <DropDown placeholder="Все жанры"/>
            
        </section>

    )
}