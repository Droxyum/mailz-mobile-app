import { createContext } from "react";

let token = "";

// export const AuthContext = createContext({
//   setToken: (value: string) => (token = value),
//   getToken: () => token,
// });
export const AuthContext = createContext({
  signIn: (v: string) => {},
  signOut: () => {},
});
