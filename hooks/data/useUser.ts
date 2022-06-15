import { useEffect, useState } from "react";
import { User } from "../../interfaces/user.interfaces";
import useUserStore from "../../stores/userStore";

export function useUser() {
    const userZustand = useUserStore((state) => state.user);
    const changeUser = useUserStore((state) => state.changeUser);
    const removeUserZustand = useUserStore((state) => state.removeUser);

    const [user, setUser] = useState<string>("");
    const [userData, setUserData] = useState<User>();
    
    const translateJWT = (jwt: string) => {
        const decoded = jwt.split(".")[1];
        const decodedJson = atob(decoded);
        const user = JSON.parse(decodedJson);
        return user;
    }

    const removeUser = () => {
        removeUserZustand();
        setUser("");
    }

    useEffect(() => {
        if(userZustand){
            setUserData(translateJWT(userZustand));
            setUser(userZustand)
        }
    }, [userZustand]);

    return {user, userData, changeUser, removeUser}
}