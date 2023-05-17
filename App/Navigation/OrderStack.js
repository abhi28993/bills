import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

// import Notification from '../Screens/NoficationScreen/Notification';
// import AddComment from '../Screens/AddCommentScreen/AddComment';
//import CommentList from '../Screens/CommentListScreen/CommentList';
import OrderScreen from '../Screens/OrderScreen/Order';
import {
  ADD_COMMENT_SCREEN,
  COMMENT_LIST_SCREEN,
  ORDER_POST_SCREEN,
  NOTIFICATION_SCREEN,
} from '../Assets/Constant/StringConstant';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';
let CheckToken = () => {
  AsyncStorage.getItem('token').then(resp => {
    return resp;
  });
};

const OrderStack = () => {
  useEffect(() => {
    CheckToken();
    if (!CheckToken) {
      AsyncStorage.removeItem('token');
      props.navigation.replace(LOGIN_SCREEN);
    }
  }, []);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={ORDER_POST_SCREEN}
        component={OrderScreen}
        options={{animationEnabled: false}}
      />
      {/* <Stack.Screen
        name={COMMENT_LIST_SCREEN}
        component={CommentList}
        options={{animationEnabled: false}}
      /> */}
      {/* <Stack.Screen
        name={ADD_COMMENT_SCREEN}
        component={AddComment}
        options={{animationEnabled: false}}
      /> */}
    </Stack.Navigator>
  );
};

export default OrderStack;
