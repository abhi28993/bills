import React, {Component} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import * as StringC from '../../Assets/Constant/StringConstant';
import Styles from './ChatStyle';
import Header from '../../Components/HeaderComponent/HeaderComponent';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      popUp: true,
    };
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={Styles.container}>
        {/* <ScrollView> */}
        <Header
          onToggle={() => navigation.toggleModal()}
          leftIcon={StringC.menuIcon}
          rightIcon={StringC.notifyicon}
          navigation={navigation}
        />
        {/* <Modal
          animationType="fade"
          onRequestClose={() => this.triggerModal()}
          transparent={true}
          visible={this.state.popUp}> */}
        <View style={Styles.customHeight} />
        <View style={Styles.centeredView}>
          <View style={Styles.modalView}>
            <View style={Styles.pageMain}>
              <View style={Styles.iconsMain}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate(StringC.POST_TO_SCREEN, {
                      namee: StringC.LINK_POST_SCREEN,
                    })
                  }
                  style={Styles.iconMain}>
                  <Image source={require('../../Assets/Images/link.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate(StringC.POST_TO_SCREEN, {
                      namee: StringC.IMAGE_POST_SCREEN,
                    })
                  }
                  style={Styles.iconMain}>
                  <Image source={require('../../Assets/Images/image.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate(StringC.POST_TO_SCREEN, {
                      namee: StringC.VIDEO_POST_SCREEN,
                    })
                  }
                  style={Styles.iconMain}>
                  <Image source={require('../../Assets/Images/video.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate(StringC.POST_TO_SCREEN, {
                      namee: StringC.TEXT_POST_SCREEN,
                    })
                  }
                  style={Styles.iconMain}>
                  <Image source={require('../../Assets/Images/text.png')} />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate(StringC.HOME_SCREEN)}>
                <Icon
                  color="#000000"
                  name="close"
                  size={25}
                  style={Styles.crossIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* </Modal> */}
        {/* </ScrollView> */}
      </View>
    );
  }
}

export default Chat;
