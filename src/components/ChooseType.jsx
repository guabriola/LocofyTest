import { useMemo } from "react";
import styles from "./ChooseType.module.css";

const ChooseType = ({
  image,
  electricAce,
  propBorder,
  propPadding,
  propAlignSelf,
  propWidth,
  propMinWidth,
}) => {
  const productViewBikeSelectorConStyle = useMemo(() => {
    return {
      border: propBorder,
      padding: propPadding,
    };
  }, [propBorder, propPadding]);

  const span1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const electricAceStyle = useMemo(() => {
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
