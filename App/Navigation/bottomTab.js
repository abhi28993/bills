import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styles from './tabstyles';
import OrderStack from './OrderStack';
import BillingStack from './BillingStack';
import CatalogueStack from './CatalogueStack';
import MoneyStack from './MoneyStack';
import MoreStack from './MoreStack';
import {GlobalStyles} from '../Assets/Colors/Color';
import {
  BILLING_STACK,
  CATALOGUE_STACK,
  MONEY_STACK,
  OREDR_STACK,
  MORE_STACK,
} from '../Assets/Constant/StringConstant';

const HomeStack = createBottomTabNavigator();
const BottomTabStack = () => {
  return (
    <HomeStack.Navigator
      screenOptions={({route}) => ({
        headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
        headerTintColor: 'white',
        tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        tabBarActiveBackgroundColor: GlobalStyles.colors.primary200,

        tabBarIcon: ({focused}) => {
          switch (route.name) {
            case OREDR_STACK:
              return focused ? (
                <Image
                  source={require('../Assets/Icons/order.png')}
                  style={styles.buttomBarIcons}
                />
              ) : (
                <Image
                  source={require('../Assets/Icons/order.png')}
                  style={styles.buttomBarIcons}
                />
              );
            case BILLING_STACK:
              return focused ? (
                <Image
                  source={require('../Assets/Icons/bill.png')}
                  style={styles.buttomBarIcons}
                />
              ) : (
                <Image
                  source={require('../Assets/Icons/bill.png')}
                  style={styles.buttomBarIcons}
                />
              );

            case CATALOGUE_STACK:
              return focused ? (
                <View style={styles.buttomBarMenuView}>
                  <View>
                    <Image
                      source={require('../Assets/Icons/catalogue.png')}
                      style={styles.buttomBarIcons}
                    />
                  </View>
                </View>
              ) : (
                <View style={styles.buttomBarMenuView}>
                  <View>
                    <Image
                      source={require('../Assets/Icons/catalogue.png')}
                      style={styles.buttomBarIcons}
                    />
                  </View>
                </View>
              );
            case MONEY_STACK:
              return focused ? (
                <Image
                  source={require('../Assets/Icons/money.png')}
                  style={styles.buttomBarIcons}
                />
              ) : (
                <Image
                  source={require('../Assets/Icons/money.png')}
                  style={styles.buttomBarIcons}
                />
              );
            case MORE_STACK:
              return focused ? (
                <Image
                  source={require('../Assets/Icons/more.png')}
                  style={styles.buttomBarIcons}
                />
              ) : (
                <Image
                  source={require('../Assets/Icons/more.png')}
                  style={styles.buttomBarIcons}
                />
              );
            default:
              break;
          }
        },
      })}>
      <HomeStack.Screen name={OREDR_STACK} component={OrderStack} focused/>
      <HomeStack.Screen name={BILLING_STACK} component={BillingStack} focused />
      <HomeStack.Screen name={CATALOGUE_STACK} options={{headerShown: false}} component={CatalogueStack} focused />
      <HomeStack.Screen name={MONEY_STACK} component={MoneyStack} focused/>
      <HomeStack.Screen name={MORE_STACK} component={MoreStack} focused />
    </HomeStack.Navigator>


  );
};

export default BottomTabStack;
