import { Text, StyleSheet, Alert, FlatList, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";

function HomeScreen({ navigation }) {
  /* States */
  const [todos, setTodos] = useState([]);

  const renderItem = ({ item, index }) => {
    const navigateToDetails = () => navigation.navigate("Details", { id: item.id });
    return (
      <TouchableOpacity onPress={navigateToDetails} style={style.row}>
        <Text>{index + 1}.</Text>
        <Text style={[style.title, item.completed && style.completed]} numberOfLines={1} lineBreakMode="tail">
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  const keyExtractor = (item) => String(item.id);

  useEffect(() => {
    (async () => {
      try {
        const response = await (await fetch("https://jsonplaceholder.typicode.com/todos")).json();
        setTodos(response);
      } catch (error) {
        Alert.alert("Something went wrong", String(error));
      }
    })();
  }, []);

  return <FlatList data={todos} keyExtractor={keyExtractor} renderItem={renderItem} />;
}

const style = StyleSheet.create({
  row: {
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: { marginHorizontal: 12, flex: 1 },
  completed: { textDecorationLine: "line-through" },
});

export default HomeScreen;
