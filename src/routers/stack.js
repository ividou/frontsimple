import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/login";
import Signup from "../screens/singup";
import tabs from "./tabs";

const Stack = createNativeStackNavigator();

export default StackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Login}
        name="Login"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={Signup}
        name="crearCuenta"
        options={{ headerShown: false }}
      />
      {/* importar los tabs */}
      <Stack.Screen
        component={tabs}
        name="tabs"
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
