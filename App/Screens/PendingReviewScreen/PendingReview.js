import React, {Component} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as StringC from '../../Assets/Constant/StringConstant';
import Styles from './PendingReviewStyle';
import Header from '../../Components/HeaderComponent/HeaderComponent';
import LowerHeader from '../../Components/LowerHeaderComponent/LowerHeaderComponent';

class PostTo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }
  // For navigate
  // handleSelectionMultiples(id, getScreenRouteName) {
  //   this.props.navigation.navigation(getScreenRouteName);
  // }
  // For category list
  renderItem(item) {
    return (
      <View style={[Styles.listviewmain]}>
        <View style={Styles.listinnermain}>
          <Image style={Styles.imgstylelist} source={item.imgUrl} />
          <View style={Styles.locationmain}>
            <Text style={[Styles.renderText]}>{item.name}</Text>
            <Text style={Styles.renderTexttwo}>{item.textHeadOne}</Text>
          </View>
        </View>
        <View style={Styles.itemMains}>
          <Text style={Styles.numberMain}>14 minutes ago</Text>
          <View style={Styles.messagemain}>
            <View style={Styles.rowMain}>
              <Text>{item.message}</Text>
            </View>
          </View>
          <View style={Styles.lowerMain}>
            <View style={Styles.customWidth} />
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate(StringC.COMMENT_REVIEW_SCREEN)
              }
              style={Styles.editButtonMain}>
              <Text style={Styles.editButtonText}>{StringC.Review}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  render() {
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
          <LowerHeader
            subTitle={StringC.comments}
            lefticon={'arrowleft'}
            leftIcononPress={StringC.REVIEW_SCREEN}
            navigation={navigation}
          />
          <Text style={Styles.numberMain}>8 most recent</Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            style={Styles.flatListStyleSecond}
            data={[
              {
                id: '1',
                comment: '6',
                review: '6',
                name: 'How To Learn Free Education',
                imgUrl: require('../../Assets/Images/lap.jpg'),
                textHeadOne:
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                message: StringC.bioLorem,
              },
              {
                id: '2',
                comment: '9',
                review: '16',
                name: 'How To Learn Free Education',
                imgUrl: require('../../Assets/Images/lap.jpg'),
                textHeadOne:
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                message: StringC.bioLorem,
              },
              {
                id: '3',
                comment: '18',
                review: '12',
                name: 'How To Learn Free Education',
                imgUrl: require('../../Assets/Images/lap.jpg'),
                textHeadOne:
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                message: StringC.bioLorem,
              },
              {
                id: '4',
                comment: '15',
                review: '10',
                name: 'How To Learn Free Education',
                imgUrl: require('../../Assets/Images/lap.jpg'),
                textHeadOne:
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                message: StringC.bioLorem,
              },
              {
                id: '5',
                comment: '16',
                review: '8',
                name: 'How To Learn Free Education',
                imgUrl: require('../../Assets/Images/lap.jpg'),
                textHeadOne:
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                message: StringC.bioLorem,
              },
              {
                id: '6',
                comment: '4',
                review: '6',
                name: 'How To Learn Free Education',
                imgUrl: require('../../Assets/Images/lap.jpg'),
                textHeadOne:
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                message: StringC.bioLorem,
              },
              {
                id: '7',
                comment: '12',
                review: '16',
                name: 'How To Learn Free Education',
                imgUrl: require('../../Assets/Images/lap.jpg'),
                textHeadOne:
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                message: StringC.bioLorem,
              },
              {
                id: '8',
                comment: '4',
                review: '4',
                name: 'How To Learn Free Education',
                imgUrl: require('../../Assets/Images/lap.jpg'),
                textHeadOne:
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                message: StringC.bioLorem,
              },
            ]}
            renderItem={({item}) => this.renderItem(item)}
            keyExtractor={item => item.id}
          />
        </View>
        {/* </ScrollView> */}
      </View>
    );
  }
}

export default PostTo;
