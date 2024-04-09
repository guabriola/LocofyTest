import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ChooseType.module.css";

export type ChooseTypeType = {
  image?: string;
  electricAce?: string;

  /** Style props */
  propBorder?: CSSProperties["border"];
  propPadding?: CSSProperties["padding"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
};

const ChooseType: FunctionComponent<ChooseTypeType> = ({
  image,
  electricAce,
  propBorder,
  propPadding,
  propAlignSelf,
  propWidth,
  propMinWidth,
}) => {
  const productViewBikeSelectorConStyle: CSSProperties = useMemo(() => {
    return {
      border: propBorder,
      padding: propPadding,
    };
  }, [propBorder, propPadding]);

  const span1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const electricAceStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.button}>
      <button
        className={styles.productViewBikeSelectorCon}
        style={productViewBikeSelectorConStyle}
      >
        <div className={styles.span} style={span1Style}>
          <img className={styles.imageIcon} alt="" src={image} />
        </div>
      </button>
      <div className={styles.productViewBikeselectorTitl}>
        <div className={styles.electricAce} style={electricAceStyle}>
          {electricAce}
        </div>
        <div className={styles.span1}>
          <div className={styles.two}>Two</div>
        </div>
      </div>
    </div>
  );
};

export default ChooseType;
