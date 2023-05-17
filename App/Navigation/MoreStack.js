import react from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

AsyncStorage.getItem('token').then(resp => {
  console.log('token ==================', resp);
});

const MoreStack = () => {
  return (
    <View>
      <Text>i am a more stack page</Text>
    </View>
  );
};

export default MoreStack;
