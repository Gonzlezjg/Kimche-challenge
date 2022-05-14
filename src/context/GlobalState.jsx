import GlobalContext from "./GlobalContext";
import GlobalReducer, { initialState } from "./GlobalReducer";
import useGlobalReducer from "./GlobalControl";

const GlobalState = ({ children }) => {
  const value = useGlobalReducer(GlobalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ ...value }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;