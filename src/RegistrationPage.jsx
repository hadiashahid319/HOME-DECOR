import styles from "./RegistrationPage.module.css";
import bgImage from "./assets/HOM/login.jpg";

function RegistrationPage() {
  return (
    <div
      className={styles.page_container}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.registration_container}>
        <form className={styles.registration_form}>
          <h2 className={styles.form_title}>Create Your Account</h2>
          <p className={styles.form_subtitle}>Fill in the details below to sign up</p>

          <div className={styles.form_row}>
            <div className={styles.form_col}>
              <label>First Name</label>
              <input type="text" placeholder="Enter first name" />
            </div>
            <div className={styles.form_col}>
              <label>Last Name</label>
              <input type="text" placeholder="Enter last name" />
            </div>
          </div>

          <div className={styles.form_row}>
            <div className={styles.form_col}>
              <label>Email</label>
              <input type="email" placeholder="Enter email" />
            </div>
            <div className={styles.form_col}>
              <label>Password</label>
              <input type="password" placeholder="Enter password" />
            </div>
          </div>

          <div className={styles.form_row}>
            <div className={`${styles.form_col} ${styles.full}`}>
              <label>Address 1</label>
              <input type="text" placeholder="1234 Main St" />
            </div>
          </div>

          <div className={styles.form_row}>
            <div className={`${styles.form_col} ${styles.full}`}>
              <label>Address 2</label>
              <input type="text" placeholder="Apartment, studio, or floor" />
            </div>
          </div>

          <div className={styles.form_row}>
            <div className={styles.form_col}>
              <label>City</label>
              <input type="text" placeholder="City" />
            </div>
            <div className={styles.form_col}>
              <label>Province</label>
              <select>
                <option>Choose...</option>
                <option>Punjab</option>
                <option>Sindh</option>
                <option>KPK</option>
                <option>Balochistan</option>
              </select>
            </div>
          </div>

          <div className={styles.checkbox_row}>
            <input type="checkbox" id="gridCheck" />
            <label htmlFor="gridCheck">I agree to the Terms & Conditions</label>
          </div>

          <button type="submit" className={styles.submit_btn}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationPage;
