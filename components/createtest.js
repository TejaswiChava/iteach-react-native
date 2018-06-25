import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TextInput,
  Button,
  Image,
  TouchableOpacity
} from 'react-native';
import GenerateForm from 'react-native-form-builder';

const fields =[
    {
        type: 'text',
        name: 'date',
        required: true,
        label: 'Date',
    },
    {
        type: 'text',
        name: 'marks',
        required:true,
        label:'Marks'
    },
    {
        type:'text',
        name:'duration',
        required:true,
        label:'Duration'
    },
    {
        type:'text',
        name:'syllabus',
        required:true,
        label:'Syllabus'
    }
];
export default class createTestComponent extends Component{
    static navigationOptions = {title:'Telugu Unit Test 1',
    headerStyle: {
        backgroundColor: '#696923', 
    },
    headerTitleStyle: {
        color: 'white',
        // textAlign: 'center',
        flexGrow: 1
    },
}
login=()=>{
    this.props.navigation.navigate('Dashboard');
};
    render(){
        return(
            <View >
            <GenerateForm
             
              fields={fields}
            />
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.9}>
                        <View style={styles.publishButton}>
                            <Text style={styles.viewButtonText}>Publish</Text>
                        </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9}>
                        <View style={styles.saveButton}>
                            <Text style={styles.viewButtonText}>Save</Text>
                        </View>
                </TouchableOpacity>
            </View>

          </View>
        )
    }
}

const styles = StyleSheet.create({
    publishButton: {
        justifyContent: 'center',
        padding:10,
		borderRadius: 3,
		backgroundColor: '#696923',
		width: 100,
		height: 50,
        marginTop: 10,
        marginRight:10,
        marginLeft:100,
    },
    saveButton: {
        justifyContent: 'center',
        padding:10,
		borderRadius: 3,
		backgroundColor: '#696923',
		width: 100,
		height: 50,
        marginTop: 10,
        marginRight:10,
	},
	viewButtonText: {
        color: 'white',
        fontSize:18,
        justifyContent: 'center',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
      }
  });