import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
  TextInput,
  Button,
  Platform,
} from 'react-native';
// import {  } from 'react-native-gesture-handler';
import CustomSearch from '../../Components/SearchInputComponent/SearchInputComponent';
import {GlobalStyles} from '../../Assets/Colors/Color';
import RadioButton from '../../Components/RadioButtonComponent/RadioButton';
import ModalComponent from '../../Components/ModalComponent/ModalComponent';
import {Contacts} from 'react-native-contacts';
import * as StringC from '../../Assets/Constant/StringConstant';

const CustomerDetailScreen = props => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [transectionObj, setTransectionObj] = useState({});

  useEffect(() => {
    // getPermission();
  }, []);

  const handleRadioButtonSelect = option => {
    setSelectedOption(option);
  };

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };
  const DATA = [
    {
      id: 851,
      image: require('../../Assets/Images/slidetwo.png'),
      name: 'Abhishek Kumar',
      transaction: 5,
      netAmount: 2000,
      time: '10 minutes ago',
    },
    {
      id: 352,
      image: require('../../Assets/Images/slidethree.png'),
      name: 'Aastha',
      transaction: 2,
      netAmount: 2000,
      time: '10 minutes ago',
    },
    {
      id: 83,
      image: require('../../Assets/Images/lap.jpg'),
      name: 'Lalit',
      transaction: 10,
      netAmount: 2000,
      time: '10 minutes ago',
    },
    {
      id: 984,
      image: require('../../Assets/Images/slideone.png'),
      name: 'Anish',
      transaction: 10089,
      netAmount: 2000,
      time: '10 minutes ago',
    },
    {
      id: 974,
      image: require('../../Assets/Images/slideone.png'),
      name: 'Anish gupta',
      transaction: 10089,
      netAmount: 2000,
      time: '10 minutes ago',
    },
    {
      id: 874,
      image: require('../../Assets/Images/slideone.png'),
      name: 'Gaurav',
      transaction: 10089,
      netAmount: 2000,
      time: '10 minutes ago',
    },
  ];

  const changeHandlear = (key, val) => {
    transectionObj[key] = val;
    setTransectionObj({...transectionObj});
  };

  const save = () => {
    transectionObj.type = selectedOption;
    createTransection(transectionObj)
      .then(resp => console.log('success=======', resp))
      .catch(err => console.log('err transection==', JSON.stringify(err.data)));
  };

  const getTimeDisplay = timestamp => {
    const now = Date.now();
    const diff = now - timestamp;
    const seconds = Math.floor(diff / 1000);

    if (seconds < 5) {
      return 'Just now';
    } else if (seconds < 60) {
      return seconds + ' seconds ago';
    } else if (seconds < 3600) {
      const minutes = Math.floor(seconds / 60);
      return minutes + ' minutes ago';
    } else if (seconds < 86400) {
      const hours = Math.floor(seconds / 3600);
      return hours + ' hours ago';
    } else {
      const days = Math.floor(seconds / 86400);
      return days + ' days ago';
    }
  };

  // customer registration time from backend
  const timestamp = '1685202331561';
  // console.log(getTimeDisplay(timestamp));
  const Transaction = [
    {
      name: 'Bharti Yadav',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={props.navigation.navigate(StringC.CUSTOMERDETAIL_STACK)}>
        <View style={styles.customerListContainer}>
          <View style={styles.imageContainer}>
            <Image source={item.image} style={styles.profileImage} />
          </View>
          <View style={styles.customerDetails}>
            <View style={styles.textContainer}>
              <Text style={styles.textName}>{item.name}</Text>
              <Text>₹{item.netAmount}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text>{item.time}</Text>
              <Text> No transaction</Text>
            </View>
          </View>

          {/* add transection model */}

          <ModalComponent visible={isVisible} toggleModals={toggleModal} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <KeyboardAvoidingView style={styles.containers}>
      <View style={styles.container}>
        <View style={styles.transactionContainer}>
          <View style={styles.sendContainer}>
            <Text style={styles.sendText}>Send</Text>
            <Text style={styles.sendText}>0.0</Text>
          </View>
          <View style={styles.receiveContainer}>
            <Text style={styles.receiveText}>Receive</Text>
            <Text style={styles.receiveText}>0.0</Text>
          </View>
        </View>
        <View>
          <CustomSearch
            placename={'Search'}
            iconSize={25}
            rightIconName={'search'}
          />
          <Text>Excel download</Text>
        </View>
        <FlatList
          data={DATA}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={item => item.id}></FlatList>
        <View style={styles.buttonOuterContainer}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              props.navigation.navigate(StringC.CUSTOMER_STACK);
            }}>
            <Text style={styles.sendText}>Add Customer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: '2%',
  },
  containers: {
    flex: 1,
    backgroundColor: '#3e04c3',
  },

  transactionContainer: {
    flexDirection: 'row',
    width: '96%',
    height: '10%',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: '2%',
    marginTop: '2%',
  },
  sendContainer: {
    backgroundColor: '#5721d4',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    width: '49.5%',
    justifyContent: 'space-evenly',
  },
  receiveContainer: {
    backgroundColor: '#5721d4',
    width: '49.5%',
    justifyContent: 'space-evenly',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  sendText: {
    color: 'white',
    textAlign: 'center',
  },
  receiveText: {
    color: 'white',
    textAlign: 'center',
  },
  customerListContainer: {
    width: '100%',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  profileImage: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
  },
  imageContainer: {
    margin: '2%',
    width: '15%',
  },
  customerDetails: {
    // flexDirection:"row",
    width: '85%',
    margin: '2%',
  },
  textContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },
  textName: {
    fontWeight: '600',
    color: '#000',
  },
  buttonContainer: {
    borderWidth: 2,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginLeft: '40%',
    marginBottom: '5%',
    marginVertical: '100%',
    position: 'absolute',
    backgroundColor: '#5721d4',
    elevation: 30,
    shadowColor: '#000',
  },
  buttonOuterContainer: {
    justifyContent: 'flex-end',
    marginBottom: '2%',
  },
});

export default CustomerDetailScreen;
