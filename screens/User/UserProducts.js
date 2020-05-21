import React from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import UserProductCard from "../../components/shop/Card_userProduct";
import ThemeColors from "../../constants/themeColor";
import { useDispatch } from "react-redux";
import CustomHeaderButton from "../../components/HeaderButton";
import * as ProductActions from "../../store/actions/products";

const UserProducts = (props) => {
	const userProducts = useSelector((state) => state.products.userProducts);
	const Dispatch = useDispatch();

	const renderSingleProduct = (itemData) => {
		return (
			<View style={styles.list}>
				<UserProductCard
					name={itemData.item.name}
					image={itemData.item.imageurl}
					navigation={props.navigation}
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
			<Text style={styles.text}> Products Screen </Text>
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
		headerLeft: () => (
			<CustomHeaderButton
				IconName="ios-menu"
				IconSize={28}
				onTouch={() => {
					navData.navigation.toggleDrawer();
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
});

export default UserProducts;
