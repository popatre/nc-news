import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        username: "jessjelly",
        avatar_url:
            "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141",
        name: "Jess Jelly",
    });

    const isLoggedIn = !!user.username;

    return (
        <UserContext.Provider value={{ user, setUser, isLoggedIn }}>
            {children}
        </UserContext.Provider>
    );
};
