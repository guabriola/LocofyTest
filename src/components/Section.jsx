import styles from "./Section.module.css";

const Section = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading2}>
          <div className={styles.span}>
            <h1 className={styles.anyQuestions}>Any questions?</h1>
          </div>
        </div>
        <div className={styles.container1}>
          <div className={styles.accordion1}>
            <div className={styles.button}>
              <h2 className={styles.whatAboutThe}>What about the paperwork?</h2>
              <h2 className={styles.h2}>-</h2>
            </div>
            <div className={styles.accordionContent}>
              <div className={styles.paragraph}>
                <div className={styles.theBicyclePlanContainer}>
                  <p className={styles.theBicyclePlan}>
                    The bicycle plan is set up so that there will be no
                    administrative work on your part as the employer. You can
                    use a free online platform
                  </p>
                  <p className={styles.thatHasBeen}>
                    that has been created by our leasing partner. This provides
                    you with a simple overview of your business and your
                    employees, allowing
                  </p>
                  <p className={styles.youToArrange}>
                    you to arrange everything. It also simplifies all the
                    paperwork. Everything is organised with just a few clicks.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.accordion2}>
            <div className={styles.button1}>
              <h2 className={styles.howDoesIt}>
                How does it work with an employee who retires early?
              </h2>
              <h2 className={styles.h21}>+</h2>
            </div>
          </div>
          <div className={styles.accordion3}>
            <div className={styles.button2}>
              <h2 className={styles.whatDoesA}>
                What does a Veloretti Bike Plan cost for an employer?
              </h2>
              <h2 className={styles.h22}>+</h2>
            </div>
          </div>
          <div className={styles.accordion4}>
            <div className={styles.button3}>
              <div className={styles.spanh2d47a5148e}>
                <h2 className={styles.howIsTheContainer}>
                  <p
                    className={styles.howIsThe}
                  >{`How is the insurance & maintenance arranged when leasing a Veloretti`}</p>
                  <p className={styles.bike}>bike?</p>
                </h2>
              </div>
              <h2 className={styles.h23}>+</h2>
            </div>
          </div>
          <div className={styles.accordion5}>
            <div className={styles.button4}>
              <h2 className={styles.whatAreThe}>
                What are the legal requirements for the Veloretti bicycle plan?
              </h2>
              <h2 className={styles.h24}>+</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
