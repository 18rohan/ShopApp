import React, { useState, useReducer, useCallback, useEffect } from "react";
import {
	StyleSheet,
	Platform,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Image,
	ImageBackground,
	ActivityIndicator,
	Alert,
} from "react-native";
import ThemeColors from "../../constants/themeColor";
import { useDispatch } from "react-redux";
import * as AuthActions from "../../store/actions/Auth";
// import firebase from 'react-native-firebase';

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const AuthScreen = (props) => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState();
	const [isLoading, setIsLoading] = useState(false);

	// console.log(email, password)
	const signupHandler = async () => {
		try {
			await dispatch(AuthActions.SignUp(email, password));
		} catch (err) {
			setError(err.message);
		}

		// props.navigation.navigate('shop');
	};

	const signInHandler = async () => {
		setError(null);
		setIsLoading(true);
		try {
			await dispatch(AuthActions.Login(email, password));
			props.navigation.navigate("shop");
		} catch (err) {
			setError(err.message);
			setIsLoading(false);
		}
	};
	useEffect(() => {
		if (error) {
			Alert.alert("There is some Error", error, [{ text: "okay" }]);
		}
	}, [error]);

	return (
		<View style={styles.screen}>
			<ImageBackground
				source={require("../../assets/images/CreditCard_illustration.png")}
				style={styles.imageCreditCard}
			>
				<View style={styles.imageContainerCard}></View>
			</ImageBackground>

			<View style={styles.titleContainer}>
				<Text style={styles.title}>User Login</Text>
			</View>

			<View style={styles.Card}>
				<View style={styles.labelContainer}>
					<Text style={styles.label}>Email</Text>
				</View>
				<View style={styles.InputsContainer}>
					<View style={styles.InputContainer}>
						<TextInput
							placeholder="Enter email"
							autoCapitalize="none"
							onChangeText={(userEmail) => setEmail(userEmail)}
						/>
					</View>

					<View style={styles.labelContainer}>
						<Text style={styles.label}>Password</Text>
					</View>
					<View style={styles.InputContainer}>
						<TextInput
							placeholder="Enter Password"
							autoCapitalize="none"
							secureTextEntry
							onChangeText={(userPassword) =>
								setPassword(userPassword)
							}
						/>
					</View>
				</View>
				<View style={styles.ButtonsContainer}>
					<TouchableOpacity
						style={styles.buttons}
						onPress={signInHandler}
					>
						{!isLoading ? (
							<Text style={styles.buttonText}>Sign in</Text>
						) : (
							<ActivityIndicator size="large" color="white" />
						)}
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.buttonSignUp}
						onPress={signupHandler}
					>
						<Text style={styles.buttonText}>Sign Up</Text>
					</TouchableOpacity>
				</View>
			</View>

			<View style={styles.ImageContainer}>
				<Image
					source={require("../../assets/images/ShopPlace.png")}
					style={styles.image}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "flex-start",
		alignItems: "center",
		marginTop: 200,
	},

	text: {
		fontSize: 24,
		fontWeight: "bold",
	},
	Card: {
		width: "80%",
		height: 300,
		backgroundColor: "white",
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "flex-start",
		paddingLeft: 30,
		paddingTop: 70,
		paddingBottom: 150,
		shadowColor: ThemeColors.SpotifyGreen,
		shadowOpacity: 0.6,
		shadowOffset: { width: 9, height: 6 },
		shadowRadius: 10,
	},
	InputContainer: {
		width: "95%",
		height: 30,
		borderBottomWidth: 0.5,
		borderBottomColor: ThemeColors.SpotifyGreen,
		borderRadius: 10,
		justifyContent: "center",
		paddingLeft: 15,
	},
	labelContainer: {
		marginBottom: 7,
		marginTop: 30,
		paddingLeft: 7,
	},
	label: {
		fontSize: 20,
		fontWeight: "200",
		color: ThemeColors.SpotifyGreen,
	},
	buttons: {
		width: 100,
		height: 40,
		borderRadius: 10,
		backgroundColor: ThemeColors.SpotifyGreen,
		justifyContent: "center",
		alignItems: "center",
		marginRight: 40,
		marginLeft: 35,
	},
	ButtonsContainer: {
		flexDirection: "row",
		width: 250,
		paddingLeft: 25,

		justifyContent: "center",
	},
	buttonText: {
		color: "white",
		fontSize: 15,

		fontWeight: "bold",
	},
	InputsContainer: {
		height: 160,
		width: 250,
	},
	ImageContainer: {
		marginTop: 15,
		marginBottom: 100,
	},
	image: {
		width: 350,
		height: Platform.OS === "ios" ? 180 : 350,
	},
	title: {
		fontSize: 40,
		fontWeight: "200",
		color: ThemeColors.StarbucksGreen,
	},
	titleContainer: {
		marginBottom: 5,
		width: 350,
		height: 50,

		justifyContent: "flex-start",
		alignItems: Platform.OS == "ios" ? "center" : "center",
	},
	buttonSignUp: {
		width: 100,
		height: 40,
		borderRadius: 10,
		backgroundColor: "orange",
		justifyContent: "center",
		alignItems: "center",
		marginRight: 40,
		marginLeft: 35,
	},
	imageCreditCard: {
		width: 200,
		height: 100,
		resizeMode: "cover",
	},
	imageContainerCard: {
		height: 200,
		width: 250,
		flexDirection: "row",
		justifyContent: "flex-start",
	},
});

export default AuthScreen;
