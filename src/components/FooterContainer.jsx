import styles from "./FooterContainer.module.css";

const FooterContainer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerMenus}>
        <div className={styles.footerMenuItem}>
          <div className={styles.explorerWidget}>
            <div className={styles.widget}>
              <h3 className={styles.explorer}>Explorer</h3>
              <div className={styles.list}>
                <div className={styles.item}>
                  <div className={styles.buttonElectric}>Electric bikes</div>
                </div>
                <div className={styles.item1}>
                  <div className={styles.buttonCity}>City bikes</div>
                </div>
                <div className={styles.item2}>
                  <div className={styles.buttonKids}>Kids' bikes</div>
                </div>
                <div className={styles.item3}>
                  <div className={styles.buttonAccessories}>Accessories</div>
                </div>
                <div className={styles.item4}>
                  <div className={styles.buttonOutlet}>Outlet</div>
                </div>
                <div className={styles.item5}>
                  <div className={styles.buttonBusiness}>Business</div>
                </div>
                <div className={styles.item6}>
                  <div className={styles.buttonInsurance}>
                    Insurance Electric
                  </div>
                </div>
                <div className={styles.item7}>
                  <div className={styles.buttonSize}>Size guide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerMenuItem1}>
          <div className={styles.aboutWidget}>
            <div className={styles.widget1}>
              <h3 className={styles.about}>About</h3>
              <div className={styles.list1}>
                <div className={styles.item8}>
                  <div className={styles.buttonAbout}>About us</div>
                </div>
                <div className={styles.item9}>
                  <div className={styles.buttonJournal}>Journal</div>
                </div>
                <div className={styles.item10}>
                  <div className={styles.buttonReviews}>Reviews</div>
                </div>
                <div className={styles.item11}>
                  <div className={styles.linkPress}>Press</div>
                </div>
                <div className={styles.item12}>
                  <div className={styles.buttonJobs}>Jobs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerMenuItem2}>
          <div className={styles.helpWidget}>
            <h3 className={styles.help}>Help</h3>
            <div className={styles.list2}>
              <div className={styles.item13}>
                <div className={styles.linkContact}>Contact</div>
              </div>
              <div className={styles.item14}>
                <div className={styles.linkFaq}>FAQ</div>
              </div>
              <div className={styles.item15}>
                <div className={styles.linkDelivery}>Delivery</div>
              </div>
              <div className={styles.item16}>
                <div
                  className={styles.linkAssembly}
                >{`Assembly & manuals`}</div>
              </div>
              <div className={styles.item17}>
                <div className={styles.buttonPayment}>Payment options</div>
              </div>
              <div className={styles.item18}>
                <div className={styles.buttonPrivacy}>Privacy policy</div>
              </div>
              <div className={styles.item19}>
                <div className={styles.linkTerms}>{`Terms & conditions`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerEmailSubscriptionconta}>
        <div className={styles.joinTheRideWidget}>
          <div className={styles.footerEmailSubscriptionText}>
            <div className={styles.footerMenuTitleDesktop}>
              <h3 className={styles.joinTheRide}>Join the ride.</h3>
            </div>
            <div className={styles.footerEmailSubscriptionDesc}>
              <div className={styles.signUpFor}>
                Sign up for our newsletter.
              </div>
            </div>
          </div>
          <div className={styles.form}>
            <div className={styles.footerEmailSubscriptionForm}>
              <div className={styles.input}>
                <div className={styles.placeholder}>
                  <div className={styles.enterYourEmail}>
                    Enter your email address here
                  </div>
                </div>
              </div>
              <button className={styles.button}>
                <div className={styles.subscribe}>Subscribe</div>
              </button>
            </div>
            <div className={styles.footerEmailPrivacyPolicy}>
              <div className={styles.footerCheckbox}>
                <input className={styles.inputMargin} type="checkbox" />
                <div className={styles.footerEmailSubscriptionDesc1}>
                  <div className={styles.footerEmailSubscriptionDesc2}>
                    <div className={styles.paragraph}>
                      <div className={styles.bySigningUpContainer}>
                        {`By signing up, I agree to the `}
                        <span className={styles.privacyPolicy}>
                          privacy policy
                        </span>{" "}
                        of Veloretti.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footerSocialIconsContainer}>
            <div className={styles.footerSocial}>
              <div className={styles.link}>
                <div className={styles.svg}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector-15.svg"
                  />
                </div>
              </div>
              <div className={styles.link1}>
                <div className={styles.svg1}>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector-16.svg"
                  />
                </div>
              </div>
              <div className={styles.link2}>
                <div className={styles.svg2}>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="/vector-17.svg"
                  />
                </div>
              </div>
              <div className={styles.link3}>
                <div className={styles.svg3}>
                  <img
                    className={styles.vectorIcon3}
                    alt=""
                    src="/vector-18.svg"
                  />
                </div>
              </div>
              <div className={styles.link4}>
                <div className={styles.svg4}>
                  <img
                    className={styles.vectorIcon4}
                    alt=""
                    src="/vector-19.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.footerTopScrollButton}>
        <div className={styles.svg5}>
          <img className={styles.vectorIcon5} alt="" src="/vector-20.svg" />
        </div>
      </button>
    </div>
  );
};

export default FooterContainer;
