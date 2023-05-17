import React, {Component} from 'react';
import {
  Text,
  Modal,
  Image,
  View,
  Pressable,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import * as StringC from '../../Assets/Constant/StringConstant';
import Styles from './OtherProfileStyle';
import Header from '../../Components/HeaderComponent/HeaderComponent';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {PermissionsAndroid} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import MainIcon from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ProgressBarAnimated from 'react-native-progress-bar-animated';

class OtherProfile extends Component {
  constructor() {
    super();
    this.state = {
      setImagePath: 'https://reactnative.dev/img/tiny_logo.png',
      setModalVisible: false,
      customSelectedIndex: 0,
      selectedIds: [],
      backgroundColor: '',
      progress: 20,
    };
  }
  // for category tab flatlist
  handleSelectionMultiple = id => {
    var selectedIds = [...this.state.selectedIds]; // clone state

    if (selectedIds.includes(id)) {
      selectedIds = selectedIds.filter(_id => _id !== id);
    } else {
      selectedIds.push(id);
    }
    this.setState({selectedIds});
    console.log(selectedIds);
  };
  // for Profile tab flatlist
  profileItems(item) {
    return (
      <View>
        <View>
          <View style={Styles.mainInnerFlat}>
            <Image style={Styles.dpPic} source={item.profilePic} />
            <View style={Styles.headerMain}>
              <Text style={Styles.postName}>{item.name}</Text>
            </View>
            <Icon color="#2B2D42" name="more-vert" size={25} />
          </View>
          <View>
            <Image style={Styles.mainImage} source={item.postdata} />
          </View>
          <View style={Styles.iconsMain}>
            <View style={Styles.belowImageMain}>
              <Text style={Styles.belowMainText}>{item.titleBelow}</Text>
              <Text style={Styles.dateText}>{item.datee}</Text>
            </View>
            <View>
              <Image source={require('../../Assets/Images/bookmark.png')} />
            </View>
          </View>
        </View>
        <View style={Styles.lineViewItem} />
      </View>
    );
  }
  // for Profile tab flatlist
  progressItems(item) {
    const barWidth = 300;
    return (
      <View style={Styles.customMargin}>
        <View style={Styles.progressMain}>
          <View style={Styles.progressRow}>
            <Text style={Styles.hoursMainText}>{item.name}</Text>
            <Text style={Styles.hoursRenderText}>{item.hours}/hrs</Text>
          </View>
          <ProgressBarAnimated
            width={barWidth}
            value={item.barvalue}
            backgroundColorOnComplete="#6CC644"
            backgroundColor={item.back}
          />
        </View>
      </View>
    );
  }
  // for science flatlist
  renderItem(item) {
    let backgroundColor = this.state.selectedIds.includes(item.value)
      ? '#8290f5'
      : '#E6E9FF';

    return (
      <View style={Styles.renderMain}>
        <TouchableOpacity
          style={[Styles.renderInner, {backgroundColor: backgroundColor}]}
          onPress={() => this.handleSelectionMultiple(item.value)}>
          <Text style={Styles.flattext}>{item.label}</Text>
        </TouchableOpacity>
      </View>
    );
  }
  // for update segments
  updateCustomSegment = index => {
    this.setState({customSelectedIndex: index});
  };
  // for choose file
  selectFile = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose file from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    //for launch image library
    launchImageLibrary(options, res => {
      console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
      } else {
        let source = res.assets[0].uri;
        this.setState({setImagePath: source});
        this.setState({setModalVisible: false});
      }
    });
  };
  //for reuqest camera permission
  requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        var options = {
          title: 'Select Image',
          customButtons: [
            {
              name: 'customOptionKey',
              title: 'Choose file from Custom Option',
            },
          ],
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };
        // for launch camera
        launchCamera(options, res => {
          console.log('Response = ', res);
          if (res.didCancel) {
            console.log('User cancelled image picker');
          } else if (res.error) {
            console.log('ImagePicker Error: ', res.error);
          } else if (res.customButton) {
            console.log('User tapped custom button: ', res.customButton);
          } else {
            //    const source = { uri: res.uri };
            console.log('response', JSON.stringify(res));
            let source = res.assets[0].uri;
            this.setState({setImagePath: source});
            this.setState({setModalVisible: false});
          }
        });
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  render() {
    const {navigation} = this.props;
    return (
      <View style={Styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.setModalVisible}>
          <View style={Styles.centeredView}>
            <View style={Styles.modalView}>
              <TouchableOpacity
                style={Styles.buttonn}
                onPress={() => {
                  this.selectFile();
                }}>
                <Text style={Styles.textStyle}>
                  {StringC.chooseFromGallery}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={Styles.buttonn}
                onPress={() => {
                  this.requestCameraPermission();
                }}>
                <Text style={Styles.textStyle}>{StringC.openCamera}</Text>
              </TouchableOpacity>
              <Pressable
                style={Styles.buttonn}
                onPress={() => this.setState({setModalVisible: false})}>
                <Text style={Styles.textStyle}>{StringC.close}</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Header
          onToggle={() => navigation.toggleDrawer()}
          leftIcon={StringC.menuIcon}
          rightIcon={StringC.notifyicon}
          navigation={navigation}
        />
        <View style={Styles.upperMain}>
          <View style={Styles.upperMainInner}>
            <TouchableOpacity
              onPress={() => this.setState({setModalVisible: true})}
              style={Styles.profilePicMain}>
              <Image
                style={Styles.profilePic}
                source={{uri: this.state.setImagePath}}
              />
            </TouchableOpacity>
            <Icon
              name="create"
              style={Styles.createIcon}
              size={35}
              color="#000"
            />
            <View style={Styles.mainName}>
              <Text style={Styles.mainNameText}>{StringC.conrad}</Text>
              <Text style={Styles.shortText}>{StringC.conarchtaycon}</Text>
            </View>
            <View style={Styles.headerRigthMain}>
              <View style={Styles.dollarMain}>
                <Image source={require('../../Assets/Images/dollar.png')} />
                <View style={Styles.marginFromLeft}>
                  <Text style={Styles.shortText}>{StringC.balanceEarn}</Text>
                  <Text style={Styles.PtText}>{StringC.points}</Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate(StringC.EDIT_PROFILE_SCREEN)
                }
                style={Styles.editBtnMain}>
                <Text style={Styles.editBtnText}>{StringC.editProfile}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={Styles.hoursText}>{StringC.totalHours}</Text>
          <View style={Styles.bioMain}>
            <Text style={Styles.bioMainHead}>{StringC.biography}</Text>
            <Text style={Styles.bioMainText}>{StringC.bioLorem}</Text>
          </View>
          <SegmentedControlTab
            borderRadius={10}
            borderColor="#707070"
            values={['Category', 'Profile', 'Hours', 'Saved Posts']}
            selectedIndex={this.state.customSelectedIndex}
            onTabPress={this.updateCustomSegment}
            tabsContainerStyle={Styles.tabsContainerStyle}
            tabStyle={Styles.tabStyle}
            firstTabStyle={Styles.firstTabStyle}
            lastTabStyle={Styles.lastTabStyle}
            activeTabStyle={Styles.activeTabStyle}
            tabTextStyle={Styles.tabTextStyle}
            activeTabTextStyle={Styles.activeTabText}
          />
          {this.state.customSelectedIndex === 0 && (
            <View style={Styles.customtabMain}>
              <TouchableOpacity style={Styles.subjectMain}>
                <MainIcon name="link" size={15} color="#fff" />
                <Text style={Styles.subjectText}>{StringC.science}</Text>
              </TouchableOpacity>
              <FlatList
                extraData={this.state.selectedIds}
                showsVerticalScrollIndicator={false}
                style={Styles.flatListStyle}
                numColumns={3}
                data={[
                  {label: 'Physics', value: '1'},
                  {label: 'Chemistry', value: '2'},
                  {label: 'Modern Science', value: '3'},
                  {label: 'Older Science', value: '4'},
                  {label: 'Biology', value: '5'},
                ]}
                renderItem={({item}) => this.renderItem(item)}
                keyExtractor={item => item.value}
              />
              <View style={Styles.mainBottom}>
                <TouchableOpacity style={Styles.bottomBtn}>
                  <MainIcon
                    style={Styles.hearticon}
                    name={StringC.chat}
                    size={18}
                    color="#fff"
                  />
                  <Text style={Styles.bottomBtntext}>
                    {StringC.conversation}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.bottomBtn}>
                  <MainIcon
                    style={Styles.hearticon}
                    name="500px"
                    size={18}
                    color="#fff"
                  />
                  <Text style={Styles.bottomBtntext}>{StringC.athletic}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.bottomBtn}>
                  <MainIcon
                    style={Styles.hearticon}
                    name="database"
                    size={18}
                    color="#fff"
                  />
                  <Text style={Styles.bottomBtntext}>{StringC.medicine}</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          {this.state.customSelectedIndex === 1 && (
            <View style={Styles.customtabMain}>
              <FlatList
                showsVerticalScrollIndicator={false}
                style={Styles.flatCustom}
                data={[
                  {
                    id: '1',
                    name: 'Lora Danel',
                    postdata: require('../../Assets/Images/lap.jpg'),
                    nickName: 'loral24',
                    profilePic: require('../../Assets/Images/pic.png'),
                    titleBelow: StringC.lorem,
                    datee: 'Sep 21, 2021',
                    mediakey: '1',
                  },
                  {
                    id: '2',
                    name: 'Lex Friedman',
                    postdata: require('../../Assets/Images/lap.jpg'),
                    nickName: 'loral24',
                    profilePic: require('../../Assets/Images/pic.png'),
                    titleBelow: StringC.lorem,
                    datee: 'Sep 21, 2021',
                    mediakey: '2',
                  },
                  {
                    id: '3',
                    name: 'Joe Rogan',
                    postdata: require('../../Assets/Images/lap.jpg'),
                    nickName: 'loral24',
                    profilePic: require('../../Assets/Images/pic.png'),
                    titleBelow: StringC.lorem,
                    datee: 'Sep 21, 2021',
                    mediakey: '1',
                  },
                  {
                    id: '4',
                    name: 'Jordan Peterson',
                    postdata: require('../../Assets/Images/lap.jpg'),
                    nickName: 'loral24',
                    profilePic: require('../../Assets/Images/pic.png'),
                    titleBelow: StringC.lorem,
                    datee: 'Sep 21, 2021',
                    mediakey: '2',
                  },
                  {
                    id: '5',
                    name: 'Breakfast Club',
                    postdata: require('../../Assets/Images/lap.jpg'),
                    nickName: 'loral24',
                    profilePic: require('../../Assets/Images/pic.png'),
                    titleBelow: StringC.lorem,
                    datee: 'Sep 21, 2021',
                    mediakey: '1',
                  },
                  {
                    id: '6',
                    name: 'Lex Friedman',
                    postdata: require('../../Assets/Images/lap.jpg'),
                    nickName: 'loral24',
                    profilePic: require('../../Assets/Images/pic.png'),
                    titleBelow: StringC.lorem,
                    datee: 'Sep 21, 2021',
                    mediakey: '2',
                  },
                  {
                    id: '7',
                    name: 'Joe Rogan',
                    postdata: require('../../Assets/Images/lap.jpg'),
                    nickName: 'loral24',
                    profilePic: require('../../Assets/Images/pic.png'),
                    titleBelow: StringC.lorem,
                    datee: 'Sep 21, 2021',
                    mediakey: '1',
                  },
                  {
                    id: '8',
                    name: 'Jordan Peterson',
                    postdata: require('../../Assets/Images/lap.jpg'),
                    nickName: 'loral24',
                    profilePic: require('../../Assets/Images/pic.png'),
                    titleBelow: StringC.lorem,
                    datee: 'Sep 21, 2021',
                    mediakey: '2',
                  },
                ]}
                renderItem={({item}) => this.profileItems(item)}
                keyExtractor={item => item.id}
              />
            </View>
          )}
          {this.state.customSelectedIndex === 2 && (
            <View style={Styles.customtabMain}>
              <Text style={Styles.hoursHeading}>Hours Spend</Text>
              <FlatList
                showsVerticalScrollIndicator={false}
                style={Styles.flatCustom}
                data={[
                  {
                    id: '1',
                    name: 'Economic Video',
                    hours: '3.45',
                    barvalue: 40,
                    backkkk: '#2E9054',
                  },
                  {
                    id: '2',
                    name: 'School Education',
                    hours: '28',
                    barvalue: 20,
                    back: '#A82424',
                  },
                  {
                    id: '3',
                    name: 'Mind Thinker',
                    hours: '90',
                    barvalue: 30,
                    back: '#FFBC6E',
                  },
                  {
                    id: '4',
                    name: 'Art & Design',
                    hours: '90',
                    barvalue: 35,
                    back: '#2B2D42',
                  },
                  {
                    id: '5',
                    name: 'Economic Video',
                    hours: '3.45',
                    barvalue: 45,
                    back: '#2E9054',
                  },
                  {
                    id: '6',
                    name: 'School Education',
                    hours: '28',
                    barvalue: 20,
                    back: '#A82424',
                  },
                  {
                    id: '7',
                    name: 'Art & Design',
                    hours: '90',
                    barvalue: 50,
                    back: '#FFBC6E',
                  },
                  {
                    id: '8',
                    name: 'Art & Design',
                    hours: '90',
                    barvalue: 60,
                    back: '#2B2D42',
                  },
                ]}
                renderItem={({item}) => this.progressItems(item)}
                keyExtractor={item => item.id}
              />
            </View>
          )}
          {this.state.customSelectedIndex === 3 && (
            <View style={Styles.customtabMain}>
              <FlatList
                showsVerticalScrollIndicator={false}
                style={Styles.flatCustom}
                data={[
                  {
                    id: '1',
                    name: 'Lora Danel',
                    postdata: require('../../Assets/Images/lap.jpg'),
                    nickName: 'loral24',
                    profilePic: require('../../Assets/Images/pic.png'),
                    titleBelow: StringC.lorem,
                    datee: 'Sep 21, 2021',
                    mediakey: '1',
                  },
                  {
                    id: '2',
                    name: 'Lex Friedman',
                    postdata: require('../../Assets/Images/lap.jpg'),
                    nickName: 'loral24',
                    profilePic: require('../../Assets/Images/pic.png'),
                    titleBelow: StringC.lorem,
                    datee: 'Sep 21, 2021',
                    mediakey: '2',
                  },
                  {
                    id: '3',
                    name: 'Joe Rogan',
                    postdata: require('../../Assets/Images/lap.jpg'),
                    nickName: 'loral24',
                    profilePic: require('../../Assets/Images/pic.png'),
                    titleBelow: StringC.lorem,
                    datee: 'Sep 21, 2021',
                    mediakey: '1',
                  },
                  {
                    id: '4',
                    name: 'Jordan Peterson',
                    postdata: require('../../Assets/Images/lap.jpg'),
                    nickName: 'loral24',
                    profilePic: require('../../Assets/Images/pic.png'),
                    titleBelow: StringC.lorem,
                    datee: 'Sep 21, 2021',
                    mediakey: '2',
                  },
                  {
                    id: '5',
                    name: 'Breakfast Club',
                    postdata: require('../../Assets/Images/lap.jpg'),
                    nickName: 'loral24',
                    profilePic: require('../../Assets/Images/pic.png'),
                    titleBelow: StringC.lorem,
                    datee: 'Sep 21, 2021',
                    mediakey: '1',
                  },
                  {
                    id: '6',
                    name: 'Lex Friedman',
                    postdata: require('../../Assets/Images/lap.jpg'),
                    nickName: 'loral24',
                    profilePic: require('../../Assets/Images/pic.png'),
                    titleBelow: StringC.lorem,
                    datee: 'Sep 21, 2021',
                    mediakey: '2',
                  },
                  {
                    id: '7',
                    name: 'Joe Rogan',
                    postdata: require('../../Assets/Images/lap.jpg'),
                    nickName: 'loral24',
                    profilePic: require('../../Assets/Images/pic.png'),
                    titleBelow: StringC.lorem,
                    datee: 'Sep 21, 2021',
                    mediakey: '1',
                  },
                  {
                    id: '8',
                    name: 'Jordan Peterson',
                    postdata: require('../../Assets/Images/lap.jpg'),
                    nickName: 'loral24',
                    profilePic: require('../../Assets/Images/pic.png'),
                    titleBelow: StringC.lorem,
                    datee: 'Sep 21, 2021',
                    mediakey: '2',
                  },
                ]}
                renderItem={({item}) => this.profileItems(item)}
                keyExtractor={item => item.id}
              />
            </View>
          )}
        </View>
      </View>
    );
  }
}

export default OtherProfile;
