import React, { ReactNode } from "react";
import { View, ViewStyle, StyleSheet } from "react-native";

interface ViewContainerProps {
	style?: ViewStyle;
	children: ReactNode;
}

const ViewContainer: React.FC<ViewContainerProps> = ({ style, children }) => {
	return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default ViewContainer;
