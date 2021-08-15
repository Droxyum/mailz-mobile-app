import React, { useContext, useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { AuthContext } from "./components/contexts";

export default function Login() {
  const [token, setToken] = useState("");
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (token.length) {
      authContext.signIn(token);
    }
  }, [token]);

  const go = () => {
    setToken("1234");
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button onPress={go} title="Go to mailbox" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
