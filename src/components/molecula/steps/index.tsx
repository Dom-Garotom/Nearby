import { Text, View } from "react-native";
import { s } from "./style";
import Step from "@/components/atomo/step";
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native";

type Props = {
  title_Steps: string
}

export default function Steps({ title_Steps }: Props) {
  return (
    <View style={s.container}>
      <Text style={s.title}>{title_Steps}</Text>
      <Step
        title="Encontre estabelecimentos"
        description="Veja locais perto de você que são parceiros Nearby"
        icon={IconMapPin}
      />

      <Step
        title="Ative o cupom com QR Code"
        description="Escaneie o código no estabelecimento para usar o benefício"
        icon={IconQrcode}
      />

      <Step
        title="Garanta vantagens perto de você"
        description="Ative cupons onde estiver, em diferentes tipos de estabelecimento"
        icon={IconTicket}
      />

    </View>
  )
}
