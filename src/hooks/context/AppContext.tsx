import React, { createContext, ReactNode, useState } from "react";

interface AuthContextProps {
  auth: any; // You should replace 'any' with the actual type of your 'auth' state
  setAuth: React.Dispatch<React.SetStateAction<any>>; // You should replace 'any' with the actual type of your 'auth' state
}

const AuthContext = createContext<AuthContextProps>({
  auth: {},
  setAuth: () => {},
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [auth, setAuth] = useState({});

  // console.log("auth", auth);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
