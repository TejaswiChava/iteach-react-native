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
  Platform,
  SafeAreaView
} from 'react-native';
import { DrawerActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Divider } from 'react-native-elements';
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
   
    render(){
        return(
            <SafeAreaView>
            <View>
                <View style={styles.header}>
                    <TouchableOpacity  onPress={()=> {
                                this.openBar()}}>
                        {/* <Text style={styles.menu}>Menu</Text> */}
                        <Icon style={styles.menu} name="bars" size={20} color="white"/>
                    </TouchableOpacity>
                    <Text style={styles.headertitle}>Telugu Test</Text>
                </View>
                {/* if we have data from the backend we can do this list of tests in ListView */}
                <View style={styles.box}>
                    <View style={styles.box1}>
                        <View style={styles.testbox} >
                            <Text style={{fontSize: 22, textAlign: 'center', color: 'black'}}> UT1 </Text>
                        </View>
                        <View style={{ width: 120, height: 120,  justifyContent: 'center',}}>
                            <Text style={styles.fulltestname} > Unit Test 1</Text>
                            <Text style={styles.monthname}>June 2018</Text>
                        </View>
                        <View>
                            <Icon style={styles.chevronicon} name="chevron-right" size={20} color="black"/>
                        </View>
                    </View>
                    <View style={styles.box2}>
                        <View style={styles.testbox} >
                            <Text style={{fontSize: 22, textAlign: 'center', color: 'black'}}> UT2 </Text>
                        </View>
                        <View style={{ width: 120, height: 120,  justifyContent: 'center',}}>
                            <Text style={styles.fulltestname} > Unit Test 2 </Text>
                            <Text style={styles.monthname}>July 2018</Text>
                        </View>
                        <View>
                            <Icon style={styles.chevronicon} name="chevron-right" size={20} color="black"/>
                        </View>
                    </View>
                    <View style={styles.box3}>
                        <View style={styles.testbox} >
                            <Text style={{fontSize: 22, textAlign: 'center', color: 'black'}}> UT3 </Text>
                        </View>
                        <View style={{ width: 120, height: 120,  justifyContent: 'center',}}>
                            <Text style={styles.fulltestname} > Unit Test 3 </Text>
                            <Text style={styles.monthname}>Augst 2018</Text>
                        </View>
                        <View>
                            <Icon style={styles.chevronicon} name="chevron-right" size={20} color="black"/>
                        </View>
                    </View>
                </View>
                <View>
                    <Icon style={styles.plusicon}  name="plus-circle" size={50} color="#696923"/>
                </View>
            </View>
          </SafeAreaView>
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
        marginTop:5 
    },
    headertitle:{
        color:'white',
        fontWeight: 'bold',
        fontSize:18,
        marginLeft: 20 ,
        marginTop:2
    },
    testbox:{
        width: 100, height: 100,borderRadius:0,
        borderWidth: 0.5,
        borderColor: 'black',
        marginTop:10,
        marginLeft:Platform.OS === 'ios' ? 2 : 10,
        marginBottom:10,
        justifyContent: 'center'
    },
    textname:{
        color:'black',
        fontSize:30 ,
        // fontWeight:'bold'
        textAlign:'center',
        marginTop:30,
    },
    fulltestname:{
        fontSize: 22, textAlign: 'center', color: 'black',
    },
    monthname:{
        fontSize: 22, textAlign: 'center', color: 'grey',
    },
    box: {
        flexDirection:'column',
      
    },
    box1: {
        flexDirection:'row',
        // flex: 1,
        borderWidth:0.5,
        borderBottomColor:'black'
       
    },
    //content
    box2: {
        flexDirection:'row',
        borderWidth:0.5,
        borderBottomColor:'black'
        
    },
    //footer
    box3: {
        flexDirection:'row',
        borderWidth:0.5,
        borderBottomColor:'black'
       
    },
    chevronicon:{
        marginTop:50,
        marginLeft:100
    },
    plusicon:{
        marginTop:150,
        marginLeft:330
    }
});