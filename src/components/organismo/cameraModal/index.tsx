import { View } from 'react-native'
import { CameraView } from 'expo-camera'
import { Modal } from 'react-native'
import React from 'react'


import { Button } from '@/components/atomo/button'
import useCoupon from '@/hooks/useCoupon'

type Props = {
    isVisibleCameraModal: boolean,
    onClose : (action : boolean) => void
}

export default function CameraModal({ isVisibleCameraModal ,  onClose }: Props) {
    const { CouponIsFetching, qrLock ,  handleUseCoupon } = useCoupon()

    return (
        <Modal style={{ flex: 1 }} visible={isVisibleCameraModal}>
            <CameraView
                style={{ flex: 1 }}
                facing='back'
                onBarcodeScanned={({ data }) => {
                    if (data && !qrLock.current) {
                        qrLock.current = true
                        setTimeout(() => handleUseCoupon(data), 500)
                        onClose(false);
                    }
                }}
            />

            <View style={{ position: 'absolute', bottom: 12, left: 20, right: 20 }} >
                <Button
                    onPress={() => onClose(false)}
                    isLoading={CouponIsFetching}
                >
                    <Button.Title>Voltar</Button.Title>
                </Button>
            </View>
        </Modal>
    )
}
