import React, {Component} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as StringC from '../../Assets/Constant/StringConstant';
import Styles from './PostToStyle';
import Header from '../../Components/HeaderComponent/HeaderComponent';
import Icon from 'react-native-vector-icons/Ionicons';

class PostTo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }
  // For navigate
  handleSelectionMultiples(id, getScreenRouteName) {
    this.props.navigation.navigation(getScreenRouteName);
  }
  // For category list
  renderItem(item, getScreenRouteName) {
    return (
      <TouchableOpacity
        style={[Styles.listviewmain]}
        onPress={() =>
          // this.handleSelectionMultiples(item.id, getScreenRouteName)
          this.props.navigation.navigate(getScreenRouteName)
        }>
        <View style={Styles.listinnermain}>
          <Image style={Styles.imgstylelist} source={item.imgUrl} />
          <View style={Styles.locationmain}>
            <Text style={[Styles.renderText]}>{item.name}</Text>
            <Text style={Styles.renderTexttwo}>{item.textHeadOne}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  render() {
    const getNavigationData = this.props.route.params;
    const getScreenRouteName = getNavigationData.namee;
    const {navigation} = this.props;
    return (
      <View style={Styles.container}>
        {/* <ScrollView> */}
        <Header
          onToggle={() => this.props.navigation.toggleDrawer()}
          leftIcon={StringC.menuIcon}
          rightIcon={StringC.notifyicon}
          navigation={navigation}
        />
        <View style={Styles.lowermain}>
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
              <Text style={Styles.textHeding}>{StringC.postTo}</Text>
            </View>
          </View>
          <View style={Styles.listinnermainn}>
            <Image
              style={Styles.imgstylelist}
              source={require('../../Assets/Images/pic.png')}
            />
            <View style={Styles.locationmain}>
              <Text style={[Styles.renderText]}>My Profile</Text>
            </View>
          </View>
          <FlatList
            style={Styles.flatListStyleSecond}
            data={[
              {
                id: '1',
                name: 'Lifeeducation',
                imgUrl: require('../../Assets/Images/pic.png'),
                textHeadOne: '12 online -  recently visited',
              },
              {
                id: '2',
                name: 'Lex Friedman',
                imgUrl: require('../../Assets/Images/pic.png'),
                textHeadOne: '12 online -  recently visited',
              },
              {
                id: '3',
                name: 'Joe Rogan',
                imgUrl: require('../../Assets/Images/pic.png'),
                textHeadOne: '12 online -  recently visited',
              },
              {
                id: '4',
                name: 'Jordan Peterson',
                imgUrl: require('../../Assets/Images/pic.png'),
                textHeadOne: '12 online -  recently visited',
              },
              {
                id: '5',
                name: 'Breakfast Club',
                imgUrl: require('../../Assets/Images/pic.png'),
                textHeadOne: '12 online -  recently visited',
              },
              {
                id: '6',
                name: 'Lex Friedman',
                imgUrl: require('../../Assets/Images/pic.png'),
                textHeadOne: '12 online -  recently visited',
              },
              {
                id: '7',
                name: 'Joe Rogan',
                imgUrl: require('../../Assets/Images/pic.png'),
                textHeadOne: 'Edureka',
              },
              {
                id: '8',
                name: 'Jordan Peterson',
                imgUrl: require('../../Assets/Images/pic.png'),
                textHeadOne: 'Edureka',
              },
            ]}
            renderItem={({item}) => this.renderItem(item, getScreenRouteName)}
            keyExtractor={item => item.id}
          />
        </View>
        {/* </ScrollView> */}
      </View>
    );
  }
}

export default PostTo;
