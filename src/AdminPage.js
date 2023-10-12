import React from "react";

import { useParams, Link, Navigate } from "react-router-dom";

function AdminPage() {

    const { username } = useParams();
    if(username !== "admin"){
        return <Navigate to="/" />;
    }
    
    return (
        <>
        <h1>Welcome {username} </h1>
        <Link to="/">Go back to home</Link>
        </>
    )
}

export default AdminPage;