import Categories from '@/components/molecula/categories'
import Places from '@/components/molecula/places'
import { api } from '@/services/api'
import { CategoriesProps } from '@/types/categories'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'

export default function Home() {
    const [data, setData] = useState<CategoriesProps>([])
    const [selected, setSelected] = useState("")


    const fecthCategoties = async () => {
        try {
            const { data } = await api.get("/categories");
            setData(data);
            setSelected(data[0].id)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fecthCategoties();
    }, [])


    return (
        <View style={{ flex: 1, gap: 20, padding: 20 }}>
            <Categories
                data={data}
                onSelected={setSelected}
                selected={selected}
            />
            <Places/>
        </View>
    )
}
