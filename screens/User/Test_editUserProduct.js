import React, {useState, useReducer, useEffect, useCallback} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Button} from 'react-native';
import CustomHeaderButton from '../../components/HeaderButton';
import ThemeColors from '../../constants/themeColor';

const LOGIN_INPUT = 'LOGIN_INPUT';

const LoginFormReducer = (state, action) => {
	if (action.type === LOGIN_INPUT) {
		// Reducer Logic
		const UpdatedValues = {
			...state.inputValues,
			[action.input] : action.value,
		};
		const updatedValidities = {
			...state.inputValidities,
			[action.input] : action.isValid,
		};
		let updateFormisValid = true;
		for (const key in  updatedValidities){
			updatedFormisValid = updatedFormisValid && updatedValidities[key];
		}
		return {
			formisValid: updatedFormisValid,
			inputValidities:updatedValidities,
			inputValues: UpdatedValues,

		};
	}

};


const TestEditProduct = props => {
	// const [email, setEmail] = useState('');
	// const [password, setPassword] = useState('');
	// const [error, setError] = useState(false);
	// const [errorMessage, setErrorMessage] = useState('');


// Declaring the initialStates of the Input Fields
	const [formState, LoginDispatch]=  useReducer(LoginFormReducer,{
		inputValues:{
			email: '',
			password:'',
		},
		inputValidities:{
			email:false,
			password:false,
		},
		formisValid: false,
	});


// Dispatching the Reducer Action
	
	const LoginFormHandler = (inputIdentifier, text) =>{
		let isValid = false;
		if(text.length > 0){
			isValid:true;
		}
		LoginDispatch({type:LOGIN_INPUT,
					   input:inputIdentifier, 
					   value:text, 
					   isValid:isValid
					});
	};

	 const submitHandler = useCallback(() =>{
    if(!formIsValid){
      Alert.alert('Error in the form','Check your fields')
    }
  },[formState]); 
	// useEffect(() => {
	// 	// Validation Function 
	// 	// EmailHandler(email);
	// 	// PasswordHandler(password);
	// 	LoginFormHandler(inputIdentifier,)

	// }, [formState]);
	return (
		<View style={styles.screen}>
		<View style={styles.TextInputContainer}>
		<TextInput 
				placeholder="Enter Email" 
				value = {formState.inputValues.email} 
				onChangeText={LoginFormHandler.bind(this,'email')}
				autoCapitalize = "none"	
		/> 
		</View>
		{!formisValid && (<Text style={{color:'red'}}> Enter a valid Email address</Text> )}

		<View style={styles.TextInputContainer}>
		<TextInput 
			placeholder="Enter Password"
			value={formState.inputValues.password}
			onChangeText={LoginFormHandler.bind(this,'password')}
			autoCapitalize="none"
		 />
		 {!formisValid && (<Text style={{color:'red'}}> Enter a valid Password</Text> )}
	</View>

	<TouchableOpacity style={styles.buttons}>
	<Text style={styles.ButtonText}> Login </Text>
	</TouchableOpacity>
		
		<View style={styles.NativeButtonContainer}>
		<Button style={styles.NativeButton}  title="Switch to SignUp" />
		</View>
		</View>
		);

};

TestEditProduct.navigationOptions = (navData) => {
	 
	 return {headerLeft: () => 
            

            <CustomHeaderButton IconName="ios-menu"  IconSize={28} onTouch={() => {
            navData.navigation.toggleDrawer();
            }} />,
            
};

}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',

	},
	TextInputContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomWidth: 0.5,
		width:200,
		borderBottomColor: ThemeColors.SpotifyGreen,
		padding:20,
	},
	buttons: {
		backgroundColor: ThemeColors.SpotifyGreen,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop:20,
		width: 120,
		height:50,
		borderRadius:10,
	},
	ButtonText:{
		color: 'white',
		fontSize: 18,
		fontWeight:'bold'
	},
	NativeButtonContainer: {
		marginTop:10,
		justifyContent: 'center',
		alignItems: 'center'	
	},
});

export default TestEditProduct;