import { Link } from "expo-router";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Link href={"/(tabs)/(settings)/_index"}>click</Link>
    </View>
  );
}
