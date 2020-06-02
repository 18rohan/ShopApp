import React , {useState, useEffect, useCallback, useReducer} from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Alert
} from "react-native";
import CustomHeaderButton from "../../components/HeaderButton";
import ThemeColors from "../../constants/themeColor";
import {useSelector, useDispatch} from 'react-redux';
import * as ProductActions from '../../store/actions/products';

// ------------------------------------------------------------------------------------
// Action Creator
const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';


// ------------------------------------------------------------------------------------
// Creating the Reducer Function
const FormReducer = (state, action) => {
    if(action.type === FORM_INPUT_UPDATE ){
        const updatedValues =  {
            ...state.inputValues,
            [action.input] : action.value
        };
        const updatedValidities = {
            ...state.inputValidities,
            [action.input] : action.isValid,
        };

        let UpdatedformisValid = true;
        for (const key in updatedValidities) {
            UpdatedformisValid = UpdatedformisValid && updatedValidities[key];
        }
        return {
            formisValid:UpdatedformisValid,
            inputValidities:updatedValidities,
            inputValues:updatedValues,
        };
    }
    return state;
};


// ------------------------------------------------------------------------------------
// EditProduct Screen Component
const EditUserProduct = (props) => {
    const prodId = props.navigation.getParam("productId");
    const editedProduct = useSelector(state => state.products.userProducts.find(prod => prod.id  === prodId));
    
    const [error, setError] = useState(false);
    const Dispatch = useDispatch();




// ------------------------------------------------------------------------------------
// Using userReducer to validate the Form input
  const [formState, dispatchFormState ] = useReducer(FormReducer, {
        inputValues:{
            name:editedProduct ? editedProduct.name : '',
            imageurl:editedProduct ? editedProduct.imageurl : '',
            description:editedProduct ? editedProduct.description : '',
            price:'',
        },
        inputValidities:{
            name:editedProduct ? true : false,
            imageurl:editedProduct ? true : false,
            description:editedProduct ? true : false,
            price:editedProduct ? true : false,
        }, 

        formisValid: editedProduct ? true : false
         });

 

    // console.log("Edit Screen");
    // console.log(editedProduct);

    useEffect(() => {
        if(error){
            Alert.alert('Wrong input!',error,[{text:'Okay'}]);
        }
    });

// ------------------------------------------------------------------------------------
// Submit Handler to handle the Submission of the form
    const submitHandler = useCallback(async()=>{
            if(!formState.formisValid){
                Alert.alert('Wrong input!','Please check the form',[{text:'Okay'}]);
                return;

            }   
            setError(null);
            try{
                if(editedProduct){
                   await Dispatch(ProductActions.updateProduct(
                                    prodId, 
                                    formState.inputValues.name, 
                                    formState.inputValues.imageurl, 
                                    formState.inputValues.description
                                    ));
                }else{
                  await  Dispatch(ProductActions.createProduct(
                            formState.inputValues.name, 
                            formState.inputValues.imageurl, 
                            formState.inputValues.description, 
                            +formState.inputValues.price
                            ));
                }
                props.navigation.goBack();
            }catch (err) {
                setError(err.message);
            }
                
                
    },[Dispatch, prodId, formState]);

    useEffect(() =>{
        props.navigation.setParams({submit: submitHandler});
    }, [submitHandler]);

// -----------------------------------------------------------------------------
// Text Change Handler : Handles the Validity of each Input Field
    const textChangeHandler = (InputIdentifier, text) =>{
        
        let isValid = false;
        if(text.trim().length > 0){
          isValid = true;
        }

        dispatchFormState({
            type:FORM_INPUT_UPDATE, 
            value:text, 
            isValid:isValid, 
            input:InputIdentifier, 
                       });
    };

    return (
        <ScrollView>
            <View style={styles.screen}>
                <View style={styles.InputContainer}>
                    <View style={styles.labelTextContainer}>
                        <Text style={styles.labelText}>Product Name</Text>
                    </View>

                    <TextInput placeholder="Enter Text" 
                               value={formState.inputValues.name} 
                               onChangeText={ textChangeHandler.bind(this,'name')}
                               autoCapitalize = "words"

                               />
                    {!formState.inputValues.name && 
                        <View style={{marginTop:15}}>
                        <Text style={{color:'red'}}> Enter a valid product name </Text>
                        </View>}

                             
                </View>

               
                <View style={styles.InputContainer}>
                    <View style={styles.labelTextContainer}>
                        <Text style={styles.labelText}>Image URL</Text>
                    </View>
                    <TextInput 
                            placeholder="Enter Text" 
                            value={formState.inputValues.imageurl} 
                            onChangeText={textChangeHandler.bind(this,'imageurl')}/>
                </View>
                {editedProduct ? null : (<View style={styles.InputContainer}>
                    <View style={styles.labelTextContainer}>
                        <Text style={styles.labelText}>Price</Text>
                    </View>
                    
                    <TextInput 
                            placeholder="Enter Text" 
                            value={formState.inputValues.price} 
                            onChangeText={textChangeHandler.bind(this,'price')}
                            keyboardType="decimal-pad"
                             />
                </View>
                )}

                <View style={styles.InputContainer}>
                    <View style={styles.labelTextContainer}>
                        <Text style={styles.labelText}>description</Text>
                    </View>
                    <TextInput 
                        placeholder="Enter Text" 
                        value={formState.inputValues.description} 
                        onChangeText={textChangeHandler.bind(this,'description')}
                        />
                </View>
                
                <TouchableOpacity style={styles.button} onPress={submitHandler} >
                    <Text style={styles.buttonText}>{editedProduct ? "edit Product" : "Create Product"}</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

EditUserProduct.navigationOptions = (navData) => {
    const submitFn = navData.navigation.getParam("submit");
    return {
        headerTitle: "Bookmarks",
      
        headerRight: () => (
            <CustomHeaderButton
                IconName="md-checkmark-circle-outline"
                IconSize={28}
                onTouch={submitFn}
            />
        ),
    };
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
    },
    labelTextContainer: {
        marginBottom: 10,
        width: 300,
        height: 30,
    },
    labelText: {
        fontSize: 20,
        fontWeight: "bold",
        color: ThemeColors.SpotifyGreen,
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
    },
    InputContainer: {
        width: 380,
        height: 70,
        borderBottomWidth: 1,
        borderBottomColor: ThemeColors.SpotifyGreen,
        margin: 20,
    },
    button: {
        width: 350,
        height: 40,
        backgroundColor: ThemeColors.SpotifyGreen,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    buttonText: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
    },
    warningText:{
        marginTop:15,
    }
});

export default EditUserProduct;
