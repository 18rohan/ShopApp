import React, {useEffect, useState, useCallback} from "react";
import { StyleSheet, Text, View, Button, FlatList, ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import UserProductCard from "../../components/shop/Card_userProduct";
import ThemeColors from "../../constants/themeColor";
import { useDispatch } from "react-redux";
import CustomHeaderButton from "../../components/HeaderButton";

import * as ProductActions from "../../store/actions/products";



const UserProducts = (props) => {
	const userProducts = useSelector((state) => state.products.userProducts);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState();
	// console.log(userProducts);
	const Dispatch = useDispatch();

	const getData = useCallback(async () =>{
			setIsLoading(true);
			try {
				await Dispatch(ProductActions.fetchProduct());		
			} catch (err) {
				setError(err.message);
			}
			
			setIsLoading(false);
		},[setIsLoading,Dispatch]);


// Re-rendering the data while Navigating between Screens
	useEffect(() => {
		props.navigation.addListener('willFocus', getData);
	})

// Rendering the Data on the Screen: FIRST TIME

	useEffect(()=>{	
		getData();
	},[Dispatch]);


// Handling the Connection Error
	if(error){
		return (
			<View style={styles.AppLoadingIndicator}>
			<Text style={{fontSize:25, fontWeight:'bold',color:ThemeColors.SpotifyGreen}}>Something went wrong</Text>
			</View>

			);
	}
// Displaying the Screen Loader
	if (isLoading){
		return (
			<View style={styles.AppLoadingIndicator}>
			<ActivityIndicator size= "large" />
			</View>

			);
	}

// Handling the NO DATA situation in UserProducts Screen

	if (!isLoading && userProducts.length === 0){
		return (
			<View style={styles.AppLoadingIndicator}>
			<Text style={{fontSize:25, fontWeight:'bold', color:ThemeColors.SpotifyGreen}}>No Products Added to User Products!! </Text>
			</View>
			);
	}



	const renderSingleProduct = (itemData) => {
		return (
			<View style={styles.list}>
				<UserProductCard
					name={itemData.item.name}
					image={itemData.item.imageurl}
					navigation={props.navigation}
					productId = {itemData.item.id}
					onTouch={() => {
						console.log("Hello Rohan");
						Dispatch(ProductActions.deleteProduct(itemData.item.id));
					}}
				/>
			</View>
		);
	};
	return (
		<View style={styles.screen}>
			
			<FlatList
				data={userProducts}
				renderItem={renderSingleProduct}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};
UserProducts.navigationOptions = (navData) => {
	return {
		headerTitle:"User Products",
		headerLeft: () => (
			<CustomHeaderButton
				IconName="ios-menu"
				IconSize={28}
				onTouch={() => {
					navData.navigation.toggleDrawer();
				}}
			/>
		),
		headerRight: () => (
				<CustomHeaderButton
					IconName="ios-add"
					IconSize={28}
					onTouch={() =>{
					navData.navigation.navigate("EditUserProduct");
					}}
					/>
			),
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
	},
	text: {
		fontSize: 24,
		fontWeight: "bold",
		color: ThemeColors.StarbucksGreen,
	},
	list: {
		height: 350,
		width: 500,
		marginTop: 25,
		width: "100%",
		marginRight: 15,
		marginBottom: 20,
	},
	AppLoadingIndicator:{
		flex:1, 
		justifyContent:'center',
		alignItems:'center'
	},
});

export default UserProducts;
