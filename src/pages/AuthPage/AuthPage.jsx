import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useState } from 'react';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
    const [showSignUpForm, setShowSignUpForm] = useState(false);

    return (
        <main className="AuthPage">
            <div>
                <button className="login-signup-btn" onClick={() => setShowSignUpForm(!showSignUpForm)}>SEI CAFE</button>
                <h4>{showSignUpForm ? 'Log In' : 'Sign Up'}</h4>
            </div>
            <div>
                {showSignUpForm ? <SignUpForm setUser={setUser} /> : <LoginForm setUser={setUser} />}
            </div>
        </main>
    );
}