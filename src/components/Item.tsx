import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Item.module.css";

export type ItemType = {
  determineTheRequirements?: string;
  youGetAccesToTheDigitalPl?: string;
  yourEmployeesAndShareTheR?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
  propPadding1?: CSSProperties["padding"];
  propMinWidth?: CSSProperties["minWidth"];
};

const Item: FunctionComponent<ItemType> = ({
  determineTheRequirements,
  youGetAccesToTheDigitalPl,
  yourEmployeesAndShareTheR,
  propAlignSelf,
  propPadding,
  propWidth,
  propPadding1,
  propMinWidth,
}) => {
  const wrapStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding,
      width: propWidth,
    };
  }, [propAlignSelf, propPadding, propWidth]);

  const heading4Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
      minWidth: propMinWidth,
    };
  }, [propPadding1, propMinWidth]);

  return (
    <div className={styles.item}>
      <div className={styles.wrap} style={wrapStyle}>
        <div className={styles.textNumber}>
          <div className={styles.before} />
        </div>
        <div className={styles.heading4} style={heading4Style}>
          <h3 className={styles.determineTheRequirements}>
            {determineTheRequirements}
          </h3>
        </div>
      </div>
      <div className={styles.wrap1}>
        <div className={styles.paragraph}>
          <div className={styles.youGetAccesContainer}>
            <p className={styles.youGetAcces}>{youGetAccesToTheDigitalPl}</p>
            <p className={styles.yourEmployeesAnd}>
              {yourEmployeesAndShareTheR}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
