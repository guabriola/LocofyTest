import ChooseType from "./ChooseType";
import Span from "./Span";
import styles from "./SingleProductPage.module.css";

const SingleProductPage = () => {
  return (
    <div className={styles.singleProductPage}>
      <header className={styles.header}>
        <div className={styles.nav}>
          <div className={styles.link}>
            <img
              className={styles.frameIcon}
              loading="lazy"
              alt=""
              src="/frame1.svg"
            />
          </div>
          <div className={styles.list}>
            <div className={styles.item}>
              <div className={styles.button}>
                <div className={styles.menuTitle}>
                  <div className={styles.electric}>Electric</div>
                </div>
                <div className={styles.submenuIcon}>
                  <div className={styles.submenuIconFrame}>
                    <div className={styles.svg}>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/copyright---smile-citadel-all-rights-reserve.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.item1}>
              <div className={styles.button1}>
                <div className={styles.menuTitle1}>
                  <div className={styles.city}>City</div>
                </div>
                <div className={styles.submenuIcon1}>
                  <div className={styles.submenuIconFrame1}>
                    <div className={styles.svg1}>
                      <img
                        className={styles.vectorIcon1}
                        alt=""
                        src="/vector-110.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.item2}>
              <div className={styles.button2}>
                <div className={styles.menuTitle2}>
                  <div className={styles.kids}>Kids</div>
                </div>
                <div className={styles.submenuIcon2}>
                  <div className={styles.submenuIconFrame2}>
                    <div className={styles.svg2}>
                      <img
                        className={styles.vectorIcon2}
                        alt=""
                        src="/vector-25.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.item3}>
              <div className={styles.button3}>
                <div className={styles.menuTitle3}>
                  <div className={styles.menuTitleFrame}>
                    <div className={styles.accessories}>Accessories</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.item4}>
              <div className={styles.button4}>
                <div className={styles.menuTitle4}>
                  <div className={styles.menuTitleFrame1}>
                    <div className={styles.stores}>Stores</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.item5}>
              <div className={styles.button5}>
                <div className={styles.menuTitle5}>
                  <div className={styles.leasing}>Leasing</div>
                </div>
                <div className={styles.submenuIcon3}>
                  <div className={styles.submenuIconFrame3}>
                    <div className={styles.svg3}>
                      <img
                        className={styles.vectorIcon3}
                        alt=""
                        src="/vector-31.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.controlsMargin}>
            <div className={styles.wrapper}>
              <div className={styles.languageWrap}>
                <div className={styles.button6}>
                  <div className={styles.label}>
                    <div className={styles.en}>en</div>
                  </div>
                  <div className={styles.ukSvg}>
                    <div className={styles.svg4}>
                      <div className={styles.frame}>
                        <img
                          className={styles.maskGroupIcon}
                          alt=""
                          src="/mask-group@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accountWrap}>
                <div className={styles.button7}>
                  <div className={styles.label1}>
                    <div className={styles.svg5}>
                      <img
                        className={styles.vectorIcon4}
                        alt=""
                        src="/vector-42.svg"
                      />
                      <img
                        className={styles.vectorIcon5}
                        alt=""
                        src="/vector-51.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.cartWrap}>
                <div className={styles.label2}>
                  <div className={styles.svg6}>
                    <img
                      className={styles.vectorIcon6}
                      alt=""
                      src="/vector-62.svg"
                    />
                    <img
                      className={styles.vectorIcon7}
                      alt=""
                      src="/vector-72.svg"
                    />
                    <img
                      className={styles.vectorIcon8}
                      alt=""
                      src="/vector-81.svg"
                    />
                    <img
                      className={styles.vectorIcon9}
                      alt=""
                      src="/vector-92.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.containerParent}>
          <div className={styles.container}>
            <div className={styles.productViewSliderWrapper}>
              <div className={styles.slider}>
                <div className={styles.keenSlider}>
                  <div className={styles.productImage}>
                    <div className={styles.wrapper1}>
                      <div className={styles.span}>
                        <img
                          className={styles.imageIcon}
                          alt=""
                          src="/image3@2x.png"
                        />
                      </div>
                      <div className={styles.productImageBackground}>
                        <div className={styles.span1}>
                          <img
                            className={styles.imageIcon1}
                            alt=""
                            src="/image-11@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.sliderDotsContainer}>
                  <div className={styles.buttonMargin}>
                    <div className={styles.button8} />
                  </div>
                  <div className={styles.buttonMargin1}>
                    <div className={styles.button9} />
                  </div>
                  <div className={styles.buttonMargin2}>
                    <div className={styles.button10} />
                  </div>
                </div>
                <div className={styles.leftArrowSvg}>
                  <img
                    className={styles.vectorIcon10}
                    loading="lazy"
                    alt=""
                    src="/vector-102.svg"
                  />
                </div>
                <div className={styles.rightArrowSvg}>
                  <img
                    className={styles.vectorIcon11}
                    loading="lazy"
                    alt=""
                    src="/vector-112.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.productViewTitleParent}>
              <div className={styles.productViewTitle}>
                <div className={styles.button11}>
                  <div className={styles.heading1}>
                    <div className={styles.electricIvy}>Electric Ivy</div>
                    <div className={styles.two}>Two</div>
                  </div>
                  <div className={styles.svgMargin}>
                    <div className={styles.svg7}>
                      <div className={styles.frame1}>
                        <img
                          className={styles.vectorIcon12}
                          alt=""
                          src="/vector-122.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.productPricePriceWrapper}>
                  <div className={styles.spanProductPricePrice}>
                    <div className={styles.div}>€ 3.299</div>
                  </div>
                </div>
              </div>
              <div className={styles.productViewBikeSelector}>
                <ChooseType
                  image="/image-22@2x.png"
                  electricAce="Electric Ace"
                />
                <ChooseType
                  image="/image-31@2x.png"
                  electricAce="Electric Ivy"
                  propBorder="2px solid var(--download-black)"
                  propPadding="var(--padding-11xs) 0px"
                  propAlignSelf="unset"
                  propWidth="96px"
                  propMinWidth="64px"
                />
              </div>
              <div className={styles.productViewDividerParent}>
                <div className={styles.productViewDivider} />
                <div className={styles.productViewColorSwatchesWr}>
                  <div className={styles.wrapper2}>
                    <div className={styles.heading}>
                      <div className={styles.ivyTwoMatte}>
                        Ivy Two Matte Black
                      </div>
                    </div>
                    <div className={styles.productViewColorSwatches}>
                      <div className={styles.wrapper3}>
                        <div className={styles.productViewButtonWrapper}>
                          <div className={styles.colorSwatchSwatchContainer}>
                            <div className={styles.button12} />
                          </div>
                        </div>
                        <div className={styles.productViewButtonWrapper1}>
                          <div className={styles.colorSwatchSwatchContainer1}>
                            <div className={styles.button13} />
                          </div>
                        </div>
                        <div className={styles.productViewButtonWrapper2}>
                          <div className={styles.colorSwatchSwatchContainer2}>
                            <div className={styles.button14} />
                          </div>
                        </div>
                        <div className={styles.productViewButtonWrapper3}>
                          <div className={styles.colorSwatchSwatchContainer3}>
                            <img
                              className={styles.buttonIcon}
                              loading="lazy"
                              alt=""
                              src="/button@2x.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.productViewDivider1} />
                <div className={styles.productViewKlarnaMessageCo}>
                  <div className={styles.container1}>
                    <div className={styles.button15}>
                      <div
                        className={styles.interestFreePaymentsWith}
                      >{`3 interest-free payments with `}</div>
                      <div className={styles.svg8}>
                        <img
                          className={styles.conditionCheckerIcon}
                          loading="lazy"
                          alt=""
                          src="/vector-132.svg"
                        />
                        <img
                          className={styles.scoreCalculatorIcon}
                          alt=""
                          src="/vector-142.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.sequenceDetector}>
                <div className={styles.theIvyTwoContainer}>
                  <p className={styles.theIvyTwo}>
                    The Ivy Two is a step-through frame electric bike combining
                    design, advanced
                  </p>
                  <p className={styles.technologyAndSafety}>
                    technology, and safety features. Rider height: between 164
                    and 184cm.
                  </p>
                </div>
              </div>
              <div className={styles.errorHandler}>
                <div className={styles.button16}>
                  <div className={styles.scrollToSpecifications}>
                    Scroll to Specifications
                  </div>
                  <div className={styles.svgmargin}>
                    <div className={styles.svg9}>
                      <div className={styles.frame2}>
                        <img
                          className={styles.vectorIcon13}
                          alt=""
                          src="/vector-152.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.productViewButtonContainer}>
                  <button className={styles.button17}>
                    <div className={styles.buttonText}>
                      <div className={styles.buttonTitle}>
                        <div className={styles.customiseNow}>Customise now</div>
                      </div>
                    </div>
                  </button>
                </div>
                <div className={styles.productViewDivider2}>
                  <div className={styles.divider} />
                </div>
                <div className={styles.shippingInfoShippingMessage}>
                  <div className={styles.wrapper4}>
                    <div className={styles.shippingInfoBold}>
                      <div
                        className={styles.shippingToThe}
                      >{`Shipping to the Netherlands, Belgium & Germany only.`}</div>
                    </div>
                    <div className={styles.paragraph}>
                      <div className={styles.deliveryTime515}>
                        Delivery time: 5-15 business days
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.textMediaElement}>
            <div className={styles.textMediaStaticForeground}>
              <div className={styles.textMediaStaticTextWithVi}>
                <div className={styles.heading2}>
                  <h1 className={styles.removableLongRangeContainer}>
                    <p className={styles.removableLong}>Removable long-</p>
                    <p className={styles.rangeBattery}>range battery</p>
                  </h1>
                </div>
                <div className={styles.paragraph1}>
                  <div className={styles.rechargeAnytimeAnywhereContainer}>
                    <p className={styles.rechargeAnytimeAnywhere}>
                      Recharge anytime, anywhere. Our in-house developed battery
                      is
                    </p>
                    <p className={styles.builtToGo}>
                      built to go the distance. With a powerful 540 Wh and an
                      impressive
                    </p>
                    <p className={styles.rangeOfUp}>
                      range of up to 120km, you'll have the freedom to explore
                      without
                    </p>
                    <p className={styles.worryingAboutRunning}>
                      worrying about running out of power. And if you do need to
                    </p>
                    <p className={styles.rechargeOurRemovable}>
                      recharge, our removable and smart battery pack can be
                      easily
                    </p>
                    <p className={styles.detachedAndCharged}>
                      detached and charged with any electrical outlet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section1}>
          <div className={styles.textMediaElement1}>
            <div className={styles.textMediaStaticForeground1}>
              <div className={styles.textMediaStaticText}>
                <h1 className={styles.heading21}>Ivy Two</h1>
                <div className={styles.paragraph2}>
                  <div className={styles.introducingTheIvyContainer}>
                    <p className={styles.introducingTheIvy}>
                      Introducing the Ivy Two, the electric bike that takes your
                    </p>
                    <p className={styles.dailyCommuteTo}>
                      daily commute to the next level. With an accessible
                    </p>
                    <p className={styles.lowerFrameThe}>
                      lower frame, the latest technology, and safety features,
                    </p>
                    <p className={styles.theIvyDelivers}>
                      the Ivy delivers instant power, convenience, and peace
                    </p>
                    <p className={styles.ofMindAt}>
                      of mind at every turn, making it the go-to bike for any
                    </p>
                    <p className={styles.commuteEquippedWith}>
                      commute. Equipped with a bright LED brake light for
                    </p>
                    <p className={styles.enhancedVisibilityAnd}>
                      enhanced visibility and safety tracking for added
                    </p>
                    <p className={styles.securityTheIvy}>
                      security, the Ivy Two is the perfect combination of
                    </p>
                    <p className={styles.designTechnologyAnd}>
                      design, technology, and safety.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.textMediaStaticBackground}>
              <div className={styles.span2}>
                <img
                  className={styles.imageIcon2}
                  loading="lazy"
                  alt=""
                  src="/image-41@2x.png"
                />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section2}>
          <div className={styles.textMediaElement2}>
            <div className={styles.textMediaStaticBackground1}>
              <div className={styles.videoWrapper}>
                <div className={styles.video}>
                  <img
                    className={styles.imageIcon3}
                    loading="lazy"
                    alt=""
                    src="/image-51@2x.png"
                  />
                </div>
              </div>
            </div>
            <Span
              discoverYour="Silent and"
              localVeloretti="powerful mid-"
              partnerStore="motor"
              ourPartnerStoresAcrossThe="Natural and powerful. The 65Nm torque mid-engine"
              areThereForYouWhetherYour="gives you all the power you need. Because the engine is"
              pickUpANewlyOrderedBikeNe="directly connected to your pedals, it automatically"
              wantToTakeATestRideOnOurI="adjusts its power to your torque instead of speed. This"
              yourIdealBikingExperience="gives you the most natural electric biking experience"
              youThink="there is."
              propAlignSelf="unset"
              propFlex="0.5294"
              propPadding="var(--padding-xl) var(--padding-150xl-4)"
              propMinWidth="468px"
              propPadding1="unset"
              propPadding2="0px var(--padding-15xl) 0px 0px"
              propColor="#141615"
              propWidth="unset"
              propPadding3="0px var(--padding-12xs) 0px 0px"
              propAlignSelf1="stretch"
              propColor1="rgba(20, 22, 21, 0.4)"
            />
          </div>
        </section>
        <section className={styles.section3}>
          <div className={styles.textMediaNewWrapper}>
            <div className={styles.textMediaNewBackground}>
              <div className={styles.videoWrapper1}>
                <div className={styles.video1}>
                  <img
                    className={styles.imageIcon4}
                    loading="lazy"
                    alt=""
                    src="/image-61@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.textMediaNewForeground}>
              <div className={styles.headings}>
                <div className={styles.span3}>
                  <h1 className={styles.heading22}>Built-in display</h1>
                  <div className={styles.paragraph3}>
                    <div className={styles.discoverANewContainer}>
                      <p className={styles.discoverANew}>
                        Discover a new level of convenience and
                      </p>
                      <p className={styles.controlWithOur}>
                        control with our elegantly designed
                      </p>
                      <p className={styles.integratedDisplayEverything}>
                        integrated display. Everything you need to
                      </p>
                      <p className={styles.manageYourRide}>
                        manage your ride is right at your fingertips,
                      </p>
                      <p className={styles.fromCustomizingYour}>
                        from customizing your bike's settings to
                      </p>
                      <p className={styles.navigatingUnfamiliarParts}>
                        navigating unfamiliar parts of the city. And
                      </p>
                      <p className={styles.withSeamlessIntegration}>
                        with seamless integration to our app, you can
                      </p>
                      <p className={styles.accessAllYour}>
                        access all your data and ride information with
                      </p>
                      <p className={styles.ease}>ease.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section4}>
          <div className={styles.textMediaElement3}>
            <div className={styles.textMediaStaticForeground2}>
              <div className={styles.textMediaStaticTextWithVi1}>
                <div className={styles.heading23}>
                  <h1 className={styles.envioloAutomatedGearsContainer}>
                    <p className={styles.enviolo}>Enviolo®</p>
                    <p className={styles.automated}>automated</p>
                    <p className={styles.gears}>gears</p>
                  </h1>
                </div>
                <div className={styles.paragraph4}>
                  <div className={styles.neverThinkAboutContainer}>
                    <p className={styles.neverThinkAbout}>
                      Never think about shifting gears again. The Enviolo®
                    </p>
                    <p className={styles.gearSystemTakes}>
                      gear system takes automated gear-shifting to the next
                    </p>
                    <p className={styles.levelDeliveringThe}>
                      level, delivering the ultimate ride experience every time.
                    </p>
                    <p className={styles.thisAdvancedTechnology}>
                      This advanced technology effortlessly shifts gears to
                    </p>
                    <p className={styles.optimizePerformanceDeliveri}>
                      optimize performance, delivering a natural and
                    </p>
                    <p className={styles.effortlessRideSay}>
                      effortless ride. Say goodbye to clunky gear changes
                    </p>
                    <p className={styles.andHelloTo}>
                      and hello to a ride that's both easy and efficient.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.textMediaStaticBackground2}>
              <div className={styles.videoWrapper2}>
                <div className={styles.video2}>
                  <img
                    className={styles.imageIcon5}
                    loading="lazy"
                    alt=""
                    src="/image-7@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section5}>
          <div className={styles.textMediaElement4}>
            <div className={styles.textMediaStaticBackground3}>
              <div className={styles.span4}>
                <img
                  className={styles.imageIcon6}
                  loading="lazy"
                  alt=""
                  src="/image-8@2x.png"
                />
              </div>
            </div>
            <div className={styles.textMediaStaticForeground3}>
              <div className={styles.textMediaStaticText1}>
                <div className={styles.heading24}>
                  <h1 className={styles.gatesBeltDriveContainer}>
                    <p className={styles.gates}>Gates®</p>
                    <p className={styles.beltDrive}>belt drive</p>
                  </h1>
                </div>
                <div className={styles.paragraph5}>
                  <div className={styles.theGatesCarbonContainer}>
                    <p className={styles.theGatesCarbon}>
                      The Gates Carbon Belt drive is a game-changer. Made
                    </p>
                    <p className={styles.fromPremiumQuality}>
                      from premium quality carbon, it offers unmatched
                    </p>
                    <p className={styles.durabilityAndStrength}>
                      durability and strength. And the best part? You'll never
                    </p>
                    <p className={styles.haveToWorry}>
                      have to worry about oiling your chain again. With our
                    </p>
                    <p className={styles.carbonBeltYoull}>
                      carbon belt, you'll enjoy a seamless, hassle-free biking
                    </p>
                    <p className={styles.experienceThatRequires}>
                      experience that requires no maintenance for up to
                    </p>
                    <p className={styles.kilometers}>30,000 kilometers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section6}>
          <div className={styles.textMediaElement5}>
            <div className={styles.textMediaStaticForeground4}>
              <div className={styles.textMediaStaticTextWithVi2}>
                <h1 className={styles.heading25}>LED brake light</h1>
                <div className={styles.paragraph6}>
                  <div className={styles.whenCommutingSafetyContainer}>
                    <p className={styles.whenCommutingSafety}>
                      When commuting, safety is priority. We acknowledge
                    </p>
                    <p className={styles.theSignificanceOf}>
                      the significance of being alert and responsive on the
                    </p>
                    <p className={styles.roadThatsWhy}>
                      road. That's why we created our brake light to activate
                    </p>
                    <p className={styles.instantlyAndIlluminate}>
                      instantly and illuminate brightly upon pressing the
                    </p>
                    <p className={styles.brakesThisFeature}>
                      brakes. This feature guarantees that other drivers and
                    </p>
                    <p className={styles.commutersAreImmediately}>
                      commuters are immediately notified of your intention to
                    </p>
                    <p className={styles.slowDownOr}>
                      slow down or come to a complete stop, ensuring your
                    </p>
                    <p className={styles.safetyOnThe}>safety on the road.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.textMediaStaticBackground4}>
              <div className={styles.videoWrapper3}>
                <div className={styles.video3}>
                  <img
                    className={styles.divh2dAf544b46Icon}
                    loading="lazy"
                    alt=""
                    src="/divh2daf544b46@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section7}>
          <div className={styles.textMediaNewWrapper1}>
            <div className={styles.textMediaNewForeground1}>
              <div className={styles.wrapper5}>
                <div className={styles.headings1}>
                  <div className={styles.heading26}>
                    <h1 className={styles.osramPrecisionLightContainer}>
                      <p className={styles.osram}>Osram®</p>
                      <p className={styles.precisionLight}>precision light</p>
                    </h1>
                  </div>
                  <div className={styles.paragraph7}>
                    <div className={styles.safetyIsFundamentalContainer}>
                      <p className={styles.safetyIsFundamental}>
                        Safety is fundamental when it comes to
                      </p>
                      <p className={styles.bikingWeveDesigned}>
                        biking. We've designed the precision front
                      </p>
                      <p className={styles.lightWithPrecision}>
                        light with precision and clarity in mind. From
                      </p>
                      <p className={styles.darkRoadsTo}>
                        dark roads to challenging city terrain, the
                      </p>
                      <p className={styles.precisionFrontLight}>
                        precision front light, with its strong beam, is
                      </p>
                      <p className={styles.designedToHelp}>
                        designed to help you navigate with ease and
                      </p>
                      <p className={styles.safetyNoMatter}>
                        safety. No matter the environment, we make
                      </p>
                      <p className={styles.sureWeProvide}>
                        sure we provide you with the visibility you
                      </p>
                      <p className={styles.need}>need.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section8}>
          <div className={styles.textMediaElement6}>
            <div className={styles.textMediaStaticBackground5}>
              <div className={styles.videoWrapper4}>
                <div className={styles.video4}>
                  <img
                    className={styles.videojpgIcon}
                    loading="lazy"
                    alt=""
                    src="/videojpg@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.textMediaStaticForeground5}>
              <div className={styles.wrapper6}>
                <div className={styles.textMediaStaticText2}>
                  <div className={styles.textMediaStaticTextWithVi3}>
                    <h1 className={styles.heading27}>Safety tracking</h1>
                    <div className={styles.paragraph8}>
                      <div className={styles.theElectricTwoContainer}>
                        <p className={styles.theElectricTwo}>
                          The Electric Two comes with safety tracking. In case
                          you find
                        </p>
                        <p className={styles.yourselfInAn}>
                          yourself in an uncertain situation, simply press the
                          button on your
                        </p>
                        <p className={styles.handlebarToAlert}>
                          handlebar to alert your loved ones of your live
                          location and feel
                        </p>
                        <p className={styles.moreSecure}>more secure.</p>
                      </div>
                      <div className={styles.whetherYoureCommutingContainer}>
                        <p className={styles.whetherYoureCommuting}>
                          Whether you're commuting in the city or exploring the
                          countryside,
                        </p>
                        <p className={styles.youCanHave}>
                          you can have peace of mind knowing that notifying is
                          just a button
                        </p>
                        <p className={styles.pressAwayMoreover}>
                          press away. Moreover, the tracking feature
                          automatically
                        </p>
                        <p className={styles.deactivatesAfterAn}>
                          deactivates after an hour, allowing you to enjoy your
                          rides with
                        </p>
                        <p className={styles.completePrivacyAnd}>
                          complete privacy and security.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.sectionParent}>
          <div className={styles.section9}>
            <div className={styles.textMediaElement7}>
              <div className={styles.textMediaStaticForeground6}>
                <div className={styles.wrapper7}>
                  <div className={styles.textMediaStaticText3}>
                    <div className={styles.div1}>
                      <div className={styles.heading28}>
                        <h1
                          className={styles.shimanoHydraulicDiscbrakesContainer}
                        >
                          <p className={styles.shimano}>Shimano®</p>
                          <p className={styles.hydraulic}>hydraulic</p>
                          <p className={styles.discbrakes}>discbrakes</p>
                        </h1>
                      </div>
                      <div className={styles.paragraph9}>
                        <div className={styles.theShimanoDiscbrakesContainer}>
                          <p className={styles.theShimanoDiscbrakes}>
                            The Shimano® discbrakes are premium hydraulic disc
                            brakes
                          </p>
                          <p className={styles.designedToDeliver}>
                            designed to deliver lightning-fast stopping power,
                            so you can ride
                          </p>
                          <p className={styles.withCompleteConfidence}>
                            with complete confidence and control. Rest assured,
                            you'll feel the
                          </p>
                          <p className={styles.differenceInThe}>
                            difference in the moments you need it most.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.textMediaStaticBackground6}>
                <div className={styles.span5}>
                  <img
                    className={styles.imageIcon7}
                    loading="lazy"
                    alt=""
                    src="/image-9@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.spacingManager}>
            <div className={styles.bikeHighlightsBackground}>
              <div className={styles.rotationRegulator}>
                <div className={styles.bikeHighlightsBackgroundSha} />
                <img
                  className={styles.imageIcon8}
                  loading="lazy"
                  alt=""
                  src="/image-10@2x.png"
                />
              </div>
              <div className={styles.blendBlender}>
                <div className={styles.transformTrainer}>
                  <div className={styles.item6}>
                    <div className={styles.constraintsController}>+</div>
                  </div>
                  <div className={styles.itemWrapper}>
                    <div className={styles.item7}>
                      <div className={styles.labelLayout}>+</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.shapeShaper}>
                <div className={styles.containerConstructor}>
                  <div className={styles.itemContainer}>
                    <div className={styles.item8}>
                      <div className={styles.imageInspector}>+</div>
                    </div>
                  </div>
                  <div className={styles.item9}>
                    <div className={styles.penPreparer}>+</div>
                  </div>
                </div>
              </div>
              <div className={styles.brushBaker}>
                <div className={styles.fillFiller}>
                  <div className={styles.itemFrame}>
                    <button className={styles.item10}>
                      <div className={styles.sizeScaler}>+</div>
                    </button>
                  </div>
                  <div className={styles.frameParent}>
                    <div className={styles.frameDiv}>
                      <button className={styles.item11}>
                        <div className={styles.blendBender}>+</div>
                      </button>
                    </div>
                    <div className={styles.itemWrapper1}>
                      <button className={styles.item12}>
                        <div className={styles.div2}>+</div>
                      </button>
                    </div>
                    <button className={styles.item13}>
                      <div className={styles.div3}>+</div>
                    </button>
                  </div>
                </div>
                <div className={styles.itemWrapper2}>
                  <button className={styles.item14}>
                    <div className={styles.div4}>+</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section10}>
          <div className={styles.specs}>
            <div className={styles.heading29}>
              <div className={styles.span6}>
                <h1 className={styles.allInThe}>All in the details.</h1>
              </div>
            </div>
            <div className={styles.productDetailsDetails}>
              <div className={styles.productDetailsDesktopWrappe}>
                <div className={styles.column}>
                  <div className={styles.heading3}>
                    <h2 className={styles.frame3}>Frame</h2>
                  </div>
                  <div className={styles.productDetailsDetailText}>
                    <div className={styles.heading4}>
                      <div className={styles.frame4}>Frame</div>
                    </div>
                    <div className={styles.paragraph10}>
                      <div className={styles.coatedAluminiumWith}>
                        Coated aluminium with integrated battery case
                      </div>
                    </div>
                    <div className={styles.heading41}>
                      <div className={styles.paint}>Paint</div>
                    </div>
                    <div className={styles.paragraph11}>
                      <div className={styles.ppgPowderCoating}>
                        PPG Powder Coating 2K
                      </div>
                    </div>
                    <div className={styles.heading42}>
                      <div className={styles.weight}>Weight</div>
                    </div>
                    <div className={styles.paragraph12}>
                      <div className={styles.frame26KgContainer}>
                        <p className={styles.frame26Kg}>Frame 26 kg</p>
                        <p className={styles.battery3Kg}>Battery 3 kg</p>
                      </div>
                    </div>
                    <div className={styles.heading43}>
                      <div className={styles.riderHeight}>Rider Height</div>
                    </div>
                    <div className={styles.paragraph13}>
                      <div className={styles.cm}>164-184cm</div>
                      <div className={styles.yourBikeComes}>
                        Your bike comes 85% assembled.
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.column1}>
                  <div className={styles.heading31}>
                    <h2 className={styles.components}>Components</h2>
                  </div>
                  <div className={styles.productDetailsDetailText1}>
                    <div className={styles.heading44}>
                      <div className={styles.motor}>Motor</div>
                    </div>
                    <div className={styles.paragraph14}>
                      <div className={styles.bafang36v250wContainer}>
                        <p className={styles.bafang36v250w}>
                          Bafang® 36v 250W / Torq + Rotation Sensor w/ a
                        </p>
                        <p className={styles.maximumTorqueOf}>
                          maximum torque of 65 Nm
                        </p>
                      </div>
                    </div>
                    <div className={styles.heading45}>
                      <div className={styles.battery}>Battery</div>
                    </div>
                    <div className={styles.paragraph15}>
                      <div className={styles.removableSmartBatteryContainer}>
                        <p className={styles.removableSmartBattery}>
                          Removable Smart Battery / 36Vdc, 540 WH
                        </p>
                        <p className={styles.kmRange}>60-120 km range</p>
                      </div>
                    </div>
                    <div className={styles.heading46}>
                      <div className={styles.gears1}>Gears</div>
                    </div>
                    <div className={styles.paragraph16}>
                      <div className={styles.envioloTrContainer}>
                        <p className={styles.envioloTr}>
                          Enviolo® TR / Pro 44T Stepless Automatic Shifting /
                        </p>
                        <p className={styles.ratio310}>Ratio 310%</p>
                      </div>
                    </div>
                    <div className={styles.heading47}>
                      <div className={styles.display}>Display</div>
                    </div>
                    <div className={styles.paragraph17}>
                      <div className={styles.velorettiBuiltInDisplay}>
                        Veloretti built-in display
                      </div>
                    </div>
                    <div className={styles.heading48}>
                      <div className={styles.brakes}>Brakes</div>
                    </div>
                    <div className={styles.paragraph18}>
                      <div className={styles.shimanoMt200Hydraulic}>
                        Shimano® MT200 hydraulic disc brakes
                      </div>
                    </div>
                    <div className={styles.heading49}>
                      <div className={styles.tires}>Tires</div>
                    </div>
                    <div className={styles.paragraph19}>
                      <div className={styles.performancePlusTireContainer}>
                        <p className={styles.performancePlusTire}>
                          Performance Plus tire / 50-622 / Anti Puncture level
                        </p>
                        <p className={styles.p}>2</p>
                      </div>
                    </div>
                    <div className={styles.heading410}>
                      <div className={styles.belt}>Belt</div>
                    </div>
                    <div className={styles.paragraph20}>
                      <div className={styles.gatesCarbonBeltdrive}>
                        Gates® Carbon Beltdrive / 122T CDX
                      </div>
                    </div>
                    <div className={styles.heading411}>
                      <div className={styles.lightFront}>Light front</div>
                    </div>
                    <div className={styles.paragraph21}>
                      <div className={styles.osramPrecisionFront}>
                        Osram® Precision front light LED, StVZO approved
                      </div>
                    </div>
                    <div className={styles.heading412}>
                      <div className={styles.lightRear}>Light rear</div>
                    </div>
                    <div className={styles.paragraph22}>
                      <div className={styles.cobHyperbolicLed}>
                        COB Hyperbolic LED
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.column2}>
                  <div className={styles.heading32}>
                    <h2 className={styles.accessories1}>Accessories</h2>
                  </div>
                  <div className={styles.divproductDetailsDetailtext}>
                    <div className={styles.heading413}>
                      <div className={styles.abusPlug}>Abus plug</div>
                    </div>
                    <div className={styles.paragraph23}>
                      <div className={styles.inChainLock140}>
                        In-chain lock 140 cm
                      </div>
                    </div>
                    <div className={styles.heading414}>
                      <div className={styles.frontCarrier}>Front carrier</div>
                    </div>
                    <div className={styles.paragraph24}>
                      <div className={styles.avsFrontCarrierContainer}>
                        <p className={styles.avsFrontCarrier}>
                          AVS front carrier 480g
                        </p>
                        <p className={styles.carryingCapacity10Kg}>
                          Carrying Capacity: 10 kg (22 lb)
                        </p>
                      </div>
                    </div>
                    <div className={styles.heading415}>
                      <div className={styles.rearCarrier}>Rear carrier</div>
                    </div>
                    <div className={styles.paragraph25}>
                      <div className={styles.tba}>TBA</div>
                    </div>
                    <div className={styles.heading416}>
                      <div className={styles.basket}>Basket</div>
                    </div>
                    <div className={styles.paragraph26}>
                      <div className={styles.avsBasket133kgContainer}>
                        <p className={styles.avsBasket133kg}>
                          AVS basket 1.33kg
                        </p>
                        <p className={styles.carryingCapacity10Kg1}>
                          Carrying Capacity: 10 kg (22 lb)
                        </p>
                      </div>
                    </div>
                    <div className={styles.heading417}>
                      <div className={styles.cargoBasket}>Cargo basket</div>
                    </div>
                    <div className={styles.paragraph27}>
                      <div className={styles.avsCargoBasketContainer}>
                        <p className={styles.avsCargoBasket}>
                          AVS cargo basket 1.7kg
                        </p>
                        <p className={styles.carryingCapacity10Kg2}>
                          Carrying Capacity: 10 kg (22 lb)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className={styles.link1}>
                <div className={styles.svgmargin1}>
                  <div className={styles.svg10}>
                    <div className={styles.frame5}>
                      <img
                        className={styles.vectorIcon14}
                        alt=""
                        src="/vector-162.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.downloadFullSpecifications}>
                  Download Full Specifications
                </div>
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerBackground}>
          <div className={styles.footerCustomWrapper}>
            <div className={styles.footerCustomText}>
              <div className={styles.paragraph28}>
                <div className={styles.readyToTakeContainer}>
                  <p className={styles.readyToTake}>
                    Ready to take the Electric Ivy or Ace for a spin? Electric
                    test rides are now available in
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
              <div className={styles.buttonTitle1}>
                <div className={styles.bookNow}>BOOK NOW</div>
              </div>
            </button>
          </div>
        </div>
        <div className={styles.footerContainer}>
          <div className={styles.footerMenus}>
            <div className={styles.footerMenuItem}>
              <div className={styles.explorerWidget}>
                <div className={styles.widget}>
                  <div className={styles.explorer}>Explorer</div>
                  <div className={styles.list1}>
                    <div className={styles.item15}>
                      <div className={styles.buttonElectric}>
                        Electric bikes
                      </div>
                    </div>
                    <div className={styles.item16}>
                      <div className={styles.buttonCity}>City bikes</div>
                    </div>
                    <div className={styles.item17}>
                      <div className={styles.buttonKids}>Kids' bikes</div>
                    </div>
                    <div className={styles.item18}>
                      <div className={styles.buttonAccessories}>
                        Accessories
                      </div>
                    </div>
                    <div className={styles.item19}>
                      <div className={styles.buttonOutlet}>Outlet</div>
                    </div>
                    <div className={styles.item20}>
                      <div className={styles.buttonBusiness}>Business</div>
                    </div>
                    <div className={styles.item21}>
                      <div className={styles.buttonInsurance}>
                        Insurance Electric
                      </div>
                    </div>
                    <div className={styles.item22}>
                      <div className={styles.buttonSize}>Size guide</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.footerMenuItem1}>
              <div className={styles.aboutWidget}>
                <div className={styles.widget1}>
                  <div className={styles.about}>About</div>
                  <div className={styles.list2}>
                    <div className={styles.item23}>
                      <div className={styles.buttonAbout}>About us</div>
                    </div>
                    <div className={styles.item24}>
                      <div className={styles.buttonJournal}>Journal</div>
                    </div>
                    <div className={styles.item25}>
                      <div className={styles.buttonReviews}>Reviews</div>
                    </div>
                    <div className={styles.item26}>
                      <div className={styles.linkPress}>Press</div>
                    </div>
                    <div className={styles.item27}>
                      <div className={styles.buttonJobs}>Jobs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.footerMenuItem2}>
              <div className={styles.helpWidget}>
                <div className={styles.help}>Help</div>
                <div className={styles.list3}>
                  <div className={styles.item28}>
                    <div className={styles.linkContact}>Contact</div>
                  </div>
                  <div className={styles.item29}>
                    <div className={styles.linkFaq}>FAQ</div>
                  </div>
                  <div className={styles.item30}>
                    <div className={styles.linkDelivery}>Delivery</div>
                  </div>
                  <div className={styles.item31}>
                    <div
                      className={styles.linkAssembly}
                    >{`Assembly & manuals`}</div>
                  </div>
                  <div className={styles.item32}>
                    <div className={styles.buttonPayment}>Payment options</div>
                  </div>
                  <div className={styles.item33}>
                    <div className={styles.buttonPrivacy}>Privacy policy</div>
                  </div>
                  <div className={styles.item34}>
                    <div
                      className={styles.linkTerms}
                    >{`Terms & conditions`}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footerEmailSubscriptionconta}>
            <div className={styles.joinTheRideWidget}>
              <div className={styles.footerEmailSubscriptionText}>
                <div className={styles.footerMenuTitleDesktop}>
                  <div className={styles.joinTheRide}>Join the ride.</div>
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
                  <button className={styles.button18}>
                    <div className={styles.subscribe}>Subscribe</div>
                  </button>
                </div>
                <div className={styles.footerEmailPrivacyPolicy}>
                  <div className={styles.footerCheckbox}>
                    <input className={styles.inputMargin} type="checkbox" />
                    <div className={styles.footerEmailSubscriptionDesc1}>
                      <div className={styles.footerEmailSubscriptionDesc2}>
                        <div className={styles.paragraph29}>
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
                  <div className={styles.link2}>
                    <div className={styles.svg11}>
                      <img
                        className={styles.vectorIcon15}
                        loading="lazy"
                        alt=""
                        src="/vector-172.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.link3}>
                    <div className={styles.svg12}>
                      <img
                        className={styles.vectorIcon16}
                        loading="lazy"
                        alt=""
                        src="/vector-182.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.link4}>
                    <div className={styles.svg13}>
                      <img
                        className={styles.vectorIcon17}
                        loading="lazy"
                        alt=""
                        src="/vector-192.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.link5}>
                    <div className={styles.svg14}>
                      <img
                        className={styles.vectorIcon18}
                        loading="lazy"
                        alt=""
                        src="/vector-202.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.link6}>
                    <div className={styles.svg15}>
                      <img
                        className={styles.vectorIcon19}
                        loading="lazy"
                        alt=""
                        src="/vector-211.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className={styles.footerTopScrollButton}>
            <div className={styles.svg16}>
              <img
                className={styles.vectorIcon20}
                alt=""
                src="/vector-221.svg"
              />
            </div>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default SingleProductPage;
