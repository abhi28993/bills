import {useIsFocused} from '@react-navigation/native';
import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {View, Text, FlatList, StyleSheet, SafeAreaView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {GlobalStyles} from '../../Assets/Colors/Color';
import * as StringC from '../../Assets/Constant/StringConstant';
import {getProduct} from '../../Services/productService';



const ProductList = props => {
  const [Products, setProducts] = useState([]);
  
  const isFocused = useIsFocused();
  useEffect(() => {
    getProduct(props.route.params?.catId||'')
    .then(resp => {
      console.log('resp product========',resp.data.data);
        if (resp.data.data && resp.data.data.length) {
          setProducts([...resp.data.data]);
        }else{
          setProducts([]);
        }
      })
      .catch(err => console.log('err while fetching data',err));
    // }
  }, [isFocused]);

  const renderItem = ({item}) => {
    return (
      <View style={styles.outerContainer}>
        <View style={styles.statusContainer}>
          <Text style={styles.orderText}>Order #{item.id}</Text>
          <Text>{item?.timing}</Text>
        </View>
        <View style={styles.statusContainers}>
          <View style={styles.statusInnerContainer}>
            <View style={styles.productContainer}>
              <View style={styles.imageContainer}>
                {/* <Image source={item} style={styles.image} /> */}
              </View>
              <View>
                <Text>{item?.name}</Text>
                <Text>{item?.timing}</Text>
                <TouchableOpacity style={styles.detailContainer}>
                  <Text style={styles.detailsText}> More Details</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text>{item?.paymentMethod}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

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
        renderItem={renderItem}
        keyExtractor={item => item._id}
        contentContainerStyle={{flexGrow: 0}}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  
  outerContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    elevation: 20,
    marginTop: '5%',
    marginLeft: '5%',
    width: '90%',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    padding: '3%',
  },
  statusContainers: {
    justifyContent: 'space-between',
    shadowColor: '#000',
    padding: '3%',
  },
  orderText: {
    fontWeight: 'bold',
    color: '#000',
  },
  statusInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productContainer: {
    flexDirection: 'row',
    height: '100%',
  },
  image: {
    width: 80,
    height: 70,
    resizeMode: 'cover',
  },
  imageContainer: {
    width: 100,
  },
  detailContainer: {
    borderWidth: 1,
    borderRadius: 2,
    elevation: 1,
    backgroundColor: '#c6affc',
  },
  detailsText: {
    fontWeight: '700',
    color: '#000',
  },
});

export default ProductList;
