import { createContext, useContext, useState} from "react";


const AuthContext = createContext({ isLoggedIn: false });

export const AuthProvider = ({ children }) =>{

    
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn}}>
          {children}
        </AuthContext.Provider>
      );
}

export const useAuth = () => useContext(AuthContext);
