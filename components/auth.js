import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordLenghtChecker, setPasswordLenghtchecker] = useState("");
  const [CaseError, setCaseError] = useState(false);

 const handlePasswordChange = (text) => {
   setPassword(text);
   setCaseError(!/[A-Z]/.test(text));
 };


  const handleSignUp = () => {
    console.log("Signing up:", { username, email, password });

    if (password.length < 8) {
      setPasswordLenghtchecker("Password should be 8 and above");
    }
    if (!CaseError) {
      console.log("Password must contain an uppercase letter");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up for Goal Craft Elite</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry
      />
      <Text>{passwordLenghtChecker}</Text>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Auth;
