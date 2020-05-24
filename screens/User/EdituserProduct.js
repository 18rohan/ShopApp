import React , {useState, useEffect, useCallback} from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import CustomHeaderButton from "../../components/HeaderButton";
import ThemeColors from "../../constants/themeColor";
import {useSelector, useDispatch} from 'react-redux';
import * as ProductActions from '../../store/actions/products';

const EditUserProduct = (props) => {
    const prodId = props.navigation.getParam("productId");
    const editedProduct = useSelector(state => state.products.userProducts.find(prod => prod.id  === prodId));

    const [name, setName] = useState(editedProduct ? editedProduct.name : '');
    const [productId, setProductId] = useState(editedProduct ? editedProduct.id : '');
    const [imageurl, setImageurl] = useState(editedProduct ? editedProduct.imageurl : '');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState(editedProduct ? editedProduct.description : '');
    const [titleIsValid, setTitleIsValid] = useState(false);

    const Dispatch = useDispatch();
    console.log("Edit Screen");
    console.log(editedProduct);
    const submitHandler = useCallback(()=>{
                if(editedProduct){
                    Dispatch(ProductActions.updateProduct(prodId, name, imageurl, description));
                }else{
                    Dispatch(ProductActions.createProduct(name, imageurl, description, +price));
                }
    },[Dispatch, prodId, name, imageurl, description, price]);

    useEffect(() =>{
        props.navigation.setParams({'submit': submitHandler});
    }, [submitHandler]);

    const titleChangeHandler = (text) =>{
        if(text.trim().length === 0){
            setTitleIsValid(false);
        }else{
            setTitleIsValid(true);
        }
        setName(text);
    };

    return (
        <ScrollView>
            <View style={styles.screen}>
                <View style={styles.InputContainer}>
                    <View style={styles.labelTextContainer}>
                        <Text style={styles.labelText}>Product Name</Text>
                    </View>

                    <TextInput placeholder="Enter Text" 
                               value={name} 
                               onChangeText={text => setName(text)}
                               autoCapitalize = "words"

                               />
                               {!titleIsValid && <View style={styles.warningText}>
                                <Text>Please enter a valid name.</Text>
                                </View>
                            }
                </View>

                <View style={styles.InputContainer}>
                    <View style={styles.labelTextContainer}>
                        <Text style={styles.labelText}>Product ID</Text>
                    </View>

                    <TextInput placeholder="Enter Text" value={productId} onChangeText={text =>setProductId(text)} />
                </View>
                <View style={styles.InputContainer}>
                    <View style={styles.labelTextContainer}>
                        <Text style={styles.labelText}>Image URL</Text>
                    </View>
                    <TextInput placeholder="Enter Text" value={imageurl} onChangeText={text => setImageurl(text)}/>
                </View>
                {editedProduct ? null : (<View style={styles.InputContainer}>
                    <View style={styles.labelTextContainer}>
                        <Text style={styles.labelText}>Price</Text>
                    </View>
                    <Text > {price}</Text>
                    <TextInput placeholder="Enter Text" value={price} onChangeText={text=>setPrice(text)} />
                </View>
                )}
                <View style={styles.InputContainer}>
                    <View style={styles.labelTextContainer}>
                        <Text style={styles.labelText}>description</Text>
                    </View>
                    <TextInput placeholder="Enter Text" value={description} onChangeText={text => setDescription(text)}/>
                </View>
                
                <TouchableOpacity style={styles.button}>
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
        // headerLeft: (tabInfo) =>
        // <CustomHeaderButton IconName="ios-menu"  IconSize={28} onTouch={() => {
        //     navData.navigation.toggleDrawer();
        //     }} />,
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
