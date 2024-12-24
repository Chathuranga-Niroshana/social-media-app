import { Redirect } from "expo-router";
import { ROUTES } from "../src/routes";
import { SafeAreaView } from "react-native";

export default function Page() {

  return (
    <SafeAreaView>
      <Redirect href={ROUTES.HOME} />
    </SafeAreaView>
  );
}
