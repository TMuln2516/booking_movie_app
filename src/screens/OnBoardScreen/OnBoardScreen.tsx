import {Image, Text, View} from 'react-native';
import ButtonComponent from '../../components/ButtonComponent';

const OnBoardSceeen = ({navigation}: any) => {
  const handleClickSignin = () => {
    navigation.navigate('Login');
  };

  const handleClickSignUp = () => {
    navigation.navigate('VerifyEmail');
  };

  return (
    <View className="w-full h-full justify-center items-center space-y-4 bg-black">
      <View>
        <Image source={require('../../../assets/images/logo.png')} />
      </View>
      <View className="justify-center items-center space-y-3">
        <Text className="text-white text-xl font-Lato">LHBoking Hello</Text>
        <Text className="text-white font-Lato">Enjoy your favorite movies</Text>
      </View>
      <View className="w-full px-4">
        <ButtonComponent
          type="default"
          onClick={() => handleClickSignin()}
          title="Sign in"
        />
      </View>
      <View className="w-full px-4">
        <ButtonComponent
          type="info"
          onClick={() => handleClickSignUp()}
          title="Sign up"
        />
      </View>
      <View className="justify-center items-center">
        <Text className="text-gray-400 text-sm font-Lato text-center">
          By sign in or sign up, you agree to our Terms of Service and Privacy
          Policy
        </Text>
      </View>
    </View>
  );
};

export default OnBoardSceeen;
