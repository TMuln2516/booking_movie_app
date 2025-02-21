import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';
import {Text, View} from 'react-native';
import {getToken} from '../../api/Api';

const HomeScreen = () => {
  useEffect(() => {
    const fetchToken = async () => {
      const token = await getToken();
      console.log('Fetched token:', token);
    };

    fetchToken();
  }, []);

  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
