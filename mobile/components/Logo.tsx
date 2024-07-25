import React from "react";
import { Image, ImageStyle, View, ViewStyle } from "react-native";

interface LogoProps {
	view?: ViewStyle;
	logo?: ImageStyle;
}

const Logo: React.FC<LogoProps> = ({ view, logo }) => {
	return (
		<View style={view}>
			<Image source={require("@assets/logo.png")} style={logo} />
		</View>
	);
};

export default Logo;
