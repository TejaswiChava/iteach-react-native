import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TextInput,
  Button,
  Image,
  ToolbarAndroid,
  TouchableOpacity,
  Platform
} from 'react-native';
import { DrawerActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class dashboardComponent extends Component{
    constructor() {
        super();
    
        // need to bind `this` to access props in handler
        this.openBar = this.openBar.bind(this);
      }
    openBar(){
        const { navigate } = this.props.navigation;
        console.log("click")
        this.props.navigation.dispatch(DrawerActions.openDrawer())
    }
    clickToDiary(){
        this.props.navigation.navigate('Diary');
    }
    clickToTimetable(){
        this.props.navigation.navigate('Timetable')
    }
    clickToAssignments(){
        this.props.navigation.navigate('Assignments')
    }
    clickToAttendance(){
        this.props.navigation.navigate('Attendance')
    }
    clickToTests(){
        this.props.navigation.navigate('Tests')
    }
    render(){
        return(
            <View>
                <View style={styles.header}>
                    <TouchableOpacity  onPress={()=> {
                                this.openBar()}}>
                        {/* <Text style={styles.menu}>Menu</Text> */}
                        <Icon style={styles.menu} name="bars" size={20} color="white"/>
                    </TouchableOpacity>
                    <Text style={styles.headertitle}>Dashboard</Text>
                </View>
                <View style={styles.modulesfirstrow}>
                    <View style={styles.diary} >
                        <TouchableOpacity onPress={()=> {this.clickToDiary()}}>
                            <Icon name="book" style={styles.diaryicon}/>
                        </TouchableOpacity>
                        <Text style={styles.diaryText}>Diary</Text>
                       
                    </View>
                    <View style={styles.timetable} >
                        <TouchableOpacity onPress={()=> {this.clickToTimetable()}}>
                            <Icon name="clock-o" style={styles.diaryicon}/>
                        </TouchableOpacity>
                        <Text  style={styles.diaryText}>Time Table</Text>
                    </View>
                    <View style={styles.assignments}>
                        <TouchableOpacity onPress={()=> {this.clickToAssignments()}}>
                            <Icon name="file-text" style={styles.diaryicon}/>
                        </TouchableOpacity>
                        <Text style={styles.diaryText}>Assignments</Text>
                    </View>
                </View>
                <View style={styles.modulessecondrow}>
                    <View style={styles.test}>
                        <TouchableOpacity onPress={()=> {this.clickToTests()}}>
                            <Icon name="clipboard" style={styles.diaryicon}/>
                        </TouchableOpacity>
                        <Text style={styles.diaryText}>Tests</Text>
                    </View>
                    <View style={styles.attendance}>
                        <TouchableOpacity onPress={()=> {this.clickToAttendance()}}>
                            <Icon name="user" style={styles.diaryicon}/>
                        </TouchableOpacity>
                        <Text style={styles.diaryText}>Attendance</Text>
                    </View>
                </View>
               
            </View>
          
        )
    }

}
const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        height: Platform.OS === 'ios' ? 50 : 50,
        padding: Platform.OS === 'ios' ? 12: 10,
        backgroundColor:'#696923',
    },
    menu:{
        color:'white',
        marginTop:5 },
    headertitle:{
        color:'white',
        fontWeight: 'bold',
        fontSize:18,
        marginLeft: 20 ,
        marginTop:2
        },
    modulesfirstrow:{
        flex: 1, flexDirection: 'row',
        marginTop:20,
        marginLeft:Platform.OS === 'ios' ? 2 : 20
    },
    diary:{
        width: 120, height: 120, backgroundColor: 'orange'
    },
    timetable:{
        width: 120, height: 120, backgroundColor: 'lightgreen',marginLeft:5
    },
    assignments:{
        width: 120, height: 120, backgroundColor: 'steelblue',marginLeft:5
    },
    modulessecondrow:{
        flex: 1, flexDirection: 'row',
        marginTop:125,
        marginLeft:Platform.OS === 'ios' ? 2 : 20
    },
    test:{
        width: 120, height: 120, backgroundColor: 'violet',
    },
    attendance:{
        width: 120, height: 120, backgroundColor: 'skyblue',marginLeft:5
    },
    diaryText:{
        fontSize:20,
        color:'white',
        marginTop:40,
        marginLeft:5
    },
    diaryicon:{
        fontSize:40,
        color:'#FFFAF0',
        marginLeft:70,
        marginTop:5
    }
});