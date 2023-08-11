import React, {useCallback} from 'react';
import {useState} from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  RefreshControl,
} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

const NewOrder = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };
  // const OrderDetail = () => navigation.navigate('orderDetail');

  const DATA = [
    {
      id: '001012023',
      name: 'iphone 13',
      timing: 'Today, 10:10 AM',
      image: require('../../Assets/Images/slidetwo.png'),
      paymentMethod: 'COD',
      description: ' Hey i am using an Apple product',
    },
    {
      id: '004012023',
      name: 'iphone 14',
      timing: 'Today, 08:10 AM',
      image: require('../../Assets/Images/slidethree.png'),
      paymentMethod: 'COD',
      description:
        ' Iphone 14 !! Hey i am using an Apple product. Iphone 14 this is one of the best product ever',
    },
    {
      id: '101102023',
      name: 'iphone 15',
      timing: 'Today, 01:10 PM',
      image: require('../../Assets/Images/lap.jpg'),
      paymentMethod: 'Online',
      description:
        ' Iphone 15 !! Hey i am using an Apple product. Iphone 15 this is one of the best product ever',
      customerDetail: {
        cname: 'Abhishek Kumar',
        address: 'C-112/D flat no .8 ',
        location: 'Surya Nagar',
        landmark: 'Guru Dwara',
        phoneNumber: '+91 8076877163',
        city: 'Ghaziabad',
        pinCode: 201011,
        state: 'Uttar Pradesh',
      },
    },
    {
      id: '008012023',
      name: 'iphone 16',
      timing: 'Today, 03:10 PM',
      image: require('../../Assets/Images/slideone.png'),
      paymentMethod: 'Online',
      description:
        ' Iphone 16 !! Hey i am using an Apple product. Iphone 16 this is one of the best product ever',
      customerDetail: {
        cname: 'Anish Gupta',
        address: 'C-112/D LL ',
        location: 'Surya Nagar',
        landmark: 'Guru Dwara',
        phoneNumber: '+91 8076877163',
        city: 'Ghaziabad',
        pinCode: 201011,
        state: 'Uttar Pradesh',
      },
    },
    {
      id: '001112023',
      name: 'iphone 17',
      timing: 'Today, 05:50 PM',
      image: require('../../Assets/Images/slidethree.png'),
      paymentMethod: 'COD',
      description:
        ' Iphone 17 !! Hey i am using an Apple product. Iphone 17 this is one of the best product ever',
      customerDetail: {
        cname: 'Lalit Gupta',
        address: 'C-112/D LL ',
        location: 'Surya Nagar',
        landmark: 'Guru Dwara',
        phoneNumber: '+91 8076877163',
        city: 'Ghaziabad',
        pinCode: 201011,
        state: 'Uttar Pradesh',
      },
    },
    {
      id: '001212023',
      name: 'iphone 18',
      timing: 'Today, 05:50 PM',
      image: require('../../Assets/Images/slideone.png'),
      paymentMethod: 'COD',
      description:
        ' Iphone 18 !! Hey i am using an Apple product. Iphone 18 this is one of the best product ever',
        customerDetail: {
          cname: 'Jhon Doe',
          address: 'C-112/D LL ',
          location: 'Surya Nagar',
          landmark: 'Guru Dwara',
          phoneNumber: '+91 8076877163',
          city: 'Ghaziabad',
          pinCode: 201011,
          state: 'Uttar Pradesh',
        }
    },
    {
      id: '002512023',
      name: 'iphone 19',
      timing: 'Today, 05:50 PM',
      image: require('../../Assets/Images/slidetwo.png'),
      paymentMethod: 'COD',
      description:
        ' Iphone 19 !! Hey i am using an Apple product. Iphone 19 this is one of the best product ever',
        customerDetail: {
          cname: 'Vijay gupta',
          address: 'C-112/D LL ',
          location: 'Surya Nagar',
          landmark: 'Guru Dwara',
          phoneNumber: '+91 8076877163',
          city: 'Ghaziabad',
          pinCode: 201011,
          state: 'Uttar Pradesh',
        }
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View style={styles.outerContainer}>
        <View style={styles.statusContainer}>
          <Text style={styles.orderText}>Order #{item.id}</Text>
          <Text>{item.timing}</Text>
        </View>
        <View style={styles.statusContainers}>
          <View style={styles.statusInnerContainer}>
            <View style={styles.productContainer}>
              <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.image} />
              </View>
              <View>
                <Text>{item.name}</Text>
                <Text>{item.timing}</Text>
                <TouchableOpacity
                  style={styles.detailContainer}
                  onPress={toggleModal}>
                  <Text style={styles.detailsText}> More Details</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text>{item.paymentMethod}</Text>
            </View>
          </View>
        </View>

        <Modal visible={isVisible}  animationType="slide" transparent={false}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.modalText}>
                <TouchableOpacity
                  onPress={toggleModal}
                  style={styles.closeButton}>
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
                <Text style={styles.modalheadingText}>Order #112023</Text>
              </View>
              <ScrollView>
                {DATA.map((item, i) => (
                  <View key={i}>
                    <View style={styles.timeContainer}>
                      <Text>{item.timing}</Text>
                    </View>
                    {/* <View>
                      <Text>Request Online payment</Text>
                      <Text> </Text>
                    </View> */}
                    <View>
                      <Text>{item.description}</Text>
                    </View>
                    <View>
                      <Text>{item.customerDetail?.cname}</Text>
                    </View>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        // contentContainerStyle={{flexGrow: 0}}
      />
    </View>
  );
};

export default NewOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    textAlignVertical: 'center',
    alignItems: 'center',
    marginHorizontal: '5%',
  },
  closeButton: {
    marginHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  timeContainer: {
    justifyContent: 'flex-start',
    marginHorizontal: '5%',
  },
});
