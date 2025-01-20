import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";
import ForgotPassScreen from "../screens/ForgotPassScreen/ForgotPassScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";

const Routers = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{
                        headerShown: false,
                    }} />
                <Stack.Screen
                    name="Resgister"
                    component={RegisterScreen}
                    options={{
                        headerShown: false
                    }} />
                <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPassScreen}
                    options={{
                        headerShown: false
                    }} />
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerShown: false
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routers;