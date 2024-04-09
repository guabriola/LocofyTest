import { FunctionComponent } from "react";
import Span from "./Span";
import styles from "./Products.module.css";

const Products: FunctionComponent = () => {
  return (
    <div className={styles.products}>
      <header className={styles.header}>
        <div className={styles.nav}>
          <div className={styles.link}>
            <img
              className={styles.frameIcon}
              loading="lazy"
              alt=""
              src="/frame.svg"
            />
          </div>
          <div className={styles.list}>
            <div className={styles.item}>
              <div className={styles.button}>
                <div className={styles.menuTitle}>
                  <div className={styles.electric}>Electric</div>
                </div>
                <div className={styles.submenuIcon}>
                  <div className={styles.termsAndConditions}>
                    <div className={styles.svg}>
                      <img
                        className={styles.copyrightSmileCitadelAll}
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
                  <div className={styles.booking}>
                    <div className={styles.svg1}>
                      <img
                        className={styles.aboutIcon}
                        alt=""
                        src="/vector-1.svg"
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
                  <div className={styles.submenuIconFrame}>
                    <div className={styles.svg2}>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector-2.svg"
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
                  <div className={styles.submenuIconFrame1}>
                    <div className={styles.svg3}>
                      <img
                        className={styles.vectorIcon1}
                        alt=""
                        src="/vector-3.svg"
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
                <div className={styles.button7}>
                  <div className={styles.label1}>
                    <div className={styles.svg5}>
                      <img
                        className={styles.whyTermInsuranceIsImportan}
                        alt=""
                        src="/vector-41.svg"
                      />
                      <img
                        className={styles.vectorIcon2}
                        alt=""
                        src="/vector-5.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.cartWrap}>
                <div className={styles.label2}>
                  <div className={styles.svg6}>
                    <img
                      className={styles.vectorIcon3}
                      alt=""
                      src="/vector-61.svg"
                    />
                    <img
                      className={styles.vectorIcon4}
                      alt=""
                      src="/vector-71.svg"
                    />
                    <img
                      className={styles.vectorIcon5}
                      alt=""
                      src="/vector-8.svg"
                    />
                    <img
                      className={styles.bookNowIcon}
                      alt=""
                      src="/vector-91.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className={styles.body}>
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.wrapper1}>
              <div className={styles.smallHeading}>
                <div className={styles.velorettiElectric}>
                  VELORETTI ELECTRIC
                </div>
              </div>
              <div className={styles.largeHeading}>
                <h1 className={styles.thisIsTwo}>This is Two.</h1>
              </div>
              <div className={styles.smallHeading1}>
                <div className={styles.introducingTheAllNew}>
                  Introducing the all-new Ivy and Ace
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.featuredBikeNewWrapper}>
              <div className={styles.featuredBikeNewCardContain}>
                <div className={styles.featuredBikeNewCard}>
                  <div className={styles.wrapper2}>
                    <div className={styles.featuredBikeNewHeaderConta}>
                      <div className={styles.featuredBikeNewHeaderConta1}>
                        <div className={styles.featuredBikeNewHeaderTitle}>
                          <div className={styles.heading2}>
                            <h1 className={styles.electricAce}>Electric Ace</h1>
                            <div className={styles.heading}>
                              <div className={styles.two}>Two</div>
                            </div>
                          </div>
                          <div className={styles.heading4}>
                            <div className={styles.riderHeight173200cm}>
                              Rider height: 173-200cm
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.imageContainer}>
                      <div className={styles.wrapper3}>
                        <div className={styles.div}>
                          <div className={styles.span}>
                            <img
                              className={styles.imageIcon}
                              alt=""
                              src="/image-1@2x.png"
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.rightArrowWrapper}>
                        <div className={styles.buttonNext}>
                          <div className={styles.svg7}>
                            <img
                              className={styles.elseStatementIcon}
                              loading="lazy"
                              alt=""
                              src="/vector-101.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.leftArrowWrapper}>
                        <div className={styles.buttonPrevious}>
                          <div className={styles.svg8}>
                            <img
                              className={styles.vectorIcon6}
                              loading="lazy"
                              alt=""
                              src="/vector-111.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.featuredBikeNewFooterConta}>
                      <div className={styles.featuredBikeNewRightSectio}>
                        <div className={styles.linkMargin}>
                          <button className={styles.link1}>
                            <div className={styles.buyNow}>Buy Now</div>
                          </button>
                        </div>
                        <div className={styles.linkMargin1}>
                          <div className={styles.linkLearn}>Learn more</div>
                        </div>
                      </div>
                      <div className={styles.featuredBikeNewColorSelect}>
                        <div className={styles.buttonMargin}>
                          <div className={styles.button8}>
                            <div className={styles.colorSwatchWrapper} />
                          </div>
                        </div>
                        <div className={styles.buttonMargin1}>
                          <div className={styles.button9}>
                            <div className={styles.colorSwatchWrapper1} />
                          </div>
                        </div>
                        <div className={styles.buttonMargin2}>
                          <div className={styles.button10}>
                            <div className={styles.spancolorSwatchWrapper8xz} />
                          </div>
                        </div>
                        <div className={styles.buttonMargin3}>
                          <div className={styles.button11}>
                            <img
                              className={styles.colorSwatchSecondaryOptionIcon}
                              loading="lazy"
                              alt=""
                              src="/colorswatch-secondaryoptionwrapper@2x.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.featuredBikeNewCard1}>
                  <div className={styles.container1}>
                    <div className={styles.featuredBikeNewHeaderConta2}>
                      <div className={styles.wrapper4}>
                        <div className={styles.featuredBikeNewHeaderTitle1}>
                          <div className={styles.heading21}>
                            <h1 className={styles.electricIvy}>Electric Ivy</h1>
                            <div className={styles.heading1}>
                              <div className={styles.two1}>Two</div>
                            </div>
                          </div>
                          <div className={styles.heading41}>
                            <div className={styles.riderHeight164184cm}>
                              Rider height: 164-184cm
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.imageContainer1}>
                      <div className={styles.wrapper5}>
                        <div className={styles.div1}>
                          <div className={styles.span1}>
                            <img
                              className={styles.imageIcon1}
                              alt=""
                              src="/image-2@2x.png"
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.rightArrowWrapper1}>
                        <div className={styles.buttonNext1}>
                          <div className={styles.svg9}>
                            <img
                              className={styles.vectorIcon7}
                              loading="lazy"
                              alt=""
                              src="/vector-121.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.leftArrowWrapper1}>
                        <div className={styles.buttonPrevious1}>
                          <div className={styles.svg10}>
                            <img
                              className={styles.vectorIcon8}
                              loading="lazy"
                              alt=""
                              src="/vector-131.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divfeaturedBikeNewFooterco}>
                      <div className={styles.featuredBikeNewRightSectio1}>
                        <div className={styles.linkMargin2}>
                          <button className={styles.link2}>
                            <div className={styles.buyNow1}>Buy Now</div>
                          </button>
                        </div>
                        <div className={styles.linkMargin3}>
                          <div className={styles.linkLearn1}>Learn more</div>
                        </div>
                      </div>
                      <div className={styles.featuredBikeNewColorSelect1}>
                        <div className={styles.buttonMargin4}>
                          <div className={styles.button12}>
                            <div className={styles.colorSwatchWrapper2} />
                          </div>
                        </div>
                        <div className={styles.buttonMargin5}>
                          <div className={styles.button13}>
                            <div className={styles.colorSwatchWrapper3} />
                          </div>
                        </div>
                        <div className={styles.buttonMargin6}>
                          <div className={styles.button14}>
                            <div className={styles.colorSwatchWrapper4} />
                          </div>
                        </div>
                        <img className={styles.buttonMarginIcon} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section1}>
            <div className={styles.featuredBikeNewDesktop}>
              <div className={styles.featuredBikeNewExpandedCar}>
                <div className={styles.heading11}>
                  <h2 className={styles.exploreOurBikes}>Explore our bikes</h2>
                </div>
                <div className={styles.featuredBikeNewExpandedCar1}>
                  <div className={styles.divfeaturedBikeNewExpanded}>
                    <img
                      className={styles.svgIcon}
                      loading="lazy"
                      alt=""
                      src="/svg.svg"
                    />
                  </div>
                  <div className={styles.divfeaturedBikeNewExpanded1}>
                    <img
                      className={styles.buttonSvg}
                      loading="lazy"
                      alt=""
                      src="/button--svg.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.slickList}>
                <div className={styles.slickTrack}>
                  <div className={styles.slickSlide}>
                    <div className={styles.container2}>
                      <div className={styles.featuredBikeNewCard2}>
                        <div className={styles.featuredBikeNewHeaderConta3}>
                          <div className={styles.wrapper6}>
                            <div className={styles.featuredBikeNewHeaderTitle2}>
                              <div className={styles.heading22}>
                                <h1 className={styles.cityBikes}>City Bikes</h1>
                              </div>
                              <div className={styles.heading23}>
                                <div className={styles.buttonWomen}>Women</div>
                                <div className={styles.buttonMen}>Men</div>
                              </div>
                            </div>
                            <div className={styles.heading42}>From €399</div>
                          </div>
                        </div>
                        <div className={styles.imageSpan}>
                          <img
                            className={styles.imageIcon2}
                            loading="lazy"
                            alt=""
                            src="/image-21@2x.png"
                          />
                        </div>
                        <div className={styles.featuredBikeNewFooterConta1}>
                          <div className={styles.featuredBikeNewRightSectio2}>
                            <div className={styles.linkMargin4}>
                              <button className={styles.link3}>
                                <div className={styles.buyNow2}>Buy Now</div>
                              </button>
                            </div>
                            <div className={styles.linkMargin5}>
                              <div className={styles.linkLearn2}>
                                Learn more
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.slickSlide1}>
                    <div className={styles.container3}>
                      <div className={styles.featuredBikeNewCard3}>
                        <div className={styles.featuredBikeNewHeaderConta4}>
                          <div className={styles.wrapper7}>
                            <div className={styles.featuredBikeNewHeaderTitle3}>
                              <div className={styles.heading24}>
                                <h1 className={styles.kidsBikes}>
                                  Kids' Bikes
                                </h1>
                              </div>
                              <div className={styles.heading25}>
                                <div className={styles.buttonAges}>
                                  Ages 1,5 to 8
                                </div>
                              </div>
                            </div>
                            <div className={styles.heading43}>From €119</div>
                          </div>
                        </div>
                        <div className={styles.imageSpan1}>
                          <img
                            className={styles.imageIcon3}
                            loading="lazy"
                            alt=""
                            src="/image-3@2x.png"
                          />
                        </div>
                        <div className={styles.featuredBikeNewFooterConta2}>
                          <div className={styles.featuredBikeNewRightSectio3}>
                            <div className={styles.linkMargin6}>
                              <button className={styles.link4}>
                                <div className={styles.buyNow3}>Buy Now</div>
                              </button>
                            </div>
                            <div className={styles.linkMargin7}>
                              <div className={styles.linkLearn3}>
                                Learn more
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.slickSlide2}>
                    <div className={styles.container4}>
                      <div className={styles.featuredBikeNewCard4}>
                        <div className={styles.featuredBikeNewHeaderConta5}>
                          <div className={styles.wrapper8}>
                            <div className={styles.featuredBikeNewHeaderTitle4}>
                              <div className={styles.heading26}>
                                <h1 className={styles.accessories1}>
                                  Accessories
                                </h1>
                              </div>
                              <div className={styles.divh2dD27f750}>
                                <div className={styles.buttonDiscover}>
                                  Discover
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.imageSpan2}>
                          <img
                            className={styles.imageIcon4}
                            loading="lazy"
                            alt=""
                            src="/image-4@2x.png"
                          />
                        </div>
                        <div className={styles.featuredBikeNewFooterConta3}>
                          <div className={styles.ffeaturedBikeNewRightSecti}>
                            <button className={styles.link5}>
                              <div className={styles.buyNow4}>Buy Now</div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section2}>
            <div className={styles.container5}>
              <div className={styles.wrapper9}>
                <div className={styles.heading27}>
                  <div className={styles.span2}>
                    <h1 className={styles.makeYourCommute}>
                      Make your commute
                    </h1>
                  </div>
                  <div className={styles.span3}>
                    <h1 className={styles.theBestPart}>
                      the best part of your day.
                    </h1>
                  </div>
                </div>
              </div>
              <div className={styles.wrapper10}>
                <div className={styles.functionBuilder}>
                  <div className={styles.paragraph}>
                    <div className={styles.cleanAndTimelessContainer}>
                      <p className={styles.cleanAndTimeless}>
                        Clean and timeless designs that make every ride a
                        thrill.
                      </p>
                      <p className={styles.whereverYoureHeading}>
                        Wherever you're heading, our bikes are made to make your
                        daily
                      </p>
                      <p className={styles.commuteAJoy}>commute a joy.</p>
                    </div>
                  </div>
                </div>
                <div className={styles.textLogo}>
                  <div className={styles.svg11}>
                    <img
                      className={styles.syntaxAnalyzerIcon}
                      loading="lazy"
                      alt=""
                      src="/vector-141.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section3}>
            <div className={styles.textMediaNewWrapper}>
              <div className={styles.textMediaNewForeground}>
                <div className={styles.textMediaNewText}>
                  <Span
                    discoverYour="Discover your"
                    localVeloretti="local Veloretti"
                    partnerStore="partner store"
                    ourPartnerStoresAcrossThe="Our partner stores across the Netherlands"
                    areThereForYouWhetherYour="are there for you. Whether you're looking to"
                    pickUpANewlyOrderedBikeNe="pick up a newly ordered bike, need a fix, or"
                    wantToTakeATestRideOnOurI="want to take a test ride on our Ivy or Ace Two,"
                    yourIdealBikingExperience="your ideal biking experience is closer than"
                    youThink="you think."
                  />
                  <button className={styles.button15}>
                    <div className={styles.buttonText}>
                      <div className={styles.buttonTitle}>
                        <div className={styles.findAPartner}>
                          Find a partner store near you
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section4}>
            <div className={styles.textMediaElement}>
              <div className={styles.textMediaStaticBackground}>
                <div className={styles.span4}>
                  <img
                    className={styles.imageIcon5}
                    loading="lazy"
                    alt=""
                    src="/image-5@2x.png"
                  />
                </div>
              </div>
              <div className={styles.textMediaStaticBackground1}>
                <div className={styles.wrapper11}>
                  <div className={styles.textMediaStaticText}>
                    <div className={styles.headings}>
                      <h1 className={styles.heading44}>Leasing</h1>
                      <div className={styles.paragraph1}>
                        <div className={styles.wantToProvideContainer}>
                          <p className={styles.wantToProvide}>
                            Want to provide your organisation with mobility in a
                            unique and
                          </p>
                          <p className={styles.creativeWayOur}>
                            creative way? Our Electric and City bikes are the
                            perfect solution for
                          </p>
                          <p className={styles.healthierEmployeesSo}>
                            healthier employees. So whether it's customised
                            employee bicycles
                          </p>
                          <p className={styles.orStandoutPromotional}>
                            or standout promotional rides, both small and big
                            organisations
                          </p>
                          <p className={styles.shareTheLove}>
                            share the love of our Veloretti designs. Depending
                            on the number of
                          </p>
                          <p className={styles.bikesWeWill}>
                            bikes, we will give you a customised quote.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.buttonMargin7}>
                      <div className={styles.button16}>
                        <div className={styles.buttonText1}>
                          <div className={styles.buttonTitle1}>
                            <div className={styles.learnMore}>Learn more</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section5}>
            <div className={styles.collectionInfoTestimonialWr}>
              <div className={styles.heading28}>
                <h1 className={styles.theyTalkedAbout}>They talked about us</h1>
              </div>
              <div className={styles.collectionInfoTestimonialCa}>
                <div className={styles.collectionItemInfoTestimoni}>
                  <div className={styles.container6}>
                    <div className={styles.collectionItemInfoTestimoni1}>
                      <div className={styles.wrapper12}>
                        <div className={styles.paragraph2}>
                          <h3 className={styles.oneOfTheContainer}>
                            <p className={styles.oneOfThe}>
                              "One of the best e-bikes available at
                            </p>
                            <p className={styles.anyPriceAnd}>
                              any price and far and away my
                            </p>
                            <p className={styles.favouriteRideOf}>
                              favourite ride of the year."
                            </p>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className={styles.collectionItemInfoTestimoni2}>
                      <div className={styles.span5}>
                        <div className={styles.thevergesvg}>
                          <div className={styles.thevergesvgFill}>
                            <div className={styles.thevergesvg1}>
                              <img
                                className={styles.groupIcon}
                                loading="lazy"
                                alt=""
                                src="/group@2x.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.collectionItemInfoTestimoni3}>
                  <div className={styles.container7}>
                    <div className={styles.collectionItemInfoTestimoni4}>
                      <div className={styles.wrapper13}>
                        <div className={styles.paragraph3}>
                          <h3
                            className={styles.thisSecondGenerationAceContainer}
                          >
                            <p className={styles.thisSecondGenerationAce}>
                              “This second-generation Ace is a
                            </p>
                            <p className={styles.superheroAmongstUrban}>
                              superhero amongst urban e-
                            </p>
                            <p className={styles.bikes910}>bikes… 9/10.”</p>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className={styles.collectionItemInfoTestimoni5}>
                      <div className={styles.span6}>
                        <div className={styles.brightsvg}>
                          <div className={styles.brightsvgFill}>
                            <img
                              className={styles.brightsvgIcon}
                              loading="lazy"
                              alt=""
                              src="/brightsvg@2x.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.collectionItemInfoTestimoni6}>
                  <div className={styles.container8}>
                    <div className={styles.collectionItemInfoTestimoni7}>
                      <div className={styles.wrapper14}>
                        <div className={styles.paragraph4}>
                          <h3 className={styles.theTimelessChicContainer}>
                            <p className={styles.theTimelessChic}>
                              "The timeless, chic design and
                            </p>
                            <p className={styles.stunningCraftsmanshipMake}>
                              stunning craftsmanship make
                            </p>
                            <p className={styles.themThePerfect}>
                              them the perfect way to get
                            </p>
                            <p className={styles.aroundTheCity}>
                              around the city."
                            </p>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className={styles.collectionItemInfoTestimoni8}>
                      <div className={styles.span7}>
                        <div className={styles.vogueLogosvg}>
                          <div className={styles.vogueLogosvgFill}>
                            <div className={styles.vogueLogosvg1}>
                              <img
                                className={styles.treeJoinerIcon}
                                loading="lazy"
                                alt=""
                                src="/vector-151.svg"
                              />
                              <img
                                className={styles.shapeBenderIcon}
                                loading="lazy"
                                alt=""
                                src="/vector-161.svg"
                              />
                              <img
                                className={styles.sequenceReverserIcon}
                                loading="lazy"
                                alt=""
                                src="/vector-171.svg"
                              />
                              <img
                                className={styles.dataSorterIcon}
                                loading="lazy"
                                alt=""
                                src="/vector-181.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section6}>
            <div className={styles.textMediaNewWrapper1}>
              <div className={styles.textMediaNewForeground1}>
                <div className={styles.headings1}>
                  <div className={styles.span8}>
                    <h1 className={styles.heading45}>Red Dot Award</h1>
                    <div className={styles.paragraph5}>
                      <div className={styles.goodDesignIsContainer}>
                        <p className={styles.goodDesignIs}>
                          Good design is what drives us, and we're
                        </p>
                        <p className={styles.proudToShare}>
                          proud to share that Veloretti Electric Two has
                        </p>
                        <p className={styles.alreadyWonThe}>
                          already won the prestigious Red Dot Design
                        </p>
                        <p className={styles.award2023As}>
                          Award 2023, as judged by the world's best
                        </p>
                        <p className={styles.productDesigners}>
                          product designers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section7}>
            <div className={styles.textmediaelement8}>
              <div className={styles.textMediaStaticForeground}>
                <div className={styles.wrapper15}>
                  <div className={styles.textMediaStaticText1}>
                    <div className={styles.headings2}>
                      <h1 className={styles.heading46}>Ride carefree</h1>
                      <div className={styles.paragraph6}>
                        <div className={styles.ourQoverXContainer}>
                          <p className={styles.ourQoverX}>
                            Our Qover x Veloretti insurance plan has got you
                            covered. It offers
                          </p>
                          <p className={styles.comprehensiveCoverageAgainst}>
                            comprehensive coverage against theft, provides
                            assistance in case
                          </p>
                          <p className={styles.ofAnyIssues}>
                            of any issues, and covers any damages to your bike.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.buttonMargin8}>
                      <div className={styles.button17}>
                        <div className={styles.buttonText2}>
                          <div className={styles.buttonTitle2}>
                            <div className={styles.learnMore1}>Learn more</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.textMediaStaticBackground2}>
                <div className={styles.span9}>
                  <img
                    className={styles.imageIcon6}
                    loading="lazy"
                    alt=""
                    src="/image-6@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerBackground}>
          <div className={styles.footerCustomWrapper}>
            <div className={styles.footerCustomText}>
              <div className={styles.paragraph7}>
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
              <div className={styles.buttonTitle3}>
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
                  <h3 className={styles.explorer}>Explorer</h3>
                  <div className={styles.list1}>
                    <div className={styles.item6}>
                      <div className={styles.buttonElectric}>
                        Electric bikes
                      </div>
                    </div>
                    <div className={styles.item7}>
                      <div className={styles.buttonCity}>City bikes</div>
                    </div>
                    <div className={styles.item8}>
                      <div className={styles.buttonKids}>Kids' bikes</div>
                    </div>
                    <div className={styles.item9}>
                      <div className={styles.buttonAccessories}>
                        Accessories
                      </div>
                    </div>
                    <div className={styles.item10}>
                      <div className={styles.buttonOutlet}>Outlet</div>
                    </div>
                    <div className={styles.item11}>
                      <div className={styles.buttonBusiness}>Business</div>
                    </div>
                    <div className={styles.item12}>
                      <div className={styles.buttonInsurance}>
                        Insurance Electric
                      </div>
                    </div>
                    <div className={styles.item13}>
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
                  <div className={styles.list2}>
                    <div className={styles.item14}>
                      <div className={styles.buttonAbout}>About us</div>
                    </div>
                    <div className={styles.item15}>
                      <div className={styles.buttonJournal}>Journal</div>
                    </div>
                    <div className={styles.item16}>
                      <div className={styles.buttonReviews}>Reviews</div>
                    </div>
                    <div className={styles.item17}>
                      <div className={styles.linkPress}>Press</div>
                    </div>
                    <div className={styles.item18}>
                      <div className={styles.buttonJobs}>Jobs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.footerMenuItem2}>
              <div className={styles.helpWidget}>
                <h3 className={styles.help}>Help</h3>
                <div className={styles.list3}>
                  <div className={styles.item19}>
                    <div className={styles.linkContact}>Contact</div>
                  </div>
                  <div className={styles.item20}>
                    <div className={styles.linkFaq}>FAQ</div>
                  </div>
                  <div className={styles.item21}>
                    <div className={styles.linkDelivery}>Delivery</div>
                  </div>
                  <div className={styles.item22}>
                    <div
                      className={styles.linkAssembly}
                    >{`Assembly & manuals`}</div>
                  </div>
                  <div className={styles.item23}>
                    <div className={styles.buttonPayment}>Payment options</div>
                  </div>
                  <div className={styles.item24}>
                    <div className={styles.buttonPrivacy}>Privacy policy</div>
                  </div>
                  <div className={styles.item25}>
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
                  <button className={styles.button18}>
                    <div className={styles.subscribe}>Subscribe</div>
                  </button>
                </div>
                <div className={styles.footerEmailPrivacyPolicy}>
                  <div className={styles.footerCheckbox}>
                    <input className={styles.inputMargin} type="checkbox" />
                    <div className={styles.footerEmailSubscriptionDesc1}>
                      <div className={styles.footerEmailSubscriptionDesc2}>
                        <div className={styles.paragraph8}>
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
                  <div className={styles.link6}>
                    <div className={styles.svg12}>
                      <img
                        className={styles.vectorIcon9}
                        loading="lazy"
                        alt=""
                        src="/vector-191.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.link7}>
                    <div className={styles.svg13}>
                      <img
                        className={styles.vectorIcon10}
                        loading="lazy"
                        alt=""
                        src="/vector-201.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.link8}>
                    <div className={styles.svg14}>
                      <img
                        className={styles.vectorIcon11}
                        loading="lazy"
                        alt=""
                        src="/vector-21.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.link9}>
                    <div className={styles.svg15}>
                      <img
                        className={styles.vectorIcon12}
                        loading="lazy"
                        alt=""
                        src="/vector-22.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.link10}>
                    <div className={styles.svg16}>
                      <img
                        className={styles.vectorIcon13}
                        loading="lazy"
                        alt=""
                        src="/vector-23.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className={styles.footerTopScrollButton}>
            <div className={styles.svg17}>
              <img
                className={styles.gradientManagerIcon}
                alt=""
                src="/vector-24.svg"
              />
            </div>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Products;
