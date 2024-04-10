import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import Section3 from "./Section3";
import TextMediaElement from "./TextMediaElement";
import Section2 from "./Section2";
import Section1 from "./Section1";
import Section from "./Section";
import FooterBackground from "./FooterBackground";
import FooterContainer from "./FooterContainer";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <div className={styles.nav}>
          <div className={styles.link}>
            <img
              className={styles.icon}
              loading="lazy"
              alt=""
              src="/frame.svg"
            />
          </div>
          <div className={styles.list}>
            <div className={styles.item}>
              <Form.Select className={styles.buttonFormselect} />
            </div>
            <div className={styles.item1}>
              <Form.Select className={styles.buttonFormselect1} />
            </div>
            <div className={styles.item2}>
              <select className={styles.button} />
            </div>
            <div className={styles.item3}>
              <div className={styles.button1}>
                <div className={styles.menuTitle}>
                  <div className={styles.menuTitleFrame}>
                    <div className={styles.accessories}>Accessories</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.item4}>
              <div className={styles.button2}>
                <div className={styles.menuTitle1}>
                  <div className={styles.menuTitleFrame1}>
                    <div className={styles.stores}>Stores</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.item5}>
              <select className={styles.button3} />
            </div>
          </div>
          <div className={styles.controlsMargin}>
            <div className={styles.wrapper}>
              <div className={styles.languageWrap}>
                <div className={styles.button4}>
                  <div className={styles.label}>
                    <div className={styles.en}>en</div>
                  </div>
                  <div className={styles.ukSvg}>
                    <div className={styles.svg}>
                      <div className={styles.div}>
                        <img
                          className={styles.maskGroupIcon}
                          loading="lazy"
                          alt=""
                          src="/mask-group@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accountWrap}>
                <div className={styles.button5}>
                  <div className={styles.label1}>
                    <div className={styles.svg1}>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector-4.svg"
                      />
                      <img
                        className={styles.vectorIcon1}
                        alt=""
                        src="/vector-5.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.cartWrap}>
                <div className={styles.label2}>
                  <div className={styles.svg2}>
                    <img
                      className={styles.vectorIcon2}
                      alt=""
                      src="/vector-6.svg"
                    />
                    <img
                      className={styles.vectorIcon3}
                      alt=""
                      src="/vector-7.svg"
                    />
                    <img
                      className={styles.vectorIcon4}
                      alt=""
                      src="/vector-8.svg"
                    />
                    <img
                      className={styles.vectorIcon5}
                      alt=""
                      src="/vector-9.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className={styles.mainParent}>
        <section className={styles.main}>
          <div className={styles.heroSection}>
            <div className={styles.container}>
              <div className={styles.smallHeading}>
                <div className={styles.velorettiBusiness}>
                  VELORETTI BUSINESS
                </div>
              </div>
              <div className={styles.largeHeading}>
                <h1 className={styles.bikeLeasePlanContainer}>
                  <span>
                    <p className={styles.bikeLeasePlan}>
                      Bike lease plan for employees.
                    </p>
                  </span>
                </h1>
              </div>
            </div>
          </div>
          <div className={styles.aboutSection}>
            <div className={styles.container1}>
              <div className={styles.textMediaStaticBackground}>
                <div className={styles.wrapper1}>
                  <img
                    className={styles.imageIcon}
                    loading="lazy"
                    alt=""
                    src="/image@2x.png"
                  />
                </div>
              </div>
              <div className={styles.textMediaStaticForeground}>
                <div className={styles.desktopWrapper}>
                  <div className={styles.textMediaStaticText}>
                    <div className={styles.aboutText}>
                      <div className={styles.heading3}>
                        <h1 className={styles.bikePlansForContainer}>
                          <p className={styles.bikePlansFor}>Bike plans for</p>
                          <p className={styles.employees}>employees.</p>
                        </h1>
                      </div>
                      <div className={styles.paragraph}>
                        <div
                          className={styles.velorettiElectricsBenefitContainer}
                        >
                          <p className={styles.velorettiElectricsBenefit}>
                            Veloretti Electrics benefit both the environment and
                            the health of
                          </p>
                          <p className={styles.yourEmployeesOh}>
                            your employees. Oh, and they look good too.
                            Cost-free for the
                          </p>
                          <p className={styles.employerAndOutside}>
                            employer and outside of the WKR.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.popupButton}>
                      <div className={styles.buttonText}>
                        <div className={styles.buttonTitle}>
                          <div className={styles.discoverMore}>
                            Discover more
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Section3 />
          <div className={styles.section}>
            <div className={styles.textMediaElement}>
              <div className={styles.textMediaStaticBackground1}>
                <div className={styles.backgroundImage}>
                  <img
                    className={styles.bikeImagejpegIcon}
                    loading="lazy"
                    alt=""
                    src="/bikeimagejpeg@2x.png"
                  />
                </div>
              </div>
              <div className={styles.textMediaStaticForeground1}>
                <div className={styles.wrapper2}>
                  <div className={styles.textMediaStaticText1}>
                    <div className={styles.headings}>
                      <div className={styles.wrapper3}>
                        <h1 className={styles.freeOfChargeContainer}>
                          <p className={styles.freeOfCharge}>
                            Free of charge for
                          </p>
                          <p className={styles.employers}>employers</p>
                        </h1>
                      </div>
                      <div className={styles.paragraph1}>
                        <div className={styles.theBikePlanContainer}>
                          <p className={styles.theBikePlan}>
                            The bike plan is totally independent of the WKR and
                            is free for you as
                          </p>
                          <p className={styles.anEmployerThe}>
                            an employer. The employee pays the lease costs and
                            you, as the
                          </p>
                          <p className={styles.employerDecideWhether}>
                            employer, decide whether you want to contribute to
                            the costs.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.popupbuttonButtonApmwo}>
                      <div className={styles.buttonText1}>
                        <div className={styles.buttonTitle1}>
                          <div className={styles.costExample}>Cost example</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TextMediaElement />
          <Section2 />
          <Section1 />
          <Section />
        </section>
        <footer className={styles.footer}>
          <FooterBackground />
          <FooterContainer />
        </footer>
      </main>
    </div>
  );
};

export default Home;
