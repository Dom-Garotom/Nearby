import { useRef, useState } from 'react'

import { api } from '@/services/api'
import { Alert } from 'react-native'

type CouponProps ={
    coupon : string
}

export default function useCoupon() {
    const [CouponIsFetching, setCouponIsFetching] = useState(false)
    const [coupon, setCoupon] = useState<string>("")
    const qrLock = useRef(false);


    const getCoupon = async (id: string) => {
        try {
            setCouponIsFetching(true)
            const { data } = await api.patch(`/coupons/${id}`)
            const dataCoupon : CouponProps = data
            console.log(dataCoupon);
            

            Alert.alert("Cupom", dataCoupon.coupon)
            setCoupon(dataCoupon.coupon)
            console.log(coupon);
            

        } catch (error) {
            console.log(error);
        } finally {
            setCouponIsFetching(false)
        }
    }

    const handleUseCoupon = async (id: string) => {
        Alert.alert(
            "Cupom",
            "Não é possível reutilizar um cupom resgatado. Deseja realmente resgatar o cupom?",
            [
                { style: "cancel", text: "Não" },
                { text: "Sim", onPress: () => getCoupon(id) },
            ]
        )

    }

    return { handleUseCoupon, getCoupon, qrLock, coupon, CouponIsFetching }

}
