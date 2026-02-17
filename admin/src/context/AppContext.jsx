import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const currency = '$' // Fixed declaration
    
    // Robust age calculation
    const calculateAge = (dob) => {
        if (!dob) return "N/A";

        const dateArray = dob.split('_');
        if (dateArray.length !== 3) return "N/A";

        const today = new Date();
        const birthDate = new Date(dateArray[2], dateArray[1] - 1, dateArray[0]);
        
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        
        return isNaN(age) ? "N/A" : age;
    }

    const months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    
    const slotDateFormat = (slotDate) => {
        if (!slotDate) return "";
        const dateArray = slotDate.split('_')
        return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
    }

    const value = {
        calculateAge,
        slotDateFormat,
        currency // Exported as 'currency' to match your components
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider