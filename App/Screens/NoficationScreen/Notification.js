import React, {Component} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as StringC from '../../Assets/Constant/StringConstant';
import Styles from './NotificationStyle';
import Header from '../../Components/HeaderComponent/HeaderComponent';
import LowerHeader from '../../Components/LowerHeaderComponent/LowerHeaderComponent';

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }
  // For navigate
  // handleSelectionMultiples(id, getScreenRouteName) {
  //   this.props.navigation.navigation(getScreenRouteName);
  // }
  // For category list
  renderItem(item, getScreenRouteName) {
    return (
      <TouchableOpacity style={[Styles.listviewmain]}>
        <View style={Styles.listinnermain}>
          <Image style={Styles.imgstylelist} source={item.imgUrl} />
          <View style={Styles.locationmain}>
            <Text style={[Styles.renderText]}>{item.name}</Text>
            <Text style={Styles.renderTexttwo}>{item.textHeadOne}</Text>
            <Text style={Styles.hours}>{item.hours} hours ago</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  render() {
    const {navigation} = this.props;

    return (
      <View style={Styles.container}>
        {/* <ScrollView> */}
        <Header
          onToggle={() => this.props.navigation.toggleDrawer()}
          leftIcon={StringC.menuIcon}
          rightIcon={StringC.notifyicon}
          navigation={navigation}
        />
        <View style={Styles.lowermain}>
          <LowerHeader
            subTitle={StringC.notification}
            lefticon={'arrowleft'}
            leftIcononPress={StringC.REVIEW_SCREEN}
            navigation={navigation}
          />
          <FlatList
            showsVerticalScrollIndicator={false}
            style={Styles.flatListStyleSecond}
            data={[
              {
                id: '1',
                comment: '6',
                hours: '6',
                name: 'Jonny Takkar on reply:',
                imgUrl: require('../../Assets/Images/lap.jpg'),
                textHeadOne:
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
              },
              {
                id: '2',
                comment: '9',
                hours: '16',
                name: 'New follower: Lora manolia',
                imgUrl: require('../../Assets/Images/lap.jpg'),
                textHeadOne:
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
              },
              {
                id: '3',
                comment: '18',
                hours: '12',
                name: 'Karan Sexena on reply:',
                imgUrl: require('../../Assets/Images/lap.jpg'),
                textHeadOne:
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
              },
              {
                id: '4',
                comment: '15',
                hours: '10',
                name: 'Amit Liao on reply:',
                imgUrl: require('../../Assets/Images/lap.jpg'),
                textHeadOne:
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
              },
              {
                id: '5',
                comment: '16',
                hours: '8',
                name: 'New follower: Pater Sena',
                imgUrl: require('../../Assets/Images/lap.jpg'),
                textHeadOne:
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
              },
              {
                id: '6',
                comment: '4',
                hours: '6',
                name: 'New follower: Pamila Roy',
                imgUrl: require('../../Assets/Images/lap.jpg'),
                textHeadOne:
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
              },
              {
                id: '7',
                comment: '12',
                hours: '16',
                name: 'How To Learn Free Education',
                imgUrl: require('../../Assets/Images/lap.jpg'),
                textHeadOne:
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
              },
              {
                id: '8',
                comment: '4',
                hours: '4',
                name: 'How To Learn Free Education',
                imgUrl: require('../../Assets/Images/lap.jpg'),
                textHeadOne:
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
              },
            ]}
            renderItem={({item}) => this.renderItem(item)}
            keyExtractor={item => item.id}
          />
        </View>
        {/* </ScrollView> */}
      </View>
    );
  }
}

export default Notification;
