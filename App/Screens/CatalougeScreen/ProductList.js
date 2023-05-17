import {useIsFocused} from '@react-navigation/native';
import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {View, Text, FlatList, StyleSheet, SafeAreaView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {GlobalStyles} from '../../Assets/Colors/Color';
import * as StringC from '../../Assets/Constant/StringConstant';
import {getProduct} from '../../Services/productService';

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const ProductList = props => {
  const [Products, setProducts] = useState([]);
  // console.log('props===================',props.route.params.catId);
  
  const isFocused = useIsFocused();
  useEffect(() => {
    if(props.route.params && props.route.params.catId){
    getProduct(props.route.params.catId)
    .then(resp => {
        console.log('product data ', resp.data.data);
        if (resp.data.data && resp.data.data.length) {
          setProducts([...resp.data.data]);
        }
      })
      .catch(err => console.log('err while fetching data'));}
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cartContainers}>
        <Text
          style={{
            color: '#fff',
            flex: 1,
            fontSize: 19,
            fontWeight: 'bold',
            fontStyle: 'normal',
          }}>
          Product
        </Text>
        <Text
          style={{color: '#fff'}}
          onPress={() => props.navigation.navigate(StringC.ADD_PRODUCT_STACK)}>
          + Add
        </Text>
      </View>
      <View style={styles.imageContainer}></View>
      <FlatList
        data={Products}
        renderItem={({item}) => (
          <TouchableOpacity>
            <Item title={item.name} />
          </TouchableOpacity>
        )}
        keyExtractor={item => item._id}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#fff',
    margin: '1%',
    padding: '3%',
    borderRadius: 10,
    shadowColor: '#00f',
    elevation: 5,
  },
  title: {
    fontSize: 22,
  },

  cartContainers: {
    width: '100%',
    padding: '4%',
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

export default ProductList;
