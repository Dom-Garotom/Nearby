import React from 'react'
import { View } from 'react-native'
import { useFecth } from '@/hooks/useFecth'
import Places from '@/components/molecula/places'
import Categories from '@/components/molecula/categories'

export default function Home() {
    const {category , place , selected , setSelected} = useFecth();

    return (
        <View style={{ flex: 1, gap: 20, padding: 20 , backgroundColor: "#CECECE" }}>
            <Categories
                data={category}
                onSelected={setSelected}
                selected={selected}
            />
            <Places data={place} />
        </View>
    )
}
