import React, {Component} from 'react';
import {
  Text,
  Image,
  ScrollView,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import * as StringC from '../../Assets/Constant/StringConstant';
import Styles from './AddPostStyle';
import Header from '../../Components/HeaderComponent/HeaderComponent';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Textarea from 'react-native-textarea';

class AddPost extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      links: '',
      selectedLinks: [],
      jsonData: [],
    };
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={Styles.container}>
        <Header
          onToggle={() => navigation.toggleDrawer()}
          leftIcon={StringC.menuIcon}
          rightIcon={StringC.notifyicon}
          navigation={navigation}
        />
        <ScrollView>
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
                <Text style={Styles.textHeding}>{StringC.textPost}</Text>
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
            <View style={Styles.linkMain}>
              <Textarea
                containerStyle={Styles.textareaContainer}
                style={Styles.linkInput}
                onChangeText={this.onChange}
                defaultValue={this.state.text}
                maxLength={300}
                placeholder={StringC.textareaPlace}
                placeholderTextColor={'#c7c7c7'}
                underlineColorAndroid={'transparent'}
              />
            </View>
            <View style={Styles.customMain} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default AddPost;
