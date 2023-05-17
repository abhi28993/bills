import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as StringC from '../../Assets/Constant/StringConstant';
import Styles from './CommentListStyle';
import Header from '../../Components/HeaderComponent/HeaderComponent';
import LowerHeader from '../../Components/LowerHeaderComponent/LowerHeaderComponent';

class CommentList extends Component {
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
    let num = '15%';
    let paddingg =
      item.userId === '1' ? (
        <View style={[Styles.messagemain, {marginLeft: num}]}>
          <View style={Styles.rowMain}>
            <Text>{item.message}</Text>
          </View>
        </View>
      ) : (
        <View style={[Styles.messagemain, {marginRight: num}]}>
          <View style={Styles.rowMain}>
            <Text>{item.message}</Text>
          </View>
        </View>
      );
    let lowerMainn =
      item.userId === '1' ? (
        <View />
      ) : (
        <View style={Styles.lowerMain}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate(StringC.ADD_COMMENT_SCREEN)
            }
            style={Styles.editButtonMain}>
            <Text style={Styles.editButtonText}>{StringC.edit}</Text>
          </TouchableOpacity>
          <View style={Styles.customWidth} />
          <TouchableOpacity style={Styles.editReviewMain}>
            <Text style={Styles.rvText}>{item.review}</Text>
          </TouchableOpacity>
        </View>
      );
    return (
      <View style={[Styles.listviewmain]}>
        <View style={Styles.itemMains}>
          <Text style={Styles.numberMain}>{item.minute} minutes ago</Text>
          {paddingg}
          {lowerMainn}
        </View>
      </View>
    );
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={Styles.container}>
        <Header
          onToggle={() => this.props.navigation.toggleDrawer()}
          leftIcon={StringC.menuIcon}
          rightIcon={StringC.notifyicon}
          navigation={navigation}
        />
        <View style={Styles.lowermain}>
          <LowerHeader
            subTitle={StringC.addcomment}
            lefticon={'arrowleft'}
            leftIcononPress={'Review'}
            navigation={navigation}
          />
          <FlatList
            showsVerticalScrollIndicator={false}
            style={Styles.flatListStyleSecond}
            data={[
              {
                id: '1',
                minute: '6',
                review: '6',
                textHeadOne:
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                message: StringC.bioLorem,
                userId: '',
              },
              {
                id: '2',
                minute: '9',
                review: '16',
                textHeadOne:
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                message: StringC.bioLorem,
                userId: '1',
              },
              {
                id: '3',
                minute: '18',
                review: '12',
                textHeadOne:
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                message: StringC.bioLorem,
                userId: '',
              },
              {
                id: '4',
                minute: '15',
                review: '10',
                textHeadOne:
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                message: StringC.bioLorem,
                userId: '1',
              },
              {
                id: '5',
                minute: '16',
                review: '8',
                textHeadOne:
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                message: StringC.bioLorem,
                userId: '',
              },
              {
                id: '6',
                minute: '4',
                review: '6',
                textHeadOne:
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                message: StringC.bioLorem,
                userId: '1',
              },
              {
                id: '7',
                minute: '12',
                review: '16',
                textHeadOne:
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                message: StringC.bioLorem,
                userId: '',
              },
              {
                id: '8',
                minute: '4',
                review: '4',
                textHeadOne:
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                message: StringC.bioLorem,
                userId: '1',
              },
            ]}
            renderItem={({item}) => this.renderItem(item)}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    );
  }
}

export default CommentList;
