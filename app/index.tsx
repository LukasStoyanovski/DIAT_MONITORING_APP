import { Text, View, StyleSheet,  TextInput } from "react-native";
import { Link, Stack } from 'expo-router';
import { BorderlessButton } from "react-native-gesture-handler";

export default function Index() {
  return (
    <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}
    >
    <Link href="/my_profile" style={styles.link}>Go to my Profile</Link>
      <Text>Welcome to the Diat Monitoring App </Text>
      <Text style={styles.title}>Log in </Text>
      <TextInput style={styles.input}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
    fontSize: 20,

  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    marginTop: 20,
    width: '80%',
    paddingLeft: 10,
  },
  title: {
    fontSize: 50,
  }
});