import Categories, { CategoriesProps } from '@/components/molecula/categories'
import { api } from '@/services/api'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'



export default function Home() {
    const [data, setData] = useState<CategoriesProps>([])

    const fecthCategoties = async () => {
        try {
            const { data } = await api.get("/categories");
            setData(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        ''
        fecthCategoties();
    }, [])




    return (
        <View style={{ flex: 1 }}>
            <Categories data={data} />
        </View>
    )
}
