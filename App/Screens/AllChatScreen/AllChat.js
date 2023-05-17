import React, {Component} from 'react';
import {Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import Styles from './AllChatStyle';
import * as StringC from '../../Assets/Constant/StringConstant';
import Header from '../../Components/HeaderComponent/HeaderComponent';
import CustomSearch from '../../Components/SearchInputComponent/SearchInputComponent';
import Icon from 'react-native-vector-icons/Entypo';
import LowerHeader from '../../Components/LowerHeaderComponent/LowerHeaderComponent';

class AllChat extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      radioValue: null,
    };
  }
  //for display filter popup
  showFilter() {
    this.setState({modalVisible: true});
  }
  //for close filter popup
  closeFilter() {
    this.setState({modalVisible: false});
  }
  // for chatiing list
  renderItems(item) {
    return (
      <View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(StringC.SINGLE_CHAT_SCREEN)
          }>
          <View style={Styles.mainInner}>
            <Image style={Styles.dpPic} source={item.profilePic} />
            <View style={Styles.headerMain}>
              <Text style={Styles.postName}>{item.name}</Text>
              <Text style={Styles.postNickName}>{item.time}</Text>
            </View>
            <Icon color="green" name="dot-single" size={25} />
          </View>
        </TouchableOpacity>
        <View style={Styles.lineViewItem} />
      </View>
    );
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={Styles.container}>
        {/* <ScrollView> */}
        <Header
          onToggle={() => navigation.toggleDrawer()}
          leftIcon={StringC.menuIcon}
          rightIcon={StringC.notifyicon}
          navigation={navigation}
        />
        <LowerHeader
          subTitle={StringC.message}
          lefticon={'arrowleft'}
          navigation={navigation}
        />
        <CustomSearch
          placename={'Search'}
          iconSize={25}
          rightIconName={'search'}
        />
        <View style={Styles.pageMain}>
          <Text style={Styles.pageMainHeading}>{StringC.message}</Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            style={Styles.flatCustom}
            data={[
              {
                id: '1',
                name: 'Lora Danel',
                time: StringC.chatText,
                profilePic: require('../../Assets/Images/pic.png'),
              },
              {
                id: '2',
                name: 'Lex Friedman',
                time: StringC.chatText,
                profilePic: require('../../Assets/Images/pic.png'),
              },
              {
                id: '3',
                name: 'Joe Rogan',
                time: StringC.chatText,
                profilePic: require('../../Assets/Images/pic.png'),
              },
              {
                id: '4',
                name: 'Jordan Peterson',
                time: StringC.chatText,
                profilePic: require('../../Assets/Images/pic.png'),
              },
              {
                id: '5',
                name: 'Breakfast Club',
                time: StringC.chatText,
                profilePic: require('../../Assets/Images/pic.png'),
              },
              {
                id: '6',
                name: 'Lex Friedman',
                time: StringC.chatText,
                profilePic: require('../../Assets/Images/pic.png'),
              },
              {
                id: '7',
                name: 'Joe Rogan',
                time: StringC.chatText,
                profilePic: require('../../Assets/Images/pic.png'),
              },
              {
                id: '8',
                name: 'Jordan Peterson',
                time: StringC.chatText,
                profilePic: require('../../Assets/Images/pic.png'),
              },
              {
                id: '9',
                name: 'Lora Danel',
                time: StringC.chatText,
                profilePic: require('../../Assets/Images/pic.png'),
              },
              {
                id: '10',
                name: 'Lex Friedman',
                time: StringC.chatText,
                profilePic: require('../../Assets/Images/pic.png'),
              },
              {
                id: '11',
                name: 'Joe Rogan',
                time: StringC.chatText,
                profilePic: require('../../Assets/Images/pic.png'),
              },
              {
                id: '12',
                name: 'Jordan Peterson',
                time: StringC.chatText,
                profilePic: require('../../Assets/Images/pic.png'),
              },
              {
                id: '13',
                name: 'Lora Danel',
                time: StringC.chatText,
                profilePic: require('../../Assets/Images/pic.png'),
              },
              {
                id: '14',
                name: 'Lex Friedman',
                time: StringC.chatText,
                profilePic: require('../../Assets/Images/pic.png'),
              },
              {
                id: '15',
                name: 'Joe Rogan',
                time: StringC.chatText,
                profilePic: require('../../Assets/Images/pic.png'),
              },
              {
                id: '16',
                name: 'Jordan Peterson',
                time: StringC.chatText,
                profilePic: require('../../Assets/Images/pic.png'),
              },
            ]}
            renderItem={({item}) => this.renderItems(item)}
            keyExtractor={item => item.id}
          />
        </View>
        {/* </ScrollView> */}
      </View>
    );
  }
}

export default AllChat;
