import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import ThemeColors from "../../constants/themeColor";

const UserProductCard = (props) => {
	return (
		<View style={[styles.card, props.style]}>
			<Image style={[styles.image, props.style]} source={{uri:props.image}} />
			<Text style={[styles.text, props.style]}>{props.name}</Text>
			<View style={styles.CardButtonsContainer}>
				<TouchableOpacity
					style={styles.CardButtons}
					onPress={() => {
						props.navigation.navigate({
							routeName:"EditUserProduct",
							params:{
								productId:props.productId
							},
						});
					}}
				>
					<Text style={styles.ButtonText}>Edit Product</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.CardButtons}
					onPress={props.onTouch}
				>
					<Text style={styles.ButtonText}>Delete Product</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		width: 350,
		height: 350,
		borderRadius: 20,
		backgroundColor: "white",
		shadowOffset: { width: 3, height: 3 },
		shadowColor: "black",
		shadowOpacity: 0.6,
		elevation: 5,
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		width: 250,
		height: 250,
	},
	text: {
		fontSize: 20,
		fontWeight: "300",
		color: ThemeColors.StarbucksGreen,
	},
	CardButtonsContainer: {
		flexDirection: "row",
		width: "95%",
		justifyContent: "space-around",
		marginTop: 10,
	},
	CardButtons: {
		width: 150,
		height: 30,
		backgroundColor: ThemeColors.StarbucksGreen,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
	},
	ButtonText: {
		color: "white",
		fontSize: 15,
		fontWeight: "300",
	},
});

export default UserProductCard;
