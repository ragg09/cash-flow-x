import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@constants/color";

const Message: React.FC = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Welcome to Budget Planner</Text>
			<Text style={styles.subtitle}>
				Manage your finances efficiently
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
	},

	title: {
		color: Colors.violet900,
		fontSize: 32,
		fontWeight: "bold",
		marginTop: 24,
	},

	subtitle: {
		color: Colors.accent100,
		fontSize: 20,
		fontWeight: "bold",
	},
});

export default Message;
