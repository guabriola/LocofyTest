import styles from "./FooterBackground.module.css";

const FooterBackground = () => {
  return (
    <div className={styles.footerBackground}>
      <div className={styles.footerCustomWrapper}>
        <div className={styles.footerCustomText}>
          <div className={styles.paragraph}>
            <div className={styles.readyToTakeContainer}>
              <p className={styles.readyToTake}>
                Ready to take the Electric Ivy or Ace for a spin? Electric test
                rides are now available in
              </p>
              <p className={styles.amsterdamAmstelveenAbcoude}>
                Amsterdam, Amstelveen, Abcoude, Bussum, Den Haag, Nijmegen,
                Weesp, Wormerveer,
              </p>
              <p className={styles.berlinHamburgAnd}>
                Berlin, Hamburg and Munich. Schedule your test ride now and
                we'll see you there.
              </p>
            </div>
          </div>
        </div>
        <button className={styles.buttonWrap}>
          <div className={styles.buttonTitle}>
            <div className={styles.bookNow}>BOOK NOW</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default FooterBackground;
