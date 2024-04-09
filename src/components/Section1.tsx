import { FunctionComponent } from "react";
import styles from "./Section1.module.css";

const Section1: FunctionComponent = () => {
  return (
    <div className={styles.section}>
      <div className={styles.section1}>
        <div className={styles.heading2}>
          <div className={styles.span}>
            <h1 className={styles.getInTouch}>Get in touch</h1>
          </div>
        </div>
        <div className={styles.form}>
          <div className={styles.input}>
            <input
              className={styles.placeholder}
              placeholder="First name  "
              type="text"
            />
          </div>
          <div className={styles.input1}>
            <input
              className={styles.placeholder1}
              placeholder="Last name  "
              type="text"
            />
          </div>
          <div className={styles.input2}>
            <input
              className={styles.placeholder2}
              placeholder="Email address  "
              type="text"
            />
          </div>
          <div className={styles.input3}>
            <input
              className={styles.placeholder3}
              placeholder="Phone number  "
              type="text"
            />
          </div>
          <div className={styles.input4}>
            <input
              className={styles.placeholder4}
              placeholder="Company name  "
              type="text"
            />
          </div>
          <div className={styles.button}>
            <div className={styles.placeholder5}>
              <div className={styles.companySize}>Company Size</div>
            </div>
            <div className={styles.submenuSvg}>
              <img className={styles.vectorIcon} alt="" src="/vector-14.svg" />
            </div>
          </div>
          <div className={styles.input5}>
            <input
              className={styles.placeholder6}
              placeholder="Number of bikes  "
              type="text"
            />
          </div>
          <textarea
            className={styles.textarea}
            placeholder="How can we help"
            rows={15}
            cols={47}
          />
          <button className={styles.button1}>
            <div className={styles.sendTheRequest}>Send the request</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section1;
