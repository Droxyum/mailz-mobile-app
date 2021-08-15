import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useMemo, useReducer } from "react";
import { View } from "react-native";

export default function AuthContainer(props) {
  const [authState, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "SIGN_IN":
          return {
            ...prevState,
            token: action.token || "",
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            token: "",
          };
        default:
          prevState;
      }
    },
    { token: "" }
  );

  const authContext = useMemo(
    () => ({
      signIn: async (token: string) => {
        await AsyncStorage.setItem("@token", token);
        dispatch({ type: "SIGN_IN", token });
      },
      signOut: async () => {
        await AsyncStorage.removeItem("@token");
        dispatch({ type: "SIGN_OUT" });
      },
    }),
    []
  );

  useEffect(() => {
    const boot = async () => {
      const t = await AsyncStorage.getItem("@token");
      dispatch({ type: "SIGN_IN", token: t });
    };
    boot();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {props.children({ props, authState, authContext, dispatch })}
    </View>
  );
}
