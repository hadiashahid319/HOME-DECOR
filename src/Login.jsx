import React from "react";
import styles from "./Login.module.css"; 
import sideImage from "./assets/HOM/login.jpg";
import logo from "./assets/HOM/logo.png";

function Login() {
  return (
    <div className={styles.mainContainer}>
      <div className={`${styles.loginBox} shadow-lg rounded-3 d-flex`}>
        {/* LEFT SIDE (form) */}
        <div className={styles.formSection}>
          <div className="text-center mb-3">
            <img
              src={logo}
              alt="logo"
              className={styles.logo}
            />
          </div>
          <h2 className="fw-bold text-center">COZY CORNER</h2>
          <h5 className={styles.subHeading}>WELCOME BACK</h5>

          <label>Email</label>
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Enter your email"
          />

          <label>Password</label>
          <input
            type="password"
            className="form-control mb-2"
            placeholder="Enter your password"
          />

          <small className="d-block mb-2 text-end text-muted">
            Forgot Password?
          </small>

          <button className={styles.signInBtn}>Sign In</button>

          <p className="text-center mt-3">
            Don’t have an account? <a href="#">Sign Up</a>
          </p>
        </div>

        {/* RIGHT SIDE (image grid) */}
        <div className={styles.imageSection}>
          <img src={sideImage} alt="side" className={styles.sideImage} />
        </div>
      </div>
    </div>
  );
}

export default Login;
