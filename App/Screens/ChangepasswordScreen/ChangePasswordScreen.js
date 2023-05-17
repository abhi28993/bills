import React, {Component} from 'react';
import {View, Text, Image, ImageBackground, Modal} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import * as StringC from '../../Assets/Constant/StringConstant';
import TextInputComponent from '../../Components/TextInputComponent/TextInputComponent';
import Styles from './ChangePasswordStyle';
import Custombtn from '../../Components/ButtonComponent/ButtonComponent';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      ispassFocused: false,
      ispassWidth: 1,
      isrepassFocused: false,
      isrepassWidth: 1,
      gotoNext: true,
      passwordValid: false,
      passwordError: '',
      rePasswordValid: false,
      rePasswordError: '',
      customStyle: '',
      password: '',
      rePassword: '',
      icEye: 'eye-with-line',
      icEyee: 'eye-with-line',
      showPassword: true,
      showRePassword: true,
      modalVisible: false,
    };
  }
  // for validate the login details and navigate
  afterSubmit() {
    if (this.state.password === '') {
      this.setState({
        passwordValid: true,
        ispassFocused: true,
        ispassWidth: 2,
        passwordError: StringC.passwordRequired,
      });
    } else {
      this.setState({
        passwordValid: false,
        gotonext: false,
        ispassFocused: false,
        ispassWidth: 1,
      });
    }
    if (this.state.rePassword === '') {
      this.setState({
        rePasswordValid: true,
        isrepassFocused: true,
        isrepassWidth: 2,
        rePasswordError: StringC.reValid,
      });
    } else if (this.state.password !== this.state.rePassword) {
      this.setState({
        rePasswordError: StringC.passwordMatch,
      });
    } else {
      this.setState({
        rePasswordValid: false,
        gotoNext: false,
        isrepassFocused: false,
        isrepassWidth: 1,
      });
    }
    if (
      this.state.password !== '' &&
      this.state.rePassword !== '' &&
      this.state.password === this.state.rePassword
    ) {
      this.setState({modalVisible: true});
    }
  }
  // for navigate to next screen
  goToNext() {
    this.setState({modalVisible: false});
    this.props.navigation.replace(StringC.LOGIN_SCREEN);
  }
  // show hide password on eye click
  changePwdType = () => {
    let newState;
    if (this.state.showPassword) {
      newState = {
        icEye: 'eye',
        showPassword: false,
      };
    } else {
      newState = {
        icEye: 'eye-with-line',
        showPassword: true,
      };
    }
    this.setState(newState);
  };
  // show hide re password on eye click
  changeRePwdType = () => {
    let newStateTwo;
    if (this.state.showRePassword) {
      newStateTwo = {
        icEyee: 'eye',
        showRePassword: false,
      };
    } else {
      newStateTwo = {
        icEyee: 'eye-with-line',
        showRePassword: true,
      };
    }
    this.setState(newStateTwo);
  };

  render() {
    return (
      <View style={Styles.container}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible({modalVisible: false});
          }}>
          <View style={Styles.centeredView}>
            <View style={Styles.modalView}>
              <View style={Styles.modalMain}>
                <Image source={require('../../Assets/Images/tick.png')} />
              </View>
              <View style={Styles.customHeight} />
              <Text style={Styles.subheading}>
                {StringC.changePasswordPopupContent}
              </Text>
              <View style={Styles.customHeight} />
              <Custombtn title={StringC.done} onPress={() => this.goToNext()} />
            </View>
          </View>
        </Modal>
        <ScrollView>
          <ImageBackground source={require('../../Assets/Images/golden.png')}>
            <Image
              style={Styles.logo}
              source={require('../../Assets/Images/logo.png')}
            />
          </ImageBackground>
          <View style={Styles.uppermain}>
            <View style={Styles.lowerMain}>
              <Text style={Styles.mainheading}>{StringC.changePassword}</Text>
              <Text style={Styles.subTexting}>
                {StringC.changePasswordText}
              </Text>
              <TextInputComponent
                fieldname={StringC.Password}
                placename={StringC.Password}
                vval={this.state.password}
                txtentry={this.state.showPassword}
                leftIconName="lock-outline"
                iconSize={18}
                onChngText={text => this.setState({password: text})}
                rightIconName={this.state.icEye}
                iconClick={() => this.changePwdType()}
                validd={
                  this.state.passwordValid ? this.state.passwordError : ''
                }
                borderColor={this.state.ispassFocused ? 'red' : '#C0C0C0'}
                widthh={this.state.ispassWidth}
              />
              <TextInputComponent
                fieldname={StringC.rePasswordvalue}
                placename={StringC.replacePassword}
                vval={this.state.rePassword}
                txtentry={this.state.showRePassword}
                leftIconName="lock-outline"
                iconSize={18}
                onChngText={text => this.setState({rePassword: text})}
                rightIconName={this.state.icEyee}
                iconClick={() => this.changeRePwdType()}
                validd={
                  this.state.rePasswordValid ? this.state.rePasswordError : ''
                }
                borderColor={this.state.isrepassFocused ? 'red' : '#C0C0C0'}
                widthh={this.state.isrepassWidth}
              />
              <Custombtn
                title={StringC.submit}
                onPress={() => this.afterSubmit()}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Login;
