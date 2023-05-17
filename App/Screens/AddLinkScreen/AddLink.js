import React, {Component} from 'react';
import {Text, Image, View, TouchableOpacity, TextInput} from 'react-native';
import * as StringC from '../../Assets/Constant/StringConstant';
import Styles from './AddLinkStyle';
import Header from '../../Components/HeaderComponent/HeaderComponent';
import MainIcon from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
  // for handle multiple links
  handleSelectionMultiple = id => {
    var selectedLinks = [...this.state.selectedLinks];
    let Link = this.state.links;
    if (selectedLinks.includes(Link)) {
      // selectedLinks = selectedLinks.filter(_Link => _Link !== Link);
    } else {
      selectedLinks.push(Link);
    }
    let jsonObj = {};
    for (let i = 0; i < selectedLinks.length; i++) {
      jsonObj['position' + (i + 1)] = selectedLinks[i];
      jsonObj['id' + (i + 1)] += selectedLinks[i];
    }
    this.setState({selectedLinks});
    console.log(selectedLinks);
    this.setState({jsonData: jsonObj});
  };
  // remove added link
  removeLink(Link) {
    var selectedLinks = [...this.state.selectedLinks];
    if (selectedLinks.includes(Link.item)) {
      selectedLinks = selectedLinks.filter(_Link => _Link !== Link.item);
    }
    this.setState({selectedLinks});
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
              <Text style={Styles.textHeding}>{StringC.linkPost}</Text>
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
            placeholder="Title"
            onChangeText={text => this.setState({title: text})}
            style={Styles.titleInput}
          />
          <View style={Styles.customMain} />
          <View style={Styles.linkMain}>
            <TextInput
              placeholder="link here"
              onChangeText={text => this.setState({links: text})}
              style={Styles.linkInput}
            />
            <Icon
              onPress={() => this.handleSelectionMultiple()}
              color="#A82424"
              name="add"
              size={25}
            />
          </View>
          <View style={Styles.customMain} />
          {this.state.selectedLinks.map(item => {
            return (
              <View style={Styles.listMain}>
                <View style={Styles.listLeftIcon}>
                  <MainIcon name="link" size={25} color="#2B2D42" />
                </View>
                <View style={Styles.listText}>
                  <Text>{item}</Text>
                </View>
                <View style={Styles.rightIcon}>
                  <MainIcon
                    onPress={() => this.removeLink({item})}
                    name="cross"
                    size={15}
                    color="#fff"
                  />
                </View>
              </View>
            );
          })}
        </View>
        {/* </ScrollView> */}
      </View>
    );
  }
}

export default AddPost;
