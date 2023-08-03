import {
    createContext,
    useState,
    FC,
    useContext,
    Dispatch,
    SetStateAction
} from "react"

interface GlobalContextProps {
    headerHeight: number
    setHeaderHeight: Dispatch<SetStateAction<number>>
    location: string
    setLocation: Dispatch<SetStateAction<string>>
}

const contextDefaultValues: GlobalContextProps = {
    headerHeight: 0,
    setHeaderHeight: () => 0,
    location: "",
    setLocation: () => null
}

export const GlobalContext =
    createContext<GlobalContextProps>(contextDefaultValues)

const GlobalContextProvider: FC<any> = ({ children }) => {
    const [location, setLocation] = useState<string>("")
    const [headerHeight, setHeaderHeight] = useState<number>(0)

    return (
        <GlobalContext.Provider
            value={{ location, setLocation, headerHeight, setHeaderHeight }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider

export function useGlobalContext(): GlobalContextProps {
    return useContext(GlobalContext)
}
