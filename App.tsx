import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useMemo, useReducer } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import AuthContainer from "./home/components/AuthContainer";
import { AuthContext } from "./home/components/contexts";
import StatusBarBackground from "./home/components/StatusBarBackground";
import Login from "./home/Login";
import Mailbox from "./home/Mailbox";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <StatusBarBackground />
      <NavigationContainer>
        <AuthContainer>
          {({ authContext, authState, dispatch }) => (
            <AuthContext.Provider value={authContext}>
              <Stack.Navigator>
                {authState.token?.length ? (
                  <Stack.Screen
                    name="Mailbox"
                    component={Mailbox}
                    options={{
                      headerRight: () => (
                        <Button
                          title="Sign Out"
                          onPress={() => dispatch({ type: "SIGN_OUT" })}
                        />
                      ),
                    }}
                  />
                ) : (
                  <Stack.Screen name="Login" component={Login} />
                )}
              </Stack.Navigator>
            </AuthContext.Provider>
          )}
        </AuthContainer>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  link: {
    margin: 10,
    fontSize: 18,
  },
});
