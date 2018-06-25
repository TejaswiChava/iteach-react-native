import  { createStackNavigator , createDrawerNavigator ,createSwitchNavigator}  from 'react-navigation';
import login from './components/login';
import dashboard from './components/dashboard'
import test from './components/tests';
import diary from './components/diary';
import attendance from './components/attendance';
import assignments from './components/assignments';
import timetable from './components/timetable';
import createtest from './components/createtest';
import { YellowBox } from 'react-native';
import React, { Component } from 'react';
import {Icon} from 'react-native-elements';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TextInput,
  Button,
  Image,
  SafeAreaView
} from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
YellowBox.ignoreWarnings(['Class RCTCxxModule']);

let TestNavigation = createStackNavigator({
  Test:{screen:test},
  CreateTest:{screen:createtest}
})



let FriendsNavigator = createDrawerNavigator({
  Dashboard:{screen:dashboard},
  Diary:{screen:diary},
  Timetable:{screen:timetable},
  Assignments:{screen:assignments},
  Attendance:{screen:attendance},
  Tests:TestNavigation,
}
);

let AuthNavigator = createStackNavigator({
  Login: { screen: login },

});

let AppNavigator = createSwitchNavigator({
  Auth: AuthNavigator,
  App: FriendsNavigator,
},
{
  initialRouteName : 'Auth'
});

export default class App extends Component {
  render() {
    return <AppNavigator />;
  }
}
// const DrawerNavigation =  createStackNavigator({
//   DrawerStack: { screen: FriendsNavigator }
// }, {
//   navigationOptions: ({navigation}) => ({
//     headerStyle: {backgroundColor: 'pink'},
//     title: 'Logged In to your app!',
//     headerLeft: <Text onPress={() => this.props.navigation.openDrawer()}>Menu</Text>
//   })
// })

