import React from "react";
import * as Styles from "./paragraph.module.scss";

export interface ParagraphProps {
    children: React.ReactNode;
}

const Paragraph = ({children}: ParagraphProps): JSX.Element => (
    <div className={Styles.paragraph}>{children}</div>
);

export default Paragraph;
