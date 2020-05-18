import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity,ImageBackground,Image, TextInput, Platform, ScrollView } from 'react-native';
import BigCards from '../components/BigCards';
import {Ionicons} from '@expo/vector-icons'
import {PRODUCT_CATEGORIES, PRODUCTS} from '../data/dummy_data';
import ThemeColors from '../constants/themeColor';
import CustomHeaderButton from '../components/HeaderButton';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';




const HomeScreen = props => {
     const renderGridItem = (itemData)=> {
         
         return (
            <TouchableOpacity style={styles.list} onPress={() =>{
                return (
                    props.navigation.navigate({
                        routeName:'ProductList',
                        params:{
                            CategoryId: itemData.item.id
                        },
                    })
                    
                );
            }}>
             <View >
             
             <View style={styles.Card} >
             <ImageBackground source={itemData.item.imageurl} style={styles.image} >
             <View style={styles.textCardContainer}>
                     <Text style={styles.textCard}> {itemData.item.name}</Text>
            </View>
            </ImageBackground>
             </View>
             
             
             </View>
             </TouchableOpacity>
            
         );
     };
     const renderSmallCards = (itemData) =>{
         return (
            <TouchableOpacity style={styles.listSmall} onPress={() =>{
                return (
                    props.navigation.navigate({
                        routeName:'ProductList',
                        params:{
                            CategoryId: itemData.item.id
                        },
                    })
                       
                );
            }}>
             <View style={styles.cardSmall}>
             
                 <View style={styles.cardPicture}>
                 <Image source = {itemData.item.imageurl} style = {styles.imageSmallBackground} />
                     
                    
                 </View>
                 <View style={{marginTop:9}}>
                     <Text style={styles.textSmall}>{itemData.item.name}</Text>
                     </View>
                 
             </View>
             </TouchableOpacity>
         );
     };

    return (
        <ScrollView>
        <View style={styles.screen}>
                <View style={styles.TopRow}>
                    <View style={styles.TextInputContainer}>
                    <View style={styles.searchInput}>
                       <TextInput placeholder="Search" />
                       </View>
                        <View style={styles.searchIcon}>
                            <Ionicons name="ios-search" size={23}/>
                            </View>
                      
                    </View>
                    </View>
                   <View style={styles.MidRow}> 
                   <Text style={styles.text}>Your Favourites</Text>
                    <FlatList data={PRODUCT_CATEGORIES} renderItem={renderGridItem} horizontal showsHorizontalScrollIndicator={false} />
                   </View>
   
   
                   <View style={styles.BottomRow}>
                            <Text style={{fontSize:20, fontWeight:'400'}}>Latest</Text>
                            <FlatList data={PRODUCTS} renderItem={renderSmallCards} horizontal showsHorizontalScrollIndicator={false}/>
                        
                   </View>
                   <View style={styles.MidRow}> 
                   <Text style={styles.text}>What you may Like</Text>
                    <FlatList data={PRODUCT_CATEGORIES} renderItem={renderGridItem} horizontal showsHorizontalScrollIndicator={false} />
                   </View>
   
        </View>
        </ScrollView>
    );
};
HomeScreen.navigationOptions = (navData) => {
    return {
        headerTitle:"Shopper's stop ",
        headerRight: () => 
        
         <CustomHeaderButton IconName="ios-cart"  IconSize={28} onTouch={() => {
             navData.navigation.navigate("User")
         }} />
        
         
        
    };
}



const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
    },
    text:{
        fontSize: 24,
        fontWeight:'400',
        color:'black',
    },
    list:{
        width:350,
        height:200,
        margin:15,
        alignItems:'center',
        justifyContent:'center',
        
    },
    image:{
        resizeMode:'cover',
        width:350,
        height: 300,
        borderRadius:25,
        marginBottom:10,
        justifyContent:'flex-start',
        flex:1,
    },
    imageSmallBackground:{
        
        width:'95%',
        height: '90%',
    },
    cardPicture:{
        width:160, 
        height:150,
        backgroundColor:'white',
       
    },
  
    listSmall:{
        width:190,
        height:300,
        alignItems:'center',
        justifyContent: 'flex-start',
        padding: 15,
        
    },
    textSmall:{
        fontSize:10,
        fontWeight:'300',
        
    },
    MidRow:{
        flex: 3,
        
        width: '100%',
        marginTop:20,
        padding:10,
        justifyContent:'space-around'

    },
    searchInput:{
        marginRight:250,

    },
    
    TextInputContainer:{
        width: '90%',
        height: 40,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent:'center',
        borderColor: 'grey',
        borderWidth:1,
        borderRadius:35,
        justifyContent:'center',
        alignItems:'center',
        
    },
    textCardContainer:{
        marginBottom:10,
        width: 300,
        height: 35,
        justifyContent:'center',
        alignItems:'center',
    },
    TopRow:{
        flex:1,
        flexDirection: 'row',
        
        width:'95%',
        marginTop: 15,
        justifyContent:'center',
        alignItems:'center',
        
    },
    BottomRow:{
        flex:1,
        justifyContent:'center',
        height:210,
        backgroundColor:'white',
        width:'90%',
    
    },
    Card:{
        width:300,
        height:180,
        flex:1,
        paddingBottom:5,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 25,
        shadowColor:'black',
        shadowOffset:{width:7, height:7},
        shadowRadius:6,
        shadowOpacity:0.6,
        elevation:5,
    },
    cardSmall:{
        width:120,
        height:120,
        backgroundColor:'white',
        justifyContent:'center',
        borderRadius:20,
        marginTop:15,
        
    },
    textCard:{
        fontSize: Platform.OS == 'ios' ? 29 : 14,
        fontWeight:'200',
        color:'black',
    },

});

export default HomeScreen;