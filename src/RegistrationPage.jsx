
import styles from "./RegistrationPage.module.css"; 

function RegistrationPage() {
  return (
    <div className={styles.registration_container}>
      <form className={styles.registration_form}>
        <h2 className={styles.form_title}>Registration Form</h2>

        
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

        {/* City & State */}
        <div className={styles.form_row}>
          <div className={styles.form_col}>
            <label>City</label>
            <input type="text" placeholder="City" />
          </div>
          <div className={styles.form_col}>
            <label>State</label>
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
          <label htmlFor="gridCheck">Check me out</label>
        </div>


        <button type="submit" className={styles.submit_btn}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default RegistrationPage;
