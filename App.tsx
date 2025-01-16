import { NavigationContainer } from "@react-navigation/native";
import { RootStack } from "./routes";
import { AuthProvider } from "./context/Auth";

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </AuthProvider>
  );
}
