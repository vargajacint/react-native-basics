/* Navigation things */
import { NavigationContainer } from "@react-navigation/native";
import { RootStack } from "./navigations";

function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default App;
