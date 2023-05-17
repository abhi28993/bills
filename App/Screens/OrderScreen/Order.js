import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// import {Svg, G, Path, Circle, Rect} from 'react-native-svg';
// import IconButtons from '../../Components/UI/IconButton';
import {getStatusWiseOrderCount} from '../../Services/orderService';
// import { Searchbar } from "react-native-paper";

const OrderScreen = ({props, navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const [statusObj, setStatusObj] = useState({
    pending: 0,
    accepted: 0,
    rejected: 0,
    packed: 0,
    shipped: 0,
    delivered: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getStatusWiseOrderCount()
      .then(resp => {
        console.log('get status========', resp.data.data);
        if (resp.data.data) {
          resp.data.data.forEach(element => {
            statusObj[element.status] = element.count;
          });
          setStatusObj({...statusObj});
          setLoading(false);
        }
      })
      .catch(err => console.log('==========', err));
  }, [setStatusObj]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  const newOrders = () => navigation.navigate();
  const acceptedOrders = () => navigation.navigate();
  const rejectedOrders = () => navigation.navigate();
  const packedOrders = () => navigation.navigate();
  const shippedOrders = () => navigation.navigate();
  const deliveredOrders = () => navigation.navigate();
  
  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}></View>
      <View style={styles.productCategories}>
        <View style={styles.productCategoriesContainer}>
          <TouchableOpacity
            style={styles.innerTextContainer}
            onPress={newOrders}>
            <Text> Icon</Text>
            <Text>New Orders</Text>
            <Text>{statusObj.pending}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.innerTextContainer}
            onPress={acceptedOrders}>
            <Text>Icon</Text>
            <Text>Accepted Orders</Text>
            <Text>{statusObj.accepted}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.productCategoriesContainer}>
          <TouchableOpacity
            style={styles.innerTextContainer}
            onPress={rejectedOrders}>
            <Text>Icon</Text>
            <Text>Rejected Orders</Text>
            <Text>{statusObj.rejected}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.innerTextContainer}
            onPress={packedOrders}>
            <Text>Icon</Text>
            <Text>Packed Orders</Text>
            <Text>{statusObj.packed}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.productCategoriesContainer}>
          <TouchableOpacity
            style={styles.innerTextContainer}
            onPress={shippedOrders}>
            <Text>Icon</Text>
            <Text>Shipped Orders</Text>
            <Text>{statusObj.shipped}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.innerTextContainer}
            onPress={deliveredOrders}>
            <Text>Icon</Text>
            <Text>Delivered Orders</Text>
            <Text>{statusObj.delivered}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// mainScreen.navigationOptions = () => ({
//   headerTitle: () => (
//     <View style={{flexDirection: 'row'}}>
//       <View style={{marginTop: '4%'}}>
//         <Svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="21.651"
//           height="17.961"
//           viewBox="0 0 21.651 17.961">
//           <G
//             id="Group_18254"
//             data-name="Group 18254"
//             transform="translate(-56.75 -55.75)">
//             <Path
//               id="Path_26"
//               data-name="Path 26"
//               d="M2192,109.266h8.955"
//               transform="translate(-2133.869 -52.266)"
//               fill="none"
//               stroke="#212121"
//               stroke-linecap="round"
//               stroke-width="2.5"
//             />
//             <Path
//               id="Path_27"
//               data-name="Path 27"
//               d="M2192,109.266h19.151"
//               transform="translate(-2134 -44.535)"
//               fill="none"
//               stroke="#212121"
//               stroke-linecap="round"
//               stroke-width="2.5"
//             />
//             <Path
//               id="Path_28"
//               data-name="Path 28"
//               d="M2192,109.266h10.218"
//               transform="translate(-2125.066 -36.805)"
//               fill="none"
//               stroke="#212121"
//               stroke-linecap="round"
//               stroke-width="2.5"
//             />
//           </G>
//         </Svg>
//       </View>
//       <View>
//         <Text
//           style={{
//             fontSize: 15,
//             marginTop: '14%',
//             // marginLeft: "4%",
//             fontWeight: 'bold',
//           }}>
//           ICL Connect
//         </Text>
//       </View>
//       {/* r */}
//     </View>
//   ),
// });

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
  },
  // searchCartContainer: {
  //   flexDirection: 'row',
  //   width: '100%',
  //   height: '8%',
  // },
  searchContainer: {
    marginTop: '5%',
    width: '70%',
    marginLeft: '10%',
    height: '100%',
  },
  cartContainers: {
    width: '100%',
    padding: '5%',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  search: {
    borderRadius: 10,
    height: '40%',
  },
  imageContainer: {
    width: '90%',
    height: '19%',
  },
  outerCart: {
    width: ' 90%',
    height: '36%',
  },
  innerCartContainer: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 5,
    marginLeft: '5%',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: '1%',
  },
  innerCart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '3%',
    marginBottom: '2%',
  },
  cartText: {
    marginLeft: '5%',
    marginTop: '3%',
    fontWeight: 'bold',
  },
  svgContainer: {
    marginLeft: '3%',
    width: '10%',
  },
  innerReport: {
    marginRight: '4%',
    fontWeight: 'bold',
  },
  innerReportText: {
    width: '32%',
  },
  innerReportBlur: {
    fontSize: 10,
    color: '#808080',
  },
  productCategories: {
    height: '70%',
  },
  productCategoriesText: {
    fontWeight: 'bold',
  },
  productCategoriesContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '30%',
    justifyContent: 'space-evenly',
    marginTop: '2%',
  },
  innerTextContainer: {
    width: '45%',
    backgroundColor: 'white',
    height: '100%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 10,
  },
  popularProducts: {
    width: '90%',
    height: '15%',
    marginLeft: '5%',
    marginTop: '10%',
  },
  popularProductsText: {
    fontWeight: 'bold',
  },
  popularImages: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainerPopular: {
    height: '90%',
    width: '40%',
    backgroundColor: 'white',
  },
  productCategorystyle: {
    marginTop: '5%',
  },
  // productCategoriesSVG: {
  //   marginTop: '5%',
  // },
});

export default OrderScreen;
