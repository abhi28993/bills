import React, {Component} from 'react';
import {View, Text, ScrollView, Switch} from 'react-native';
import * as StringC from '../../Assets/Constant/StringConstant';
import Styles from './NotificationSettingStyle';
import Header from '../../Components/HeaderComponent/HeaderComponent';
import LowerHeader from '../../Components/LowerHeaderComponent/LowerHeaderComponent';

class TayconRules extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      switchNotification: true,
      switchPriority: false,
      switchFloatingNotifications: true,
      switchLockScreenNotifications: false,
      switchsound: false,
      switchVibration: false,
      switchNotificationLight: true,
    };
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
        <ScrollView>
          <LowerHeader
            subTitle={StringC.settingNotification}
            lefticon={'arrowleft'}
            navigation={navigation}
          />
          <View style={Styles.lowermain}>
            <View style={Styles.linkMain}>
              <View style={Styles.customWidth}>
                <Text style={Styles.btnText}>{StringC.showNotification}</Text>
              </View>
              <Switch
                trackColor={{false: '#fff', true: '#A82424'}}
                thumbColor={this.state.switchNotification ? '#fff' : '#A82424'}
                ios_backgroundColor="#3e3e3e"
                value={this.state.switchNotification}
                onValueChange={switchNotification =>
                  this.setState({switchNotification})
                }
              />
            </View>
            <View style={Styles.customLine} />
            <View style={Styles.linkMain}>
              <View style={Styles.customWidth}>
                <Text style={Styles.btnText}>{StringC.priority}</Text>
              </View>
              <Switch
                trackColor={{false: '#fff', true: '#A82424'}}
                thumbColor={this.state.switchPriority ? '#fff' : '#A82424'}
                ios_backgroundColor="#3e3e3e"
                value={this.state.switchPriority}
                onValueChange={switchPriority =>
                  this.setState({switchPriority})
                }
              />
            </View>
            <View style={Styles.customLine} />
            <View style={Styles.linkMain}>
              <View style={Styles.customWidth}>
                <Text style={Styles.btnText}>
                  {StringC.floatingNotifications}
                </Text>
              </View>
              <Switch
                trackColor={{false: '#fff', true: '#A82424'}}
                thumbColor={
                  this.state.switchFloatingNotifications ? '#fff' : '#A82424'
                }
                ios_backgroundColor="#3e3e3e"
                value={this.state.switchFloatingNotifications}
                onValueChange={switchFloatingNotifications =>
                  this.setState({switchFloatingNotifications})
                }
              />
            </View>
            <View style={Styles.customLine} />
            <View style={Styles.linkMain}>
              <View style={Styles.customWidth}>
                <Text style={Styles.btnText}>
                  {StringC.lockScreenNotifications}
                </Text>
              </View>
              <Switch
                trackColor={{false: '#fff', true: '#A82424'}}
                thumbColor={
                  this.state.switchLockScreenNotifications ? '#fff' : '#A82424'
                }
                ios_backgroundColor="#3e3e3e"
                value={this.state.switchLockScreenNotifications}
                onValueChange={switchLockScreenNotifications =>
                  this.setState({switchLockScreenNotifications})
                }
              />
            </View>
            <View style={Styles.customLine} />
            <View style={Styles.linkMain}>
              <View style={Styles.customWidth}>
                <Text style={Styles.btnText}>{StringC.sound}</Text>
              </View>
              <Switch
                trackColor={{false: '#fff', true: '#A82424'}}
                thumbColor={this.state.switchsound ? '#fff' : '#A82424'}
                ios_backgroundColor="#3e3e3e"
                value={this.state.switchsound}
                onValueChange={switchsound => this.setState({switchsound})}
              />
            </View>
            <View style={Styles.customLine} />
            <View style={Styles.linkMain}>
              <View style={Styles.customWidth}>
                <Text style={Styles.btnText}>{StringC.vibration}</Text>
              </View>
              <Switch
                trackColor={{false: '#fff', true: '#A82424'}}
                thumbColor={this.state.switchVibration ? '#fff' : '#A82424'}
                ios_backgroundColor="#3e3e3e"
                value={this.state.switchVibration}
                onValueChange={switchVibration =>
                  this.setState({switchVibration})
                }
              />
            </View>
            <View style={Styles.customLine} />
            <View style={Styles.linkMain}>
              <View style={Styles.customWidth}>
                <Text style={Styles.btnText}>{StringC.notificationLight}</Text>
              </View>
              <Switch
                trackColor={{false: '#fff', true: '#A82424'}}
                thumbColor={
                  this.state.switchNotificationLight ? '#fff' : '#A82424'
                }
                ios_backgroundColor="#3e3e3e"
                value={this.state.switchNotificationLight}
                onValueChange={switchNotificationLight =>
                  this.setState({switchNotificationLight})
                }
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default TayconRules;
