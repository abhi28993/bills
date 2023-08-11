import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, SafeAreaView} from 'react-native';
import {GlobalStyles} from '../../Assets/Colors/Color';
import * as StringC from '../../Assets/Constant/StringConstant';
import {getCategory} from '../../Services/categoryService';
import {useIsFocused} from '@react-navigation/native';


const Item = ({items:{name,_id},props}) => (
  <View style={styles.itemListContainer}>
    <Text onPress={()=>props.navigation.navigate(StringC.ADD_PRODUCT_SCREEN,{catId:_id})} style={styles.title}>{name}</Text>
  </View>
);

const CategoryList = props => {
  const [Category, setCategories] = useState([]);
  const isFocused = useIsFocused();

  const Load = () => {
      getCategory().then(resp=>{
        if (resp.data.data && resp.data.data.length) {
        setCategories([...resp.data.data]);
      }
      }).catch(err=>console.log(err))
  };

  useEffect(() => {
    Load();
  }, [setCategories, isFocused]);

  const renderItem = ({item}) => {
    return (
        <Item items={item} props={props}/>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cartContainers}>
        <Text
          style={styles.headerText}>
          Categories
        </Text>
        <Text
          style={{color: '#fff'}}
          onPress={() => props.navigation.navigate(StringC.ADD_CATEGORY_STACK)}>
          + Add
        </Text>
      </View>
      <FlatList
        data={Category}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        style={{ marginTop: "2%" }}
      />
    </SafeAreaView>
  );
};


export default CategoryList;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  headerText:{
    color: '#fff',
    flex: 1,
    fontSize: 19,
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  itemListContainer: {
    backgroundColor: '#fff',
    marginLeft:'2%',
    marginRight:'2%',
    marginBottom:"2%",
    // margin: '2%',
    padding: '3%',
    borderRadius: 10,
    shadowColor: '#000',
    elevation: 6,
  },
  title: {
    fontSize: 22,
    backgroundColor: 'white',
    width: '90%',
  },

  cartContainers: {
    width: '100%',
    padding: '3%',
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: 'row',
  },
  imageContainer: {
    width: '90%',
    height: '19%',
  },

  textInputStyle: {
    flexDirection: 'row',
    margin: '1%',
    height: 45,
    marginLeft: '4%',
    marginRight: '4%',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: GlobalStyles.colors.primary500,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  modalView: {
    backgroundColor: 'white',
    width: '100%',
    shadowOffset: {
      height: 5,
    },
    height: '60%',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginTop: '55%',
    borderRadius: 10,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    maxWidth: '40%',
    marginLeft: '30%',
    marginTop: '30%',
  },
  catalougeModal: {
    padding: 10,
    fontSize: 20,
    marginLeft: 5,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

