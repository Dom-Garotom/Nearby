import { Redirect, router, useLocalSearchParams } from 'expo-router'
import React, { useEffect, useRef, useState } from 'react'
import { Alert,  ScrollView, View } from 'react-native'
import { useCameraPermissions } from 'expo-camera'
import { DataMarket } from '@/types/market'
import { IconMapPin, IconQrcode } from '@tabler/icons-react-native'

import Details from '@/components/molecula/datils'
import Cover from '@/components/atomo/cover'
import Loading from '@/components/atomo/loading'
import { Coupon } from '@/components/atomo/coupon'
import { Button } from '@/components/atomo/button'

import { api } from '@/services/api'
import CameraModal from '@/components/organismo/cameraModal'
import useCoupon from '@/hooks/useCoupon'

export default function Market() {
    const { id } = useLocalSearchParams()
    const { coupon , qrLock } = useCoupon()


    const [isVisibleCameraModal, setIsVisibleCameraModal] = useState(false)
    const [isLoading, setLoading] = useState(true)

    const [data, setData] = useState<DataMarket>()

    const [_, requestPermission] = useCameraPermissions()

    console.log(id);
    

    const fetchData = async () => {
        try {
            const { data } = await api.get(`/markets/${id}`)

            if (data) {
                setData(data);
                setLoading(false);
                return
            }

            throw new Error()
        } catch (error) {
            console.log(error);

            Alert.alert("Erro", "Não foi possivel carregar a página", [{
                text: "Ok",
                onPress: () => router.back()
            },])
        }
    }

    const handleOpenCamera = async () => {
        try {
            const { granted } = await requestPermission();

            if (!granted) {
                Alert.alert("Câmera", "Você pecisa habilitar o uso da câmera.");
                return;
            }

            qrLock.current = false;
            setIsVisibleCameraModal(true);
            console.log("Já");
            
        } catch (error) {
            Alert.alert("Error", `${error}`)
        }
    }



    useEffect(() => {
        fetchData()
    }, [coupon])

    if (isLoading) {
        return <Loading />
    }

    if (!data) {
        return <Redirect href={"/home/home"} />
    }

    return (
        <View style={{ flex: 1, paddingBottom: 20 }}>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Cover uri={data.cover} />
                <Details data={data} />
                {<Coupon code={coupon} />}
            </ScrollView>


            <View style={{ paddingHorizontal: 20, flexDirection: 'row', gap: 4 }}>

                <Button style={{ width: 56, height: 56 }}>
                    <Button.Icon icon={IconMapPin} />
                </Button>

                <Button style={{ flex: 1 }} onPress={() => handleOpenCamera()}>
                    <Button.Icon icon={IconQrcode} />
                    <Button.Title>Ler QR Code</Button.Title>
                </Button>

            </View>

            <CameraModal onClose={(e) => setIsVisibleCameraModal(e)} isVisibleCameraModal={isVisibleCameraModal} />

        </View >
    )
}
