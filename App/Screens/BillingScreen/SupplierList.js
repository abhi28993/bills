import React, {useState} from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Modal,
  Button,
  TextInput,
  Pressable,
  ImageBackground,
} from 'react-native';
// import {  } from 'react-native-gesture-handler';
import CustomSearch from '../../Components/SearchInputComponent/SearchInputComponent';
import {fontWeight} from '@mui/system';
import RadioButton from '../../Components/RadioButtonComponent/RadioButton';
import {GlobalStyles} from '../../Assets/Colors/Color';
import {uploadImage} from '../../Services/commonService';
import CameraModal from '../../Components/CameraComponent/CameraComponent';
import {createTransection} from '../../Services/transectionService';
import * as StringC from '../../Assets/Constant/StringConstant';

const SupplierList = props => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [transectionObj, setTransectionObj] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

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

  const renderItem = ({item}) => {
    return (
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

        <Modal visible={isVisible} animationType="slide" transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.modalText}>
                <TouchableOpacity
                  onPress={toggleModal}
                  style={styles.closeButton}>
                  <Text style={styles.modalheadingText}>Close</Text>
                </TouchableOpacity>
              </View>
                <View>
                  <TouchableOpacity
                    onPress={() => setModalVisible(true)}
                    style={styles.uploadText}>
                    <Image
                      source={require('../../Assets/Icons/addCamera.png')}
                      style={{width: 100, height: 100}}
                    />
                    <Text style={styles.invoiceText}>Upload Invoice</Text>
                  </TouchableOpacity>
                </View>
              <Text style={styles.label}>Supplier Name</Text>
              <TextInput
                style={styles.inputText}
                onChangeText={e => changeHandlear('name', e)}
              />

              <Text style={styles.label}>Supplier Mobile</Text>
              <TextInput
                style={styles.inputText}
                onChangeText={e => changeHandlear('mobile', e)}
              />

              <Text style={styles.label}>Amount</Text>
              <TextInput
                style={styles.inputTexts}
                placeholder="Amount"
                onChangeText={e => changeHandlear('amount', e)}
                Value
              />

             

              <Text style={styles.label}>Remarks</Text>
              <TextInput
                style={styles.inputText}
                onChangeText={e => changeHandlear('comments', e)}
              />

              <View
                style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                {selectedOption === 'send' && (
                  <View style={styles.offerPriceButton}>
                    <Button
                      color={GlobalStyles.colors.red100}
                      title={'Amount Send ' + (transectionObj.amount || 0)}
                      onPress={save}
                    />
                  </View>
                )}

                {selectedOption === 'receive' && (
                  <View style={styles.offerPriceButton}>
                    <Button
                      color={GlobalStyles.colors.green100}
                      title={'Amount Receive ' + (transectionObj.amount || 0)}
                      onPress={save}
                    />
                  </View>
                )}
              </View>
            </View>
          </View>
        </Modal>

        {/* <CameraModal/> */}
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.containers}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
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
            onPress= {()=>{props.navigation.navigate(StringC.SUPPLIER_STACK)}} >
            <Text style={styles.sendText}>Add Supplier</Text>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  modalText: {
    backgroundColor: '#3e04c3',
    height: '8%',
    flexDirection: 'row',
    justifyContent: 'space-between',

    // alignContent:"space-between"
  },
  modalheadingText: {
    color: '#fff',
  },
  closeButton: {
    marginHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  },
  label: {
    marginLeft: '3%',
    marginTop: '5%',
  },
  invoiceText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#000',
  },

  inputTexts: {
    borderBottomWidth: 1,
    width: '94%',
    marginLeft: '3%',
    height: 40,
    marginBottom: 40,
  },
  inputText: {
    borderBottomWidth: 1,
    width: '94%',
    marginLeft: '3%',
    height: 40,
  },
  uploadText: {
    alignSelf: 'center',
    marginLeft: 10,
  },
  offerPriceButton: {
    width: '100%',
    alignSelf: 'center',
    marginBottom: 40,
    marginTop: '20%',
  },

  modalContentAccess: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    width: '80%',
    padding: '5%',
    height: '20%',
  },
  // modalContents: {
  //   flexDirection: 'row',
  //   justifyContent: 'flex-end',
  //   backgroundColor: '#fff',
  //   width: '80%',
  //   paddingRight: '2%',
  // },
  accessIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    height: '35%',
    width: '100%',
  },
  iconContainerClose: {},
});

export default SupplierList;
