import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { BottomNav } from "./component/BottomNav";
import { Header } from "./component/Header";

export default function App() {
  const [name, setname] = useState("Nikhil");
  const changename = () => {
    if (name === "Nikhil") {
      setname("Bijal");
    } else {
      setname("Nikhil");
    }
  };

  return (
    <>
    <Header />
    <BottomNav />
    {/* <View style={styles.container}>
      <Text style={styles.title}>Hello my name is {name}</Text>
      <View style={styles.btncontainer}>
        <Button title="Click me" onPress={changename} />
      </View>
    </View> */}
    <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9eafc",
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  title:{
    fontSize: 26,
  },
  btncontainer: {
    marginTop: 10,
    width: 80,
  }
});
