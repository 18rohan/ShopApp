import React from 'react';
import {View, Text, Button, StyleSheet, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import CustomHeaderButton from '../../components/HeaderButton';
import ThemeColors from '../../constants/themeColor';

const EditUserProduct = props => {
    return (
        <ScrollView>

        <View style={styles.screen}>
        
           <View style={styles.InputContainer}>
                    <View style={styles.labelTextContainer}>
                     <Text style={styles.labelText}>Product Name</Text>
                     </View>
                
               <TextInput placeholder="Enter Text" />
           </View>
           
           <View style={styles.InputContainer}>
           <View style={styles.labelTextContainer}>
                     <Text style={styles.labelText}>Product ID</Text>
                     </View>
               <TextInput placeholder="Enter Text" />
           </View>
           <View style={styles.InputContainer}>
           <View style={styles.labelTextContainer}>
                     <Text style={styles.labelText}>Image URL</Text>
                     </View>
               <TextInput placeholder="Enter Text" />
           </View>
           <View style={styles.InputContainer}>
           <View style={styles.labelTextContainer}>
                     <Text style={styles.labelText}>Price</Text>
                     </View>
               <TextInput placeholder="Enter Text" />
           </View>
           <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Create Product</Text>
        </TouchableOpacity>
        </View>
        
        </ScrollView>
    );

};

EditUserProduct.navigationOptions = navData => {
    return {
        headerTitle:"Bookmarks",
        // headerLeft: (tabInfo) =>
        // <CustomHeaderButton IconName="ios-menu"  IconSize={28} onTouch={() => {
        //     navData.navigation.toggleDrawer();
        //     }} />,  
        headerRight: () =>
        <CustomHeaderButton IconName="ios-save"  IconSize={28} onTouch={() => {
            navData.navigation.toggleDrawer();
            }} />,  
    };
};
const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:15,
    },
    labelTextContainer:{
        marginBottom:10,
        width:300,
        height:30,
    },
    labelText:{
        fontSize:20, 
        fontWeight:'bold',
        color:ThemeColors.StarbucksGreen
    },
    text:{
        fontSize:24,
        fontWeight:'bold',
    },
    InputContainer:{
        width:380,
        height:70,
        borderBottomWidth:1,
        borderBottomColor:ThemeColors.SpotifyGreen,
        margin:20,
    },
    button:{
        width:350,
        height:40,
        backgroundColor:ThemeColors.StarbucksGreen,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,

    },
    buttonText:{
        color:'white',
        fontSize:15, 
        fontWeight:'bold',
    },
});

export default EditUserProduct;