import Welcome from "@/components/atomo/welcome"
import { View , Text } from "react-native" 
export default function index() {
  return (
    <View style={ {flex : 1 , padding: 20, gap: 28}}>
      <Welcome 
        title="Boas vindas ao Nearby!"
        desccription="Tenha cupons de vantagem para usar em seus estabelecimentos favoritos."
      />
    </View>
  )
}
