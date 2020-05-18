import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {Ionicons, Fontisto} from '@expo/vector-icons';
import ThemeColors from '../constants/themeColor';
import * as CartActions from '../store/actions/Cart';
import {useDispatch} from 'react-redux';


const ProductDetailsCard = props => {
    const Dispatch = useDispatch();
    const Product = props.product;
    console.log(Product)
    return (
        <ScrollView style={styles.Detailscard}>
        <View >
            <View style={styles.imageContainer}>
            {/* Image View */}
            <Image source={props.imageUrl} style={styles.image} />
            <Text style={{fontSize:25, fontWeight:'300'}}>{props.children}</Text>
                <Text style={{fontSize:20, fontWeight:'500', color:ThemeColors.SpotifyBlack}}>Rs. {props.price}</Text>
           
            </View>
            <View style={styles.textContainer}>
                {/* Product Name */}
                
                
            </View>
            <View style={styles.IconsContainer}>
            <TouchableOpacity style={styles.cartIconContainer} onPress={() =>{
                // console.log("Cart pressed");
                    Dispatch(CartActions.addToCart(props.product));
            }}>
            <View >
                {/* Product : PUT IN CART */}
               <Ionicons name="ios-cart" size={35} color="white"/>
            
            </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.buyIconContainer}>
            <View >
                <Fontisto name="shopping-bag" size={30} color="white" />
            </View>
            </TouchableOpacity>
            </View>
            
        </View>
        <View style={styles.InfoContainer}>
        <View style={styles.inStockContainer}>
        <Text style={{fontSize:25, fontWeight:'400', color:ThemeColors.SpotifyGreen}}>In Stock</Text>    
      
        </View>
        <View style={styles.SellerContainer}>
        <Text style={{fontSize:25, fontWeight:'400', color:ThemeColors.SpotifyGreen}}>In Stock</Text>    
       
        </View>
        </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    Detailscard:{
        width:'100%',
        height:'100%',
        backgroundColor:'white',
        borderBottomColor:'lightgrey',
        borderBottomWidth:0.5,

        
    },
    InfoContainer:{
        height:100,
        flexDirection: 'row',
        width:'100%',
    },
    SellerContainer:{
        width:'100%',
        height:100,
        marginTop:95,
        justifyContent:'flex-start',
        alignItems:'flex-start',
        marginRight:20,
    },
    inStockContainer:{
        width:'100%',
        height:100,
        marginTop:55,
        justifyContent:'flex-start',
        alignItems:'flex-start',
        marginLeft:20,
    },
    IconsContainer:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    cartIconContainer:{
        justifyContent:'flex-end',
        alignItems:'flex-start',
        flexDirection: 'row',
        marginTop:25,
        marginLeft:30,
        width:100,
        height:70,
        borderRadius:10,
        borderWidth:1,
        borderColor:ThemeColors.SpotifyGreen,
        backgroundColor:ThemeColors.SpotifyGreen,
        justifyContent:'center',
        alignItems:'center',
        marginRight:40,

    },
    buyIconContainer:{
        justifyContent:'flex-end',
        marginTop:25,
        marginLeft:30,
        width:100,
        height:70,
        borderRadius:10,
        borderWidth:1,
        borderColor:ThemeColors.SpotifyGreen,
        backgroundColor:ThemeColors.SpotifyGreen,
        justifyContent:'center',
        alignItems:'center',
        marginRight:40,
    },

    imageContainer:{
        width:'100%',
        height: 400,
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        


    },
    image:{
        width:'90%',
        height:350
    },
    textContainer:{
        marginLeft:50,
        
        
        width:'80%',
        justifyContent:'space-around',
        alignItems:'flex-start',
        flex:1,
    },
})
export default ProductDetailsCard;