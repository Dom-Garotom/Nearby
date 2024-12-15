import React from 'react'
import { Text, View } from 'react-native'
import { useFecth } from '@/hooks/useFecth'
import Places from '@/components/molecula/places'
import Categories from '@/components/molecula/categories'
import MapView, { Callout, Marker } from 'react-native-maps'
import { s } from './style'
import { router } from 'expo-router'

export default function Home() {
    const { category, place, selected, setSelected } = useFecth();

    const region = {
        latitude: -23.561187293883442,
        longitude: -46.656451388116494,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
    };

    return (
        <View style={{ flex: 1, backgroundColor: "#CECECE" }}>
            <Categories
                data={category}
                onSelected={setSelected}
                selected={selected}
            />

            <MapView
                style={{ flex: 1 }}
                initialRegion={region}
            >
                <Marker
                    identifier='current'
                    coordinate={{
                        latitude: region.latitude,
                        longitude: region.longitude,
                    }}
                    image={require("@/assets/location.png")}
                />

                {place.map(item => (
                    <Marker
                        key={item.id}
                        identifier={item.id}
                        coordinate={{
                            latitude: item.latitude,
                            longitude: item.longitude,
                        }}
                        image={require("@/assets/pin.png")}
                    >
                        <Callout onPress={() => router.navigate(`/market/${item.id}` as "/market/[id]")}>
                            <View>
                                <Text style={s.name}>{item.name}</Text>
                                <Text style={s.adress}>{item.address}</Text>
                            </View>
                        </Callout>

                    </Marker>
                ))}

            </MapView>

            <Places data={place} />
        </View>
    )
}
