import { createContext } from "react";
import { doctors } from "../assets/assets_frontend/assets"; // <--- Ensure this path is correct

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const currencySymbol = '$' // <--- Add this line

    const value = {
        doctors,
        currencySymbol // <--- Add this line
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider