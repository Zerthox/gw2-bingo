import React from "react";
import * as styles from "./paragraph.module.scss";

export interface ParagraphProps {
    children: React.ReactNode;
}

const Paragraph = ({children}: ParagraphProps): JSX.Element => (
    <div className={styles.paragraph}>{children}</div>
);

export default Paragraph;
