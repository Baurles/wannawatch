import { DropDown } from "@/app/shared/buttons/dropdown"

export const Country = () => {
    return(
        <section className="flex items-center w-full h-1/3 gap-2 flex-col justify-center   border-black ">
            <DropDown placeholder="Все страны"/>
        </section>
    )
}