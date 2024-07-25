import { StatusBar } from "expo-status-bar";
import LoginScreen from "screens/Login";
import ViewContainer from "@components/ViewContainer";

export default function App() {
	return (
		<ViewContainer>
			<StatusBar style="auto" />
			<LoginScreen />
		</ViewContainer>
	);
}
