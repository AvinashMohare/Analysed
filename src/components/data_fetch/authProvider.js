import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    console.log("Auth Provider ");

    // Retrieve authentication state from local storage during initialization
    useEffect(() => {
        const storedAuthState = localStorage.getItem("authState");
        if (storedAuthState) {
            setUser(JSON.parse(storedAuthState));
        }
    }, []);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                // User is signed in.
                setUser(user);
                // Store authentication state in local storage
                localStorage.setItem("authState", JSON.stringify(user));
            } else {
                // User is signed out.
                setUser(null);
                // Clear authentication state from local storage
                localStorage.removeItem("authState");
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <>
            <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
            {/* <ClientFetcher uid={user.uid} /> */}
        </>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
