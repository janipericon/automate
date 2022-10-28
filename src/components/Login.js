import React, { useState } from 'react';
import './Login.css';
import logo from '../img/main-logo.png';
import eyecon from '../img/eye.png';
import passkey from '../img/pass-key.png';
import phone from '../img/user-phone.png';

function Login() {

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
      };

    const exceptThisSymbols = ["e", "E", "+", "-", "."];  
    const [num, setNum] = useState('');

    const handleNum = event => {
        const limit = 11;
        setNum(event.target.value.slice(0, limit));
    };

    return (
        <div className="login-container">
            
            <div className='main-logo'>
                <img src={logo} />
            </div>

                <h2>"Your Personalized Mechanic"</h2>

            <div className="login-grid">
                
                <div className="login-user">
                    <div className="phone-icon">
                        <img src={phone} />
                    </div>
                    <input type="number" placeholder="Mobile Number" required value={num} onChange={handleNum} 
                    onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}></input>
                </div>

                <div className="login-password">
                    <div className="key-icon">
                        <img src={passkey} />
                    </div>
                    <input type={passwordShown ? "text" : "password"} placeholder="Password" required />
                    <button onClick={togglePassword}><img src={eyecon} /></button>   
                </div>
                           
                <div className="forgot-password">
                    <a href="">Forgot Password?</a>
                </div>

                <div className="sign-in">
                    <button>Login</button>
                </div>
                
                <div className="register">
                    <p>Don't have an Account yet? Tap<a href=""> here </a>to Register.</p>
                </div>
                
                <div className="footer">
                    <p>V.0.0.01</p>
                </div>
            </div>
        </div>
    );
}

export default Login;