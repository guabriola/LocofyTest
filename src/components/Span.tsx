import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Span.module.css";

export type SpanType = {
  discoverYour?: string;
  localVeloretti?: string;
  partnerStore?: string;
  ourPartnerStoresAcrossThe?: string;
  areThereForYouWhetherYour?: string;
  pickUpANewlyOrderedBikeNe?: string;
  wantToTakeATestRideOnOurI?: string;
  yourIdealBikingExperience?: string;
  youThink?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
  propPadding?: CSSProperties["padding"];
  propMinWidth?: CSSProperties["minWidth"];
  propPadding1?: CSSProperties["padding"];
  propPadding2?: CSSProperties["padding"];
  propColor?: CSSProperties["color"];
  propWidth?: CSSProperties["width"];
  propPadding3?: CSSProperties["padding"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propColor1?: CSSProperties["color"];
};

const Span: FunctionComponent<SpanType> = ({
  discoverYour,
  localVeloretti,
  partnerStore,
  ourPartnerStoresAcrossThe,
  areThereForYouWhetherYour,
  pickUpANewlyOrderedBikeNe,
  wantToTakeATestRideOnOurI,
  yourIdealBikingExperience,
  youThink,
  propAlignSelf,
  propFlex,
  propPadding,
  propMinWidth,
  propPadding1,
  propPadding2,
  propColor,
  propWidth,
  propPadding3,
  propAlignSelf1,
  propColor1,
}) => {
  const spanStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
      padding: propPadding,
      minWidth: propMinWidth,
    };
  }, [propAlignSelf, propFlex, propPadding, propMinWidth]);

  const headingsStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const heading41Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  const discoverYourLocalContainerStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const paragraphStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding3,
      alignSelf: propAlignSelf1,
    };
  }, [propWidth, propPadding3, propAlignSelf1]);

  const ourPartnerStoresContainerStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div className={styles.span} style={spanStyle}>
      <div className={styles.headings} style={headingsStyle}>
        <div className={styles.heading4} style={heading41Style}>
          <h1
            className={styles.discoverYourLocalContainer}
            style={discoverYourLocalContainerStyle}
          >
            <p className={styles.discoverYour}>{discoverYour}</p>
            <p className={styles.localVeloretti}>{localVeloretti}</p>
            <p className={styles.partnerStore}>{partnerStore}</p>
          </h1>
        </div>
        <div className={styles.paragraph} style={paragraphStyle}>
          <div
            className={styles.ourPartnerStoresContainer}
            style={ourPartnerStoresContainerStyle}
          >
            <p className={styles.ourPartnerStores}>
              {ourPartnerStoresAcrossThe}
            </p>
            <p className={styles.areThereFor}>{areThereForYouWhetherYour}</p>
            <p className={styles.pickUpA}>{pickUpANewlyOrderedBikeNe}</p>
            <p className={styles.wantToTake}>{wantToTakeATestRideOnOurI}</p>
            <p className={styles.yourIdealBiking}>
              {yourIdealBikingExperience}
            </p>
            <p className={styles.youThink}>{youThink}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Span;
