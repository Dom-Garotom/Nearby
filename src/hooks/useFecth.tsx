import { api } from "@/services/api";
import { CategoriesProps } from "@/types/categories";
import { MarketsProps } from "@/types/place";
import { useEffect, useState } from "react";

export function useFecth() {
    const [category, setCategoy] = useState<CategoriesProps>([])
    const [place, setPlace] = useState<MarketsProps[]>([])
    const [selected, setSelected] = useState("")


    const fecthCategoties = async () => {
        try {
            const { data } = await api.get("/categories");
            setCategoy(data);
            setSelected(data[0].id)
        } catch (error) {
            console.log(error);
        }
    }


    const fecthPlace = async () => {
        try {
            if (!category) {
                return;
            }

            const { data } = await api.get("/markets/category/" + selected);
            setPlace(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fecthCategoties();
    }, [])

    useEffect(() => {
        fecthPlace();
    }, [category, selected])




    return { category, place, selected, setSelected }
}
