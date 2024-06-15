import { DropDown } from "@/app/shared/buttons/dropdown"

export const Years = () => {
    return(
        <section className="flex items-center w-full h-1/3 gap-2 flex-col   border-black ">
            <DropDown placeholder="Все годы"/>
        </section>
    )
}