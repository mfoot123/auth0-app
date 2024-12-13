import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import {redirect } from "next/navigation";

export default withPageAuthRequired(async function Admin(){
    const user = await getSession();

    const role = user.user["/roles"][0];

    if (role !== "User") redirect('/')

    return (
        <main>
            User <br />
            <a href="/api/auth/logout">Logout</a>
        </main>
    );
}, { returnTo: "/" })