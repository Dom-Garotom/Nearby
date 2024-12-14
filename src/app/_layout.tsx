import { colors } from "@/styles/colors"
import { Stack } from "expo-router"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import {
  useFonts,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold
} from "@expo-google-fonts/rubik"
import Loading from "@/components/atomo/loading"

export default function layout() {
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold
  })

  if (!fontsLoaded) {
    return <Loading />
    // trabalhar em um componente de loading
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.gray[100] }
        }}
      />
    </GestureHandlerRootView>
  )
}
