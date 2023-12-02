import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";
import Auth from "./components/auth";
export default function App() {
  const [name, setName] = useState("Israel");

  const changeName = () => {
    setName("Another Israel");
  };

  return (
    <View style={styles.container}>
       <StatusBar style="auto" />
      <Auth />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
