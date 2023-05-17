import React, {Component} from 'react';
import {Text, View, TouchableOpacity, FlatList, Image} from 'react-native';
import Styles from './NewTrandingStyle';
import * as StringC from '../../Assets/Constant/StringConstant';
import Header from '../../Components/HeaderComponent/HeaderComponent';
import Icon from 'react-native-vector-icons/MaterialIcons';

class NewTranding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      radioValue: null,
    };
  }

  // for popular channel flatlist
  renderItems(item) {
    let data =
      item.mediakey === '1' ? (
        <Image style={Styles.mainImage} source={item.postdata} />
      ) : (
        <Text style={Styles.mainTextStyle}>{item.postdata}</Text>
      );
    const totalLike = item.like - item.disLike;
    return (
      <View>
        <View>
          <View style={Styles.mainInner}>
            <Image style={Styles.dpPic} source={item.profilePic} />
            <View style={Styles.headerMain}>
              <Text style={Styles.postName}>{item.name}</Text>
              <Text style={Styles.postNickName}>
                {item.nickName}-{item.time}
              </Text>
            </View>
            <Icon color="#2B2D42" name="more-vert" size={25} />
          </View>
          <View>
            <Text style={Styles.postTitle}>{item.title}</Text>
            {data}
          </View>
          <View style={Styles.iconsMain}>
            <View style={Styles.bottomMain}>
              <TouchableOpacity>
                <Image source={require('../../Assets/Icons/up.png')} />
              </TouchableOpacity>
              <Text>{totalLike}</Text>
              <TouchableOpacity>
                <Image source={require('../../Assets/Icons/down.png')} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={Styles.bottomMain}>
              <Image source={require('../../Assets/Images/comment.png')} />
              <Text>{item.comment}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.bottomMain}>
              <Image source={require('../../Assets/Images/share.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={Styles.bottomMain}>
              <Image source={require('../../Assets/Images/comment.png')} />
            </TouchableOpacity>
          </View>
        </View>
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
        <View style={Styles.pageMain}>
          <View>
            <Text style={Styles.newtext}>Trending Today</Text>
            <View style={Styles.pageMainOne}>
              <View style={Styles.mainUpper}>
                <Image
                  style={Styles.headerImage}
                  source={require('../../Assets/Images/lap.jpg')}
                />
                <View style={Styles.imageText}>
                  <Text style={Styles.forText}>Steve</Text>
                </View>
              </View>
              <View style={Styles.mainUpper}>
                <Image
                  style={Styles.headerImage}
                  source={require('../../Assets/Images/lap.jpg')}
                />
                <View style={Styles.imageText}>
                  <Text style={Styles.forText}>Education</Text>
                </View>
              </View>
              <View style={Styles.mainUpper}>
                <Image
                  style={Styles.headerImage}
                  source={require('../../Assets/Images/lap.jpg')}
                />
                <View style={Styles.imageText}>
                  <Text style={Styles.forText}>Book</Text>
                </View>
              </View>
            </View>
          </View>
          <Text style={Styles.newtext}>New</Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            style={Styles.flatCustom}
            data={[
              {
                id: '1',
                name: 'Lora Danel',
                postdata: require('../../Assets/Images/lap.jpg'),
                nickName: 'loral24',
                time: '3h',
                profilePic: require('../../Assets/Images/pic.png'),
                title: 'How to Learn Free Education',
                like: '5',
                disLike: '8',
                comment: '3',
                mediakey: '1',
              },
              {
                id: '2',
                name: 'Lex Friedman',
                postdata: StringC.loremText,
                nickName: 'loral24',
                time: '3h',
                profilePic: require('../../Assets/Images/pic.png'),
                title: 'How to Learn Free Education',
                like: '5',
                disLike: '8',
                comment: '3',
                mediakey: '2',
              },
              {
                id: '3',
                name: 'Joe Rogan',
                postdata: require('../../Assets/Images/lap.jpg'),
                nickName: 'loral24',
                time: '3h',
                profilePic: require('../../Assets/Images/pic.png'),
                title: 'How to Learn Free Education',
                like: '5',
                disLike: '8',
                comment: '3',
                mediakey: '1',
              },
              {
                id: '4',
                name: 'Jordan Peterson',
                postdata: StringC.loremText,
                nickName: 'loral24',
                time: '3h',
                profilePic: require('../../Assets/Images/pic.png'),
                title: 'How to Learn Free Education',
                like: '5',
                disLike: '8',
                comment: '3',
                mediakey: '2',
              },
              {
                id: '5',
                name: 'Breakfast Club',
                postdata: require('../../Assets/Images/lap.jpg'),
                nickName: 'loral24',
                time: '3h',
                profilePic: require('../../Assets/Images/pic.png'),
                title: 'How to Learn Free Education',
                like: '5',
                disLike: '8',
                comment: '3',
                mediakey: '1',
              },
              {
                id: '6',
                name: 'Lex Friedman',
                postdata: StringC.loremText,
                nickName: 'loral24',
                time: '3h',
                profilePic: require('../../Assets/Images/pic.png'),
                title: 'How to Learn Free Education',
                like: '5',
                disLike: '8',
                comment: '3',
                mediakey: '2',
              },
              {
                id: '7',
                name: 'Joe Rogan',
                postdata: require('../../Assets/Images/lap.jpg'),
                nickName: 'loral24',
                time: '3h',
                profilePic: require('../../Assets/Images/pic.png'),
                title: 'How to Learn Free Education',
                like: '5',
                disLike: '8',
                comment: '3',
                mediakey: '1',
              },
              {
                id: '8',
                name: 'Jordan Peterson',
                postdata: StringC.loremText,
                nickName: 'loral24',
                time: '3h',
                profilePic: require('../../Assets/Images/pic.png'),
                title: 'How to Learn Free Education',
                like: '5',
                disLike: '8',
                comment: '3',
                mediakey: '2',
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

export default NewTranding;
