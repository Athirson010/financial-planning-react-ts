import React, {createContext, useState} from "react";
import { IAuthProvider, IContext, IUser } from "./types";
import { auth } from "../../Services/AutenticacaoService";

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({children} : IAuthProvider) => {
    const [user, setUser] = useState<IUser | null>();
    
    async function authenticate(email: string, password: string){
        const response = await auth(email, password);
        const payload = {token: response.token, email}
        setUser(payload)
    }

    function logout(){
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{...user, authenticate, logout}}>
            {children}
        </AuthContext.Provider>
    )
}