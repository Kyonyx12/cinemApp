import { createContext, useContext } from "react";
import useFirebaseAuth from "../hooks/useFirebaseAuth";

const authUserContext = createContext({
  authUser: null,
  loading: true,
});

export const AuthUserProvider: React.FC = (props) => {
  const auth = useFirebaseAuth();
  return (
    <authUserContext.Provider value={auth}>
      {props.children}
    </authUserContext.Provider>
  );
};

// custom hook to use the authUserContext and access authUser and loading
export const useAuth = () => useContext(authUserContext);
