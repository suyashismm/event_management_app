import { createContext,useState } from "react";

export const accountContext = createContext(null);

export const DataProvider = (props) => {
    const [account,setAccount] = useState('');
    return(
        <accountContext.Provider value={{account,setAccount}}>
            {props.children}
        </accountContext.Provider>
    );

}



