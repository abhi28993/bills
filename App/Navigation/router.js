import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createStackNavigator} from '@react-navigation/native-stack';
// Stacks
import SplashScreen from '../Screens/SplashScreen/Splash';
import SlideScreen from '../Screens/SliderScreen/Slider';
import LoginScreen from '../Screens/LoginScreen/Login';
import SignUpScreen from '../Screens/SignUpScreen/SignUp';
import AddProductStack from './AddProductStack';

import BottomTabStack from '../Navigation/bottomTab';
import AddCategoryStack from "./AddCatagoryStack"
import {
  SPLASH_SCREEN,
  SLIDE_SCREEN,
  LOGIN_SCREEN,
  SIGNUP_SCREEN,
  BOTTOM_STACK,
  ADD_CATEGORY_STACK,
  OTP_SCREEN,
  ADD_PRODUCT_STACK
} from '../Assets/Constant/StringConstant';
import OtpVerify from '../Screens/OtpScreen/Otp';
// import SideDrawer from './sideDrawer'

const Stack = createNativeStackNavigator();
// For full stack and auth screens
const AllStacks = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={SPLASH_SCREEN}
        component={SplashScreen}
        options={{animationEnabled: false}}
      />
      <Stack.Screen
        name={LOGIN_SCREEN}
        component={LoginScreen}
        options={{animationEnabled: false}}
      />
      <Stack.Screen
        name={OTP_SCREEN}
        component={OtpVerify}
        options={{animationEnabled: false}}
      />
      <Stack.Screen
        name={BOTTOM_STACK}
        component={BottomTabStack}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={SLIDE_SCREEN}
        component={SlideScreen}
        options={{animationEnabled: false}}
      />

      <Stack.Screen
        name={SIGNUP_SCREEN}
        component={SignUpScreen}
        options={{animationEnabled: false}}
      />
      <Stack.Screen
        name={ADD_CATEGORY_STACK}
        component={AddCategoryStack}
        options={{animationEnabled: false}}
      />
      <Stack.Screen
        name={ADD_PRODUCT_STACK}
        component={AddProductStack}
        options={{animationEnabled: false}}
      />
      {/* <Stack.Screen
        name={FORGOT_SCREEN}
        component={ForgotPassword}
        options={{animationEnabled: false}}
      /> */}

      {/* <Stack.Screen
        name={SUCCESS_SCREEN}
        component={Successmail}
        options={{animationEnabled: false}}
      /> */}
      {/* <Stack.Screen
        name={CHANGE_PASSWORD_SCREEN}
        component={ChangePassword}
        options={{animationEnabled: false}}
      /> */}
      {/* <Stack.Screen
        name={CHOOSE_TOPIC_SCREEN}
        component={ChooseTopic}
        options={{animationEnabled: false}}
      /> */}
      {/* <Stack.Screen
        name={RECOMMENED_SCREEN}
        component={ReccommChannnel}
        options={{animationEnabled: false}}
      />
      <Stack.Screen
        name={NOTIFICATION_SCREEN}
        component={Notification}
        options={{animationEnabled: false}}
      />*/}
      {/* <Stack.Screen
        name={SIDE_DRAWER_SCREEN}
        component={SideDrawer}
        options={{animationEnabled: false}}
      />  */}
    </Stack.Navigator>
  );
};

export default AllStacks;
