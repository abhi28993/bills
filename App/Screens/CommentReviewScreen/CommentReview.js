import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import * as StringC from '../../Assets/Constant/StringConstant';
import Styles from './CommentReviewStyle';
import Header from '../../Components/HeaderComponent/HeaderComponent';
import Custombtn from '../../Components/ButtonComponent/ButtonComponent';
import LowerHeader from '../../Components/LowerHeaderComponent/LowerHeaderComponent';

class CommentReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      selectedIds: [],
    };
  }
  // for category tab flatlist
  handleSelectionMultiple = id => {
    var selectedIds = []; // clone state

    if (selectedIds.includes(id)) {
      selectedIds = selectedIds.filter(_id => _id !== id);
    } else {
      selectedIds.push(id);
    }
    this.setState({selectedIds});
    console.log(selectedIds);
  };
  // for science flatlist
  renderItem(item) {
    let backgroundColor = this.state.selectedIds.includes(item.value)
      ? '#2B2D42'
      : '#ffffff';
    let fontColor = this.state.selectedIds.includes(item.value)
      ? '#ffffff'
      : '#2B2D42';

    return (
      <View style={[Styles.renderMain, {backgroundColor: backgroundColor}]}>
        <TouchableOpacity
          style={Styles.renderInner}
          onPress={() => this.handleSelectionMultiple(item.value)}>
          <Text style={[Styles.flattext, {color: fontColor}]}>
            {item.label}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  // After click on submit button
  afterSubmit() {
    this.props.navigation.navigate(StringC.REVIEW_SCREEN);
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={Styles.container}>
        <ScrollView>
          <Header
            onToggle={() => this.props.navigation.toggleDrawer()}
            leftIcon={StringC.menuIcon}
            rightIcon={StringC.notifyicon}
            navigation={navigation}
          />
          <LowerHeader
            subTitle={StringC.commentReview}
            lefticon={'arrowleft'}
            leftIcononPress={StringC.REVIEW_LIST_SCREEN}
            navigation={navigation}
          />
          <View style={Styles.lowermain}>
            <View>
              <Text style={Styles.numberMain}>14 minutes ago</Text>
              <View style={Styles.messageBack}>
                <Text>{StringC.bioLorem}</Text>
              </View>
            </View>
            <View style={Styles.messageBackTwo}>
              <View>
                <Text style={Styles.numberMain}>14 minutes ago</Text>
                <View style={Styles.messageBackSecond}>
                  <Text>{StringC.sliderThirdText}</Text>
                </View>
              </View>
            </View>
            <View style={Styles.flatMain}>
              <FlatList
                extraData={this.state.selectedIds}
                showsVerticalScrollIndicator={false}
                style={Styles.flatListStyle}
                numColumns={3}
                data={[
                  {label: '3', value: '1'},
                  {label: '6', value: '2'},
                  {label: '9', value: '3'},
                ]}
                renderItem={({item}) => this.renderItem(item)}
                keyExtractor={item => item.value}
              />
            </View>
            <Custombtn
              title={StringC.submit}
              onPress={() => this.afterSubmit()}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default CommentReview;
