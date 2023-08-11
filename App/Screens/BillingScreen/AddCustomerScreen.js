import React from 'react';
import {
  Button,
  FlatList,
  Image,
  Modal,
  PermissionsAndroid,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Contacts from 'react-native-contacts';
import RadioButton from '../../Components/RadioButtonComponent/RadioButton';
import {GlobalStyles} from '../../Assets/Colors/Color';
import {useState} from 'react';

const AddCustomerScreen = props => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    getPermission();
    setModalVisible(!isModalVisible);
  };

  const getPermission = async () => {
    return PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
      },
    ).then(res => {
      if (res == 'granted') {
        Contacts.getAll()
          .then(contacts => {
            console.log(contacts, 'contacts');
          })
          .catch(e => {
            console.log(e);
          });
      }
    });
  };
  return (
    <>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.accessContainer}>
            <TouchableOpacity
              onPress={() => getPermission()}
              style={styles.uploadText}>
              <Image
                source={require('../../Assets/Icons/addCamera.png')}
                style={{width: 100, height: 100}}
              />
              <Text style={styles.invoiceText}>Upload Invoice</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>Customer Mobile</Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={styles.inputTextMob}
              onChangeText={e => changeHandlear('mobile', e)}
            />
            <TouchableOpacity
              onPress={() => {
                toggleModal();
              }}>
              <Image
                style={styles.contactImage}
                source={require('../../Assets/Icons/AddContact.png')}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.label}>Customer Name</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={e => changeHandlear('name', e)}
          />

          <Text style={styles.label}>Remarks</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={e => changeHandlear('comments', e)}
          />

          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
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
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}>
          <View style={styles.modalContainer}>
            <View style={styles.modalData}>
              <View style={styles.modalText}>
                <TouchableOpacity
                  onPress={() => {
                    toggleModal();
                  }}
                  style={styles.closeButton}>
                  <Text style={styles.modalheadingText}>Close</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={Contacts}
                renderItem={({item, index}) => {
                  return (
                    <View
                      style={{
                        width: '90%',
                        height: 70,
                        alignSelf: 'center',
                        borderWidth: 0.5,
                        borderRadius: 10,
                        marginTop: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <View style={{flexDirection: 'row'}}>
                        <Image />
                        <View>
                          <Text style={{color: '#fff'}}>dfghjkl</Text>
                        </View>
                      </View>
                      <View></View>
                    </View>
                  );
                }}
              />
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default AddCustomerScreen;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  modalData: {
    backgroundColor: '#fff',
    width: '100%',
    height: '80%',
  },
  modalText: {
    backgroundColor: '#3e04c3',
    height: '8%',
    flexDirection: 'row',
    justifyContent: 'flex-end',

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
  uploadText: {
    alignSelf: 'center',
    marginLeft: 10,
  },
  label: {
    marginLeft: '3%',
    marginTop: '10%',
    fontWeight: 'bold',
    color: '#000',
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
  inputTextMob: {
    borderBottomWidth: 1,
    width: '85%',
    marginLeft: '3%',
    height: 40,
  },
  offerPriceButton: {
    width: '40%',
    alignSelf: 'center',
    marginBottom: 40,
    marginTop: '20%',
  },
  contactImage: {
    width: 25,
    height: 25,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});
