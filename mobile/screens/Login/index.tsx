import React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@constants/color";
import Logo from "@components/Logo";

import Message from "./Message";
import GoogleButton from "./GoogleButton";

const LoginScreen: React.FC = () => {
	return (
		<LinearGradient
			style={styles.container}
			colors={[Colors.violet500, Colors.accent300]}
		>
			<View style={styles.container}>
				<Logo />
				<Message />
				<GoogleButton />
			</View>
		</LinearGradient>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
	},
});

export default LoginScreen;
