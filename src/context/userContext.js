//**This file will house all the user context of the application */

import { createContext, useContext, useState } from "react";
const USER = {
    name:"Guest",
    isGuest:true,
    userId:""
}

export const userContext = createContext({
    /**we need to put initial state */
    user:USER,
    login:() =>{},
    logout:() =>{},
    loginStatus:false
})



/**passing down props to children */
export function UserContextProvider({children}){

    const [user, setuser] = useState(USER) //initial state of the user to be shared

    /**defining specific functions for the user ie login and logout */
    function login(username ,userId ){
        setuser({isGuest:false ,name:username ,loginStatus:true ,userId:userId})
        console.log(user)
    }

    function logout(){
        setuser(USER)
        setuser({loginStatus:false})
    }

    return(
        /**pass the values that need to be propagated down to other components */
        <userContext.Provider value={{user , login,logout}}>
            {children}
        </userContext.Provider>
    )
}
/**
 * consuming values from other files
 * They can be consumed directly from with  the help of usecontext hook
 * But in this case we want to consume it via custome hook
 * 
 */
export function useUserContext(){

    const {user,login,logout,loginStatus}  = useContext(userContext)

    return {user,login,logout,loginStatus}
}