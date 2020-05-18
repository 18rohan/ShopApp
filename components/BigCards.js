import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList} from 'react-native';
import ThemeColors from '../constants/themeColor';

const BigCards = props => {
   const BigCardlist = itemData => {

    return (
        <TouchableOpacity style={styles.list} onPress={() =>{
            return (
                props.navigation.navigate({
                    routeName:'ProductDetails',
                    params:{
                        ProductId:itemData.item.id,

                    },
                    })
            );
        }}>
         <View >
         
         <View style={styles.Card} >

         <View style={styles.imageCardContainer}>
         <Image source={itemData.item.imageurl} style={styles.image} />
         </View>

         
         <View style={styles.textCardContainer}>
                 <Text style={styles.textCardName}> {itemData.item.name}</Text>
                 <Text style={styles.textCardSeller}> by Apple</Text>

                <View style={styles.PriceContainer}>
                    <Text style={styles.textCardPrice}> {itemData.item.price}</Text>
                    <Text style={styles.textCardSeller}> Flat 5% off with AXIS banks credit Card</Text>
                    <Text style={styles.textCardSeller}> No cost EMI available</Text>
                    <Text style={styles.textCardSeller}> </Text>
                    <Text style={styles.textCardStockInfo}> Only 2 left in stock - order soon</Text>
                </View>         
        </View>
        
         
         </View>
         
         
         </View>
         </TouchableOpacity>
    );


   };
   return (
       <View style={styles.screen}>
            <FlatList  data = {props.listData}
                       renderItem = {BigCardlist}
                       vertical
                       showsVerticalScrollIndicator={false}
              
            />
       </View>
    
   );
   
};

const styles = StyleSheet.create({
    Card:{
        width:'95%',
        height:400,
        flexDirection: 'row',
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 25,
        shadowColor:'black',
        shadowOffset:{width:0, height:6},
        shadowOpacity:0.6,
        elevation:5,
    },
    text:{
        fontSize: 20,
        fontWeight:'400',
    },
    
    Card:{
        width:390,
        height:50,
        flex:1,
        borderColor:'lightgrey',
        borderWidth:0.25,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        flexDirection: 'row',
        
        
        
        
    },
    imageCardContainer:{
        
        width:120,
        height:'90%',
        alignItems:'flex-start',
        marginLeft:5,
    },
    list:{
        width:400,
        height:140,
        margin:12,

        
        alignItems:'center',
        justifyContent:'center',
        
    },
    image:{
        
        width:110,
        height: 110,
        
        
        
        
    },
    screen:{
        flex:1,
        width:'100%',
        backgroundColor:'white',
        
        
        

    },
    textCardContainer:{
        flex:1,
        height:'90%',
        alignItems:'flex-start',
        marginRight:20,
        justifyContent:'flex-start',
        
    },
    textCardName:{
        fontSize:15,
        fontWeight:'400',
        
    },
    textCardPrice:{
        fontSize:15,
        color:ThemeColors.SpotifyGreen,
        fontWeight:'300',
        
    },
    textCardSeller:{
        fontSize:10,
        fontWeight:'300',
        color:'grey'
    },
    PriceContainer:{
        marginTop:10,
    },
    textCardStockInfo:{
        color:'red',
        fontSize:10
    },
});

export default BigCards;