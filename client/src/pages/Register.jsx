import React from 'react';
export default function Register(){
    return (
        <div className="auth">
            <h1>Register</h1>
            <form>
                <input required type="text" placeholder="Username"/>
                <input required type="email" placeholder='E-mail' />
                <input required type="password" placeholder="Password" />
                <button>Register</button>
                <p>This is an error</p>
                <span>Do you have an account? <a href="/login">Login</a></span>
            </form>
        </div>
    )
}