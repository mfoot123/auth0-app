import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import {redirect } from "next/navigation";

export default withPageAuthRequired(async function Admin(){
    const user = await getSession();

    const role = user.user["/roles"][0];

    if (role !== "Admin") redirect('/')

    return (
    <main className="dashboard-page">
        <div className="dashboard-container">
            <h1>Admin Dashboard</h1>
            <p>Welcome, {user.user.name}!</p>
            <a href="/api/auth/logout" className="logout-button">Logout</a>
        </div>
    </main>
    );
}, { returnTo: "/" })