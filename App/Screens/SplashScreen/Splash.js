import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import Styles from './SplashStyle';
import {BOTTOM_STACK} from '../../Assets/Constant/StringConstant';
import {LOGIN_SCREEN} from '../../Assets/Constant/StringConstant';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = props => {
  let verifiedToken = () => {
    AsyncStorage.getItem('token').then(resp => {
      if (resp) {
        props.navigation.replace(BOTTOM_STACK);
        return resp;
      }
    });
  };

  const [authLoaded, setAuthLoaded] = React.useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAuthLoaded(true);
    }, 2000);
  }, []);

  useEffect(() => {
    verifiedToken();
    if (authLoaded) {
      props.navigation.replace(LOGIN_SCREEN);
    }
  }, [authLoaded, props.navigation]);

  return (
    <View>
      <Image
        style={Styles.logo}
        source={require('../../Assets/Images/splashScreen.png')}
      />
    </View>
  );
};

export default SplashScreen;
