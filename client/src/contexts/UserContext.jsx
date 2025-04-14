import { createContext, useContext, useState, useEffect } from 'react';
import { authUser } from '../../userDb';

const UserContext = createContext();

export function useUserContext() {
    return useContext(UserContext);
}

export function UserProvider({ children }) {
    const [token, setToken] = useState(() => {
        const storedToken = localStorage.getItem("accessToken");
        return storedToken ? JSON.parse(storedToken) : null;
    });
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (token) {
            localStorage.setItem('accessToken', JSON.stringify(token));
        } else {
            localStorage.removeItem('accessToken');
        }
    }, [token]);

    function login(userData) {
        setUser(userData);
    };

    function logout() {
        setUser(null);
    };

    function changeGlobals(checkbox) {
        if (checkbox) {
            const accessToken = JSON.stringify({ da: "kolkoto da ne e prazen" });
            localStorage.setItem("accessToken", accessToken);

            setUser(authUser);
            setToken(accessToken);
        } else if (localStorage.getItem("accessToken")) {
            localStorage.removeItem('accessToken');

            setUser(null);
            setToken(null);
        } else {
            setUser(null);
            setToken(null);
        }
    }

    return (
        <UserContext.Provider value={{ user, login, logout, changeGlobals }}>
            {children}
        </UserContext.Provider>
    );
}