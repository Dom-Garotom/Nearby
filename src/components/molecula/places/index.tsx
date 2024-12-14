import Place from '@/components/atomo/place'
import { PlaceProps } from '@/types/place'
import { useRef } from 'react'
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet"
import { Text, useWindowDimensions } from 'react-native'
import { s } from './style'

type Props = {
  data: PlaceProps[],
}

export default function Places({ data }: Props) {
  const { height } = useWindowDimensions();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = {
    min: 200,
    max: height - 300,
  }

  return (
    <BottomSheet
      ref={bottomSheetRef}
      enableDynamicSizing={true}
      snapPoints={[snapPoints.min, snapPoints.max]}
      handleIndicatorStyle={s.indicator}
      backgroundStyle={s.container}
      enableOverDrag={false}
    >
      <BottomSheetFlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Place
            data={item}
          />
        )}
        contentContainerStyle={s.content}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() =>
          <Text style={s.title}>Viaje pelos locais perto de você</Text>
        }
      />
    </BottomSheet>
  )
}
