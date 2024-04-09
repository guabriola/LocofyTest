import { FunctionComponent } from "react";
import Item from "./Item";
import styles from "./TextMediaElement.module.css";

const TextMediaElement: FunctionComponent = () => {
  return (
    <div className={styles.textMediaElement}>
      <div className={styles.textMediaStaticForegroundWrapper}>
        <div className={styles.textMediaStaticForeground}>
          <div className={styles.wrapper}>
            <div className={styles.textMediaStaticText}>
              <div className={styles.textMediaStaticTextWithVi}>
                <h1 className={styles.heading3}>How it works</h1>
                <div className={styles.orderedList}>
                  <div className={styles.item}>
                    <div className={styles.wrap}>
                      <div className={styles.textNumber}>
                        <div className={styles.before} />
                      </div>
                      <div className={styles.heading4}>
                        <h3 className={styles.registerYourCompany}>
                          Register your company
                        </h3>
                      </div>
                    </div>
                    <div className={styles.wrap1}>
                      <div className={styles.paragraph}>
                        <div className={styles.fillInOurContainer}>
                          <p className={styles.fillInOur}>
                            Fill in our registration form with your company
                            details. After
                          </p>
                          <p className={styles.yourRegistrationOur}>
                            your registration, our leasing partner will do a
                            credit check. You
                          </p>
                          <p className={styles.willHearWhether}>
                            will hear whether your application has been approved
                            within 24
                          </p>
                          <p className={styles.hours}>hours.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Item
                    determineTheRequirements="Determine the requirements"
                    youGetAccesToTheDigitalPl="You get acces to the digital platform. Set the requirements for"
                    yourEmployeesAndShareTheR="your employees and share the registration link."
                  />
                  <Item
                    determineTheRequirements="Ride your bike!"
                    youGetAccesToTheDigitalPl="Let's go! Your employees can choose their bikes and they'll be"
                    yourEmployeesAndShareTheR="delivered straight to their homes."
                    propAlignSelf="unset"
                    propPadding="0px var(--padding-266xl) 0px 0px"
                    propWidth="480.9px"
                    propPadding1="var(--padding-9xs) var(--padding-smi-2) 0px var(--padding-4xs)"
                    propMinWidth="108px"
                  />
                  <Item
                    determineTheRequirements="Administration"
                    youGetAccesToTheDigitalPl="Everything in one place. The digital platform gives you an easy"
                    yourEmployeesAndShareTheR="overview of all the information for your payroll."
                    propAlignSelf="unset"
                    propPadding="0px var(--padding-266xl-6) 0px 0px"
                    propWidth="479.9px"
                    propPadding1="var(--padding-9xs) var(--padding-3xs) 0px var(--padding-4xs)"
                    propMinWidth="107px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divtextMediaStaticBackgrou}>
        <div className={styles.divvideoWrapperOhsyy}>
          <div className={styles.divsizingSmall}>
            <div className={styles.divh2dA1613f55} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextMediaElement;
