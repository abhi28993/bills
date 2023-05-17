import React from 'react';
import {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent';
import {createCategory} from '../../Services/categoryService';
import * as StringC from '../../Assets/Constant/StringConstant';


const AddCategory = props => {
  const [catName, setCatName] = useState('');

  const changeHandlear = e => {
    setCatName(e);
  };

  const onSubmit = () => {
    console.log('categort name==========', catName);
    createCategory({name: catName})
      .then(resp => {
        props.navigation.navigate(StringC.ADD_CATALOUGE_SCREEN);
        console.log('successfully added', resp);
      })
      .catch(err => {
        console.log('error while creating catalouge', err);
      });
  };
  return (
    <View style={styles.conatiner}>
      <Text style={styles.textContainer}>Add Catagory</Text>
      <TextInput
        placeholder="Add catalouge"
        value={catName}
        name="Add Catalouge"
        onChangeText={changeHandlear}
      />
      <ButtonComponent title="Add" onPress={onSubmit} />
    </View>
  );
};

export default AddCategory;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  textContainer: {
    fontStyle: 'bold',
  },
});
