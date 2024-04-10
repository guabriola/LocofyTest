import styles from "./Section3.module.css";

const Section3 = () => {
  return (
    <div className={styles.section}>
      <div className={styles.textMediaNewWrapper}>
        <div className={styles.textMediaNewBackground}>
          <div className={styles.backgroundImage}>
            <img
              className={styles.imagejpegIcon}
              loading="lazy"
              alt=""
              src="/imagejpeg@2x.png"
            />
          </div>
        </div>
        <div className={styles.textMediaNewForeground}>
          <div className={styles.wrapper}>
            <div className={styles.wrapper1}>
              <div className={styles.heading3}>
                <h1 className={styles.serviceMaintenanceAndContainer}>
                  <p className={styles.service}>Service,</p>
                  <p className={styles.maintenanceAnd}>maintenance and</p>
                  <p className={styles.insurance}>insurance</p>
                </h1>
              </div>
              <div className={styles.paragraph}>
                <div className={styles.theLeaseIncludesContainer}>
                  <p className={styles.theLeaseIncludes}>
                    The lease includes an all-in service package.
                  </p>
                  <p className={styles.throughoutTheEntire}>
                    Throughout the entire 36 months, you are
                  </p>
                  <p className={styles.fullyInsuredAgainst}>
                    fully insured against damage, theft and
                  </p>
                  <p className={styles.maintenanceInAddition}>
                    maintenance. In addition, you always have
                  </p>
                  <p
                    className={styles.accessToRoadside}
                  >{`access to roadside assistance. `}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
