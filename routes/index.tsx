import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthController from "../pages/Auth/Controller/auth.controller";
import HomeController from "../pages/Home/controller/home.controller";
import ModelController from "../pages/Model/controller/model.controller";
import { useContext } from "react";
import { Button } from "react-native";
import AuthContext from "../context/Auth";

interface User {
  name?: string;
}
export function RootStack() {
  const { signed, Logout, user } = useContext(AuthContext) as {
    signed: boolean;
    Logout: () => void;
    user: User;
  };
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Auth">
      {signed ? (
        <Stack.Screen
          name="Home"
          component={HomeController}
          options={{
            title: `${
              user.name
                ? `${user.name}, Escolha um modelo`
                : "Escolha um modelo"
            }`,
            headerRight: () => (
              <Button onPress={() => Logout()} title="Sair" color="#000" />
            ),
          }}
        />
      ) : (
        <Stack.Screen
          name="Auth"
          component={AuthController}
          options={{ title: "Entrar" }}
        />
      )}
      <Stack.Screen
        name="Model"
        component={ModelController}
        options={{ title: "Modelos" }}
      />
    </Stack.Navigator>
  );
}
