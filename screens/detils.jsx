import { View, Text, StyleSheet } from "react-native";

//https://jsonplaceholder.typicode.com/users/id

function DetailsScreen({ navigation, route }) {
  return (
    <View style={style.container}>
      <Text>Details Screen</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DetailsScreen;
