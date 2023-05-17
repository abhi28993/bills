import React, {Component} from 'react';
import {
  Text,
  Modal,
  Image,
  View,
  Pressable,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import * as StringC from '../../Assets/Constant/StringConstant';
import Styles from './EditProfileStyle';
import Header from '../../Components/HeaderComponent/HeaderComponent';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {PermissionsAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Textarea from 'react-native-textarea';
import Custombtn from '../../Components/ButtonComponent/ButtonComponent';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      setImagePath: 'https://reactnative.dev/img/tiny_logo.png',
      setModalVisible: false,
      switchValue: false,
      switchValueTwo: false,
    };
  }
  // after save button click
  afterSubmit() {
    this.props.navigation.navigate(StringC.PROFILE_SCREEN);
  }
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
          <View>
            <TouchableOpacity
              onPress={() => this.setState({setModalVisible: true})}
              style={Styles.profilePicMain}>
              <Image
                style={Styles.profilePic}
                source={{uri: this.state.setImagePath}}
              />
              <Icon
                name="create"
                style={Styles.createIcon}
                size={35}
                color="#000"
              />
            </TouchableOpacity>
          </View>
          <View style={Styles.customMargin}>
            <View style={Styles.inputOuter}>
              <Icon
                name={'perm-identity'}
                style={Styles.leftIcon}
                size={25}
                color={'#828282'}
              />
              <TextInput
                placeholder="Display Name"
                style={Styles.inputSingle}
              />
            </View>
            <View style={Styles.linkMain}>
              <Textarea
                containerStyle={Styles.textareaContainer}
                style={Styles.linkInput}
                onChangeText={this.onChange}
                defaultValue={this.state.text}
                maxLength={300}
                placeholder={StringC.textareaBio}
                placeholderTextColor={'#828282'}
                underlineColorAndroid={'transparent'}
              />
            </View>
            <View style={Styles.customLine} />
            <Custombtn
              title={StringC.save}
              onPress={() => this.afterSubmit()}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Profile;
