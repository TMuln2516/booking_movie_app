import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const API_URL = "http://192.168.1.11:8080";
// export const API_URL = "http://localhost:8080";

export const getToken = async (): Promise<string | null> => {
    try {
        const token = await AsyncStorage.getItem("token");
        return token;
    } catch (error) {
        console.error("Error getting token:", error);
        return null;
    }
};

export const loginApi = async (
    username: string,
    password: string,
    callback: (error: any, response: any) => void,
) => {
    const data = {
        username,
        password
    };

    const config: AxiosRequestConfig = {
        method: 'post',
        url: `${API_URL}/api/auth/login`,
        data,
    };

    try {
        const response: AxiosResponse = await axios.request(config);
        console.log('response: ', response)
        callback(null, response.data);
    } catch (error: any) {
        const errorMessage = error.response?.data?.message || "Something went wrong";
        callback(errorMessage, null);
    }
};