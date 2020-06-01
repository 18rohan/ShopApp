import React from 'react';
import {View,Platform, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {HeaderButton} from 'react-navigation-header-buttons';
import {Ionicons, Fontisto} from '@expo/vector-icons';
import ThemeColors from '../constants/themeColor';

const CustomHeaderButton = props => {

    return (
        <TouchableOpacity onPress={props.onTouch}>
        <View style={styles.button}>
        
             <Ionicons name={props.IconName} size ={props.IconSize} color = {ThemeColors.SpotifyGreen} /> 
        </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button:{
        margin:15,
        marginTop:7,
    },
})
export default CustomHeaderButton;