import { createContext } from "react";

export const DoctorContext = createContext();

const DoctorContextProvider = (props) => {

    const value = {
        // You will add doctor-specific variables here later (like dToken, appointments, etc.)
    }

    return (
        <DoctorContext.Provider value={value}>
            {props.children}
        </DoctorContext.Provider>
    )

}

export default DoctorContextProvider