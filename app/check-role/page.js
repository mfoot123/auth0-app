import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import {redirect } from "next/navigation";

export default withPageAuthRequired(async function Admin(){
    const user = await getSession();

    const role = user.user["/roles"][0];

    if (role !== "Admin") redirect('/user')
    else if (role == "Admin") redirect('/admin')

    return (
        <main>
        </main>
    );
}, { returnTo: "/admin" })