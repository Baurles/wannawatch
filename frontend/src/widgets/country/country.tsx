import { DropDown } from "@/shared/buttons/dropdown"

export const Country = () => {
    return(
        <section className="flex items-center  h-full flex-col justify-center   border-black ">
            <DropDown placeholder="Все страны"/>
        </section>
    )
}