import React, { useRef, useState } from "react";
import "./SignUpScreen.css";
import { auth } from "../firebase";

function SignUpScreen() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [message, setMessage] = useState({ showMsg: false, msgText: "", msgColor: "" });


    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value).then(() => {
            setMessage((prev) => {
                return { ...prev, showMsg: true, msgText: "Account Successfully created", msgColor: "greenMsg" }
            })
        }).catch(error => {
            setMessage((prev) => {
                return { ...prev, showMsg: true, msgText: error.message, msgColor: "redMsg" }
            })
        })
    }

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value).then(() => {
            setMessage((prev) => {
                return { ...prev, showMsg: true, msgText: "Logged In", msgColor: "greenMsg" }
            })
        }).catch(error => {
            setMessage((prev) => {
                return { ...prev, showMsg: true, msgText: error.message, msgColor: "redMsg" }
            })
        })


    }
    return (
        <div className="signupScreen">
            <form>
                <h1>Sign In</h1>
                <input type="email" ref={emailRef} placeholder="Email" />
                <input type="password" ref={passwordRef} placeholder="Password" />
                <button type="submit" onClick={signIn}>Sign In</button>
                <h4>
                    <span className="signupScreen__gray">New to Netlix?</span>
                    <span className="signupScreen__link" onClick={register}> Sign Up now.</span></h4>
                <h4 className={`${message.showMsg && message.msgColor}`}>{message.showMsg && message.msgText}</h4>
            </form>

        </div>
    )
}

export default SignUpScreen;