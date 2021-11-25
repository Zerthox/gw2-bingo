import classNames from "classnames";
import React, {HTMLAttributes} from "react";
import * as styles from "./paragraph.module.scss";

export interface ParagraphProps extends HTMLAttributes<HTMLElement> {
    align?: "left" | "right" | "center" | "justify";
}

export const Paragraph = ({align = "left", className, children, ...props}: ParagraphProps): JSX.Element => (
    <div
        className={classNames(styles.paragraph, styles[align], className)}
        {...props}
    >
        {children}
    </div>
);
