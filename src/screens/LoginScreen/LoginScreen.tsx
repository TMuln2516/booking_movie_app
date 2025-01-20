import { Image, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, Text, View } from "react-native";
import InputComponent from "../../components/InputComponent";
import { useEffect, useState } from "react";
import ButtonComponent from "../../components/ButtonComponent";
import { loginApi } from "../../api/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
    const navigation = useNavigation();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleClickLogIn = () => {
        console.log("Click Log in")
        loginApi(username, password, (error, response) => {
            if (error) {
                console.log("Error with login: ", error);
            } else {
                console.log("Response: ", response);
                // console.log("Token: ", response.result.token);
                AsyncStorage.setItem("token", response.result.token);

                navigation.navigate("Home" as never);
            }
        })
    }

    return (
        <KeyboardAvoidingView className="flex-1 bg-background"
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <SafeAreaView className="w-full h-full">
                <ScrollView
                    contentContainerStyle={{
                        flexGrow: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    keyboardShouldPersistTaps="handled"
                >
                    <View>
                        <Image source={require('../../../assets/images/logo.png')} />
                    </View>
                    <View className="w-full items-center px-3">
                        <InputComponent
                            value={username}
                            onChangeValue={setUsername}
                            placeholder="Enter your username" />
                        <InputComponent
                            value={password}
                            onChangeValue={setPassword}
                            placeholder="Enter your password" />
                    </View>
                    <View className="w-full items-center">
                        <ButtonComponent onClick={handleClickLogIn}
                            title="Log in" />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen;