import {
  createContext,
  useState,
  FC,
  useContext,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { useIsScrolling } from "@hook/useScrolling";

interface GlobalContextProps {
  headerHeight: number;
  setHeaderHeight: Dispatch<SetStateAction<number>>;
  isHashScrolling: boolean;
  setHashScrolling: Dispatch<SetStateAction<boolean>>;
}

const contextDefaultValues: GlobalContextProps = {
  headerHeight: 0,
  setHeaderHeight: () => 0,
  isHashScrolling: false,
  setHashScrolling: () => false,
};

export const GlobalContext =
  createContext<GlobalContextProps>(contextDefaultValues);

const GlobalContextProvider: FC<any> = ({ children }) => {
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const [isHashScrolling, setHashScrolling] = useState<boolean>(false);

  return (
    <GlobalContext.Provider
      value={{
        headerHeight,
        setHeaderHeight,
        isHashScrolling,
        setHashScrolling,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

export function useGlobalContext(): GlobalContextProps {
  return useContext(GlobalContext);
}
