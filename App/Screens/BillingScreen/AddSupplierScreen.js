import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import RadioButton from '../../Components/RadioButtonComponent/RadioButton';
import {GlobalStyles} from '../../Assets/Colors/Color';
import {useState} from 'react';

const AddSupplierScreen = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      <View style={styles.accessContainer}>
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
  );
};

export default AddSupplierScreen;

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
  offerPriceButton: {
    width: '40%',
    alignSelf: 'center',
    marginBottom: 40,
    marginTop: '20%',
  },
});
