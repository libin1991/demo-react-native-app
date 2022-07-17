import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Header = () => {
  return (
    <>
        <View style={styles.header}>
            <Text style={styles.title}>React Native App</Text>
        </View>
    </>
  )
};

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 40,
        backgroundColor: '#8d95ed'
    },
    title: {
        fontSize: 20,
        color: '#fff',
        paddingLeft: 15,
    }
})
