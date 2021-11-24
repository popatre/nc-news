import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

import UserDetails from "../components/UserDetails";
import UserSelect from "../components/UserSelect";
export default function Account() {
    const { user, setUser } = useContext(UserContext);
    console.log(user);
    return (
        <section className="account">
            {!!user.username ? (
                <UserDetails user={user} />
            ) : (
                <UserSelect user={user} setUser={setUser} />
            )}
        </section>
    );
}
