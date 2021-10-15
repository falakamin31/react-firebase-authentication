/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { auth, sendPasswordResetEmail } from "../services/firebase";
import "../stylesheets/Reset.scss";

const Reset = () => {
    const [email, setEmail] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();
    useEffect(() => {
      if (loading) return;
      if (user) history.replace("/dashboard");
    }, [user, loading]);
    return (
      <div className="reset">
        <div className="reset__container">
          <input
            type="text"
            className="reset__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <button
            className="reset__btn"
            onClick={() => sendPasswordResetEmail(email)}
          >
            Send password reset email
          </button>
          <div>
            Don't have an account? <Link to="/register">Register</Link> now.
          </div>
        </div>
      </div>
    );
}

export default Reset
