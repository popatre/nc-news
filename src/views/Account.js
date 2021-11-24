import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

import UserDetails from "../components/UserDetails";
export default function Account() {
    const { user } = useContext(UserContext);

    return (
        <section className="account">
            <UserDetails user={user} />
        </section>
    );
}
