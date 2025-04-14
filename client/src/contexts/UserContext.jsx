import { createContext, useContext, useState } from 'react';

// Create the UserContext
const UserContext = createContext();

export function useUserContext() {
    return useContext(UserContext);
}

// Create a provider component
export function UserProvider({ children }) {
    const [user, setUser] = useState(null); // Default user state is null (not logged in)

    function login(userData) {
        setUser(userData); // Set user data when logging in
    };

    function logout() {
        setUser(null); // Clear user data when logging out
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}