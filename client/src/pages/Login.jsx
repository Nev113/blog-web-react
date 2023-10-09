import React from "react";

export default function Login(){
    return (
        <div className="auth">
            <h1>Login</h1>
            <form>
                <input required type="text" placeholder="Username"/>
                <input required type="password" placeholder="Password" />
                <button>Login</button>
                <p>This is an error</p>
                <span>Don't you have an account? <a href="/register">Register</a></span>
            </form>
        </div>
    )
}
