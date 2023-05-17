import react from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


AsyncStorage.getItem('token').then(resp=>{
  console.log('token ==================',resp);
})

const BillingStack = () => {
  
  return (
    <View>
      <Text>I am Billing order and ia ms testing the page</Text>
    </View>
  );
};

export default BillingStack;
