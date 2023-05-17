import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image, Modal, Alert} from 'react-native';
import Styles from './AddCommentStyle';
import * as StringC from '../../Assets/Constant/StringConstant';
import Header from '../../Components/HeaderComponent/HeaderComponent';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Textarea from 'react-native-textarea';
import Custombtn from '../../Components/ButtonComponent/ButtonComponent';

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      radioValue: null,
    };
  }
  // go  to next screen after succesfully post comment
  goToNext() {
    this.setState({modalVisible: false});
    this.props.navigation.replace(StringC.HOME_SCREEN);
  }
  // after click on post botton
  afterSumit() {
    this.setState({modalVisible: true});
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={Styles.container}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            this.setModalVisible({modalVisible: false});
          }}>
          <View style={Styles.centeredView}>
            <View style={Styles.modalView}>
              <View style={Styles.modalMain}>
                <Image source={require('../../Assets/Images/tick.png')} />
              </View>
              <View style={Styles.customHeight} />
              <Text style={Styles.subheading}>{StringC.commentSuccess}</Text>
              <View style={Styles.customHeight} />
              <Custombtn title={StringC.done} onPress={() => this.goToNext()} />
            </View>
          </View>
        </Modal>
        {/* <ScrollView> */}
        <Header
          onToggle={() => navigation.toggleDrawer()}
          leftIcon={StringC.menuIcon}
          rightIcon={StringC.notifyicon}
          navigation={navigation}
        />
        <View style={Styles.pageMain}>
          <View>
            <View style={Styles.underHeader}>
              <Icon
                onPress={() => this.props.navigation.goBack()}
                color="#000000"
                name="close"
                size={25}
              />
              <View style={Styles.headMainText}>
                <Text style={Styles.textHeding}>{StringC.addcomment}</Text>
              </View>
              <TouchableOpacity onPress={() => this.afterSumit()}>
                <Text style={Styles.miniHeadingText}>{StringC.post}</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={Styles.postTitle}>How To Learn Free Education</Text>
              <Image
                style={Styles.mainImage}
                source={require('../../Assets/Images/lap.jpg')}
              />
            </View>
            <View style={Styles.iconsMain}>
              <View style={Styles.bottomMain}>
                <TouchableOpacity>
                  <Image source={require('../../Assets/Icons/up.png')} />
                </TouchableOpacity>
                <Text>8</Text>
                <TouchableOpacity>
                  <Image source={require('../../Assets/Icons/down.png')} />
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={Styles.bottomMain}>
                <Image source={require('../../Assets/Images/comment.png')} />
                <Text>3</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Styles.bottomMain}>
                <Image source={require('../../Assets/Images/share.png')} />
              </TouchableOpacity>
              <TouchableOpacity style={Styles.bottomMain}>
                <Image source={require('../../Assets/Images/comment.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* </ScrollView> */}
        <View style={Styles.textAreaMain}>
          <Image source={require('../../Assets/Images/pic.png')} />
          <View style={Styles.textAreaView}>
            <Textarea
              containerStyle={Styles.textareaContainer}
              style={Styles.linkInput}
              onChangeText={this.onChange}
              defaultValue={this.state.text}
              maxLength={300}
              placeholder={StringC.textareaPlace}
              placeholderTextColor={'#828282'}
              underlineColorAndroid={'transparent'}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default AddComment;
