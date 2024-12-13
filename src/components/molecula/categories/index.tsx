import Category from '@/components/atomo/category'
import React from 'react'
import { FlatList } from 'react-native'

export type CategoriesProps = {
  id: string,
  name: string
}[]

type Props = {
  data: CategoriesProps,
  selected: string // Ela ira receber o valor que sera usado para comparação de seleção do item
  onSelected: (id: string) => void
}

export default function Categories({ data, onSelected, selected }: Props) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ gap: 8 }}
      renderItem={({ item }) => (
        <Category
          name={item.name}
          iconId={item.id}
          onPress={() => onSelected(item.id)}
          isSelected={selected === item.id}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  )
}
