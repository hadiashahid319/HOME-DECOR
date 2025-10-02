import React from "react";
import styles from "./Login.module.css"; 
import fourth from "./assets/HOM/login.jpg";

function Login() {
  return (
    <div className={styles.login_container}>
      <div className={`row ${styles.login_layout} shadow rounded`}>
        
        {/* Left side form */}
        <div className="col-md-6 d-flex flex-column justify-content-center p-4">
          <header className="text-center mb-4">
            <h1 className={styles.brand_name}>NOVALIE</h1>
          </header>

          <h2 className={styles.tag_bar}>WELCOME BACK</h2>

          <form className={styles.form}>
            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className={styles.label}>Email</label>
              <input 
                type="email" 
                id="email" 
                className={styles.input} 
                placeholder="Enter your email" 
                required 
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label htmlFor="password" className={styles.label}>Password</label>
              <input 
                type="password" 
                id="password" 
                className={styles.input} 
                placeholder="Enter your password" 
                required 
              />
            </div>

            {/* Forgot Password */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <a href="#forgot" className={styles.link}>Forgot Password?</a>
            </div>

            {/* Button */}
            <button type="submit" className={styles.submit_btn}>Sign In</button>

            {/* Sign Up */}
            <div className="text-center mt-3">
              Don’t have an account?{" "}
              <a href="#signup" className={styles.link_bold}>Sign Up</a>
            </div>
          </form>
        </div>

        {/* Right side image */}
        <div className="col-md-6 d-none d-md-flex justify-content-center align-items-center p-0">
          <img
            src={fourth}
            alt="Decor"
            className={`img-fluid ${styles.login_img}`}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
