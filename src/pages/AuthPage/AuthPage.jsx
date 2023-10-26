import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useState } from 'react';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
    const [showSignUpForm, setShowSignUpForm] = useState(false);

    return (
        <main className="AuthPage">
            <div>
                <button className="login-signup-btn" onClick={() => setShowSignUpForm(!showSignUpForm)}><img src="https://i.imgur.com/LfL2Oth.png" alt="" />{showSignUpForm ? 'Log In' : 'Sign Up'}</button>
            </div>
            <div>
                {showSignUpForm ? <SignUpForm setUser={setUser} /> : <LoginForm setUser={setUser} />}
            </div>
        </main>
    );
}