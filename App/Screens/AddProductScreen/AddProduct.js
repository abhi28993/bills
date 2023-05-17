import React, {useEffect, useState} from 'react';

import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
// import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent';
import {getCategory} from '../../Services/categoryService';
import {useIsFocused} from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';
import {createProduct} from '../../Services/productService';

const ProductPage = () => {
  const [product, setProduct] = useState({
    name: '',
    catId: '',
    price: '',
    offerPrice: [],
    varients: [],
    description: '',
  });
  const [cat, setCat] = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    load();
  }, [isFocused, setCat]);

  const load = async () => {
    try {
      let resp = await getCategory();

      if (resp.data && resp.data.data.length) {
        let data = resp.data.data;
        setCat([...data]);
        console.log(data, cat);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const changeHandlear = (key, value) => {
    product[key] = value;
    setProduct({...product});
  };

  const errorHandle = () => {
    if (product.name === '') {
      console.log('name is requied');
      return true;
    }
     else if (product.price === '') {
      console.log('price is requied');
      return true;
    }
    else if (product.catId==='')
    {
      console.log('Categories is requied')
      return true;
    }
  };
  const onSubmit = e => {
    e.preventDefault();
    if (errorHandle())
     return;
    createProduct(product)
      .then(response => {
        console.log('success', response.data.data);
      })
      .catch(err => {
        console.log('error', err);
      });
    console.log('product data===========>', product);
  };

  const dynamicChangeHandler = (type, index, key, value) => {
    product[type][index][key] = value;
    setProduct({...product});
  };

  const dynamicDelete = (type, index) => {
    product[type].splice(index, 1);
    setProduct({...product});
  };

  const addOffersPrices = () => {
    product.offerPrice.push({price: '', qty: ''});
    setProduct({...product});
  };

  const addVarients = () => {
    product.varients.push({color: '', size: ''});
    setProduct({...product});
  };

  return (
    <View style={styles.conatiner}>
      <ScrollView>
        <View style={styles.textContainer}>
          <TextInput
            placeholder="Product Name"
            value={product.name}
            vval={errorHandle}
            name="Add Catalouge"
            onChangeText={e => changeHandlear('name', e)}
          />
          <SelectDropdown
            data={cat}
            vval={errorHandle}
            onSelect={selectedItem => {
              changeHandlear('catId', selectedItem._id);
            }}
            rowTextForSelection={item => item.name}
            buttonTextAfterSelection={item => item.name}
          />
          <TextInput
            placeholder="Price"
            value={product.price}
            vval={errorHandle}
            name="price"
            onChangeText={e => changeHandlear('price', e)}
          />
          {product.offerPrice.map((offer, index) => {
            return (
              <View
                key={'offer' + index}
                style={{flexDirection: 'row', paddingLeft: 8}}>
                <TextInput
                  style={{flex: 1}}
                  placeholder="Discount Price"
                  value={offer.price}
                  name="Discount Price"
                  onChangeText={e =>
                    dynamicChangeHandler('offerPrice', index, 'price', e)
                  }
                />
                <TextInput
                  style={{flex: 1}}
                  placeholder="Product Unit"
                  value={offer.qty}
                  name="Product Unit"
                  onChangeText={e =>
                    dynamicChangeHandler('offerPrice', index, 'qty', e)
                  }
                />
                <Text
                  style={{flex: 1}}
                  onPress={() => dynamicDelete('offerPrice', index)}>
                  X
                </Text>
              </View>
            );
          })}
          <Button title="Add Offer prices" onPress={addOffersPrices} />

          {product.varients.map((varient, index) => {
            return (
              <View
                key={'varient' + index}
                style={{flexDirection: 'row', paddingLeft: 8}}>
                <TextInput
                  style={{flex: 1}}
                  placeholder="Color"
                  value={varient.color}
                  name="Color"
                  onChangeText={e =>
                    dynamicChangeHandler('varients', index, 'color', e)
                  }
                />
                <TextInput
                  style={{flex: 1}}
                  placeholder="Product Unit"
                  value={varient.size}
                  name="Product Unit"
                  onChangeText={e =>
                    dynamicChangeHandler('varients', index, 'size', e)
                  }
                />
                <Text
                  style={{flex: 1}}
                  onPress={() => dynamicDelete('varients', index)}>
                  X
                </Text>
              </View>
            );
          })}
          <Button title="Add Product Varients" onPress={addVarients} />

          <TextInput
            placeholder="Product Details"
            value={product.description}
            name="decription"
            onChangeText={e => changeHandlear('description', e)}
          />
        </View>
        <Button title="Add" onPress={onSubmit} />
      </ScrollView>
    </View>
  );
};
export default ProductPage;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  textContainer: {
    fontStyle: 'bold',
    //   backgroundColor:'red'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#5ead97',
  },
  buttonText: {
    padding: 10,
    width: 100,
    color: 'white',
    fontSize: 1,
  },
  offButton: {
    height: 10,
    width: 20,
    left: 30,
  },
});
