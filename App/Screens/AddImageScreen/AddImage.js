import React, {Component} from 'react';
import {
  Text,
  Image,
  ImageBackground,
  View,
  TouchableOpacity,
  TextInput,
  Modal,
  FlatList,
  Pressable,
} from 'react-native';
import * as StringC from '../../Assets/Constant/StringConstant';
import Styles from './AddImageStyle';
import Header from '../../Components/HeaderComponent/HeaderComponent';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-crop-picker';

class AddPost extends Component {
  constructor() {
    super();
    this.state = {
      setModalVisible: false,
      title: '',
      links: '',
      selectedLinks: [],
      jsonData: [],
      avatarSource: '',
    };
  }
  // for select choose image popup
  displayPopup() {
    this.setState({setModalVisible: true});
  }
  // for select multiple image
  multipleImage() {
    this.setState({setModalVisible: false});
    ImagePicker.openPicker({
      multiple: true,
    }).then(images => {
      this.setState({
        avatarSource: images,
      });
    });
  }
  // for select image from camera
  openCameraImage() {
    this.setState({setModalVisible: false});
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      console.log('giiiiiii', this.state.avatarSource);
    });
  }
  // for remove selected images
  removeImage(image) {
    var avatarSource = [...this.state.avatarSource];
    if (avatarSource.includes(image)) {
      avatarSource = avatarSource.filter(_Link => _Link !== image);
    }
    this.setState({avatarSource: avatarSource});
  }
  renderItem(image) {
    return (
      <View style={Styles.flatMain}>
        <ImageBackground
          source={{uri: image.path}}
          style={Styles.backImageStyle}>
          <View style={Styles.iconMain}>
            <TouchableOpacity
              onPress={() => {
                this.removeImage(image);
              }}
              style={Styles.iconTouch}>
              <Icon color="#2B2D42" name="clear" size={15} />
            </TouchableOpacity>
          </View>
          <View style={Styles.middleImage}>
            <Image
              style={Styles.imageMain}
              source={require('../../Assets/Icons/photo.png')}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }

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
                  this.multipleImage();
                }}>
                <Text style={Styles.textStyle}>
                  {StringC.chooseFromGallery}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={Styles.buttonn}
                onPress={() => {
                  this.openCameraImage();
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
        {/* <ScrollView> */}
        <View style={Styles.mainScreen}>
          <View style={Styles.underHeader}>
            <Icon
              onPress={() =>
                this.props.navigation.navigate(StringC.POST_SCREEN)
              }
              color="#000000"
              name="close"
              size={25}
            />
            <View style={Styles.headMainText}>
              <Text style={Styles.textHeding}>{StringC.imagePost}</Text>
            </View>
            <TouchableOpacity>
              <Text style={Styles.miniHeadingText}>{StringC.post}</Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.customMain} />
          <View style={Styles.mainInner}>
            <Image
              style={Styles.dpPic}
              source={require('../../Assets/Images/pic.png')}
            />
            <View style={Styles.headerMain}>
              <Text style={Styles.postName}>John Dora</Text>
              <Text style={Styles.postNickName}>johnda-5h</Text>
            </View>
            <Icon color="#2B2D42" name="more-vert" size={25} />
          </View>
          <View style={Styles.inputMains} />
          <TextInput
            placeholder={StringC.title}
            onChangeText={text => this.setState({title: text})}
            style={Styles.titleInput}
          />
          <View style={Styles.customMain} />
          <TouchableOpacity
            onPress={() => this.displayPopup()}
            style={Styles.embdedTextMain}>
            <Text style={Styles.embdedText}>{StringC.imageEmbedPost}</Text>
          </TouchableOpacity>
          <View style={Styles.customMain} />
          {/* <View style={Styles.imgContainer}>
              {this.state.image ? this.renderAsset(this.state.image) : null}
              {this.state.avatarSource
                ? this.state.avatarSource.map(i => (
                    <View style={Styles.imgView} key={i.uri}>
                      {this.renderImage(i)}
                    </View>
                  ))
                : null}
            </View> */}
          {this.state.avatarSource ? (
            <FlatList
              extraData={this.state.avatarSource}
              showsVerticalScrollIndicator={false}
              style={Styles.flatListStyle}
              numColumns={2}
              data={this.state.avatarSource}
              renderItem={({item}) => this.renderItem(item)}
              keyExtractor={item => item}
            />
          ) : (
            <View />
          )}
        </View>
        {/* </ScrollView> */}
      </View>
    );
  }
}

export default AddPost;
