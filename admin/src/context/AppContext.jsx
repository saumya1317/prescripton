import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const value = {
        // You will add variables here later (like backendUrl, token, etc.)
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider