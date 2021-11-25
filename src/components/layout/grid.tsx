import React, {HTMLAttributes} from "react";
import classNames from "classnames";
import * as styles from "./grid.module.scss";

export type GridProps = HTMLAttributes<HTMLElement>;

export const Grid = ({className, children, ...props}: GridProps): JSX.Element => (
    <div className={classNames(styles.grid, className)} {...props}>
        {children}
    </div>
);
