import {  createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const AuthContext = createContext();


export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState( null)
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if(storedToken){
            setToken(storedToken)
        }

        const storedUser =JSON.parse(localStorage.getItem("user"));
        if(storedUser){
            setCurrentUser(storedUser)
        }
    },[]);
    

    //login 
    const login = (token, currentUser) => {
        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("user", JSON.stringify(currentUser))
        setToken(token)
        setCurrentUser(currentUser)
    }
   
    //logout 
    const logout =async () => {
       try{
        const res =  await axios.post("http://localhost:5001/api/auth/logout");
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setToken(null)
        setCurrentUser(null)
    
        toast.success(res.data.message)
       
       }catch(err){
        console.log("logout error")
       }

    }

    return (
        <AuthContext.Provider value={{currentUser, token,login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
 



