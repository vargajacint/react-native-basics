/* Navigation things */
import { createNativeStackNavigator } from "@react-navigation/native-stack";

/* Screens */
import DetailsScreen from "../screens/detils";
import HomeScreen from "../screens/home";

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};
