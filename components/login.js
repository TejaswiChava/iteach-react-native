import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TextInput,
  Button,
  SafeAreaView
} from 'react-native';
import GenerateForm from 'react-native-form-builder';

const fields =[
    {
        type: 'text',
        name: 'user_name',
        required: true,
        label: 'User Name',
    },
    {
        type: 'password',
        name: 'password',
        required:true,
        label:'Password'
    },
    {
        type:'text',
        name:'school_code',
        required:true,
        label:'School Code'
    }
];
export default class loginComponent extends Component{
   
    static navigationOptions = {title:'LOGIN',
        headerStyle: {
            backgroundColor: '#16a085', 
        },
        headerTitleStyle: {
            color: 'white',
            textAlign: 'center',
            flexGrow: 1
        },
    }
    login=()=>{
        this.props.navigation.navigate('Dashboard');
    };
    render(){
        return(
            
            <View  style={styles.wrapper}>
        
            <View >
              <GenerateForm
               
                fields={fields}
              />
            </View>
            <View style={styles.submitButton} >
              <Button title="LOGIN" onPress={this.login}>
               
              </Button>
            </View>
          </View>
        )
    }
}
const styles=StyleSheet.create({
   
    wrapper: {
        flex: 1,
        marginTop: 50,

    },
    submitButton: {
        padding: 20,
    },
})