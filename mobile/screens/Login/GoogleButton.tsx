import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { Colors } from "@constants/color";

const GoogleButton: React.FC = () => {
	return (
		<View style={styles.buttonView}>
			<Pressable
				style={styles.pressable}
				android_ripple={{ color: Colors.violet300 }}
			>
				<Text style={styles.signInText}>Sign In with Google</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	signInText: {
		color: Colors.violet600,
		fontSize: 20,
		fontWeight: "bold",
	},

	buttonView: {
		marginTop: 100,
		width: 240,
		height: 40,
		borderWidth: 1,
		borderRadius: 8,
		borderColor: Colors.violet700,
		overflow: "hidden",
	},

	pressable: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default GoogleButton;
