import { useReducer } from "react";
import { createContext } from "react";
import UserReducer from "./UserReducer";

const UserContext = createContext()
export const UserProvider = ({children})=>{
    const initialState = {
        users:[],
        profile:{},
        repos:[],
        loading:false
    }
    const [state,dispatch] = useReducer(UserReducer,initialState)

    
   
    return <UserContext.Provider value={{
        ...state,
        dispatch,
        
    }}>
        {children}
    </UserContext.Provider>
}

export default UserContext