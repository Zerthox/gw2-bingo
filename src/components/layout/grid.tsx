import React from "react";
import classNames from "classnames";
import * as styles from "./grid.module.scss";

export interface GridProps {
    className?: string;
    children?: React.ReactNode;
}

const Grid = ({className, children}: GridProps): JSX.Element => (
    <div className={classNames(styles.grid, className)}>
        {children}
    </div>
);

export default Grid;
