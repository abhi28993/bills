import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import AddCategory from '../Screens/AddCategoryScreen/AddCategory';
import {ADD_SUPPLIER_SCREENS} from '../Assets/Constant/StringConstant';
import {GlobalStyles} from '../Assets/Colors/Color';
import AddSupplierScreen from '../Screens/BillingScreen/AddSupplierScreen';

const SupplierStack = () => {
console.log("fghjk")
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
        headerTintColor: 'white',
        tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
        tabBarActiveTintColor: GlobalStyles.colors.primary500,
        tabBarActiveBackgroundColor: GlobalStyles.colors.primary200,
      }}>
      <Stack.Screen
        name={ADD_SUPPLIER_SCREENS}
        component={AddSupplierScreen}
        options={{animationEnabled: false}}
      />
    </Stack.Navigator>
  );
};

export default SupplierStack;
