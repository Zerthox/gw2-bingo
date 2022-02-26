import React, {HTMLAttributes} from "react";
import classNames from "classnames";
import {upperFirst} from "lodash";
import * as styles from "./flex.module.scss";

export interface FlexProps extends HTMLAttributes<HTMLElement> {
    direction?: "row" | "row-reverse" | "column" | "column-reverse";
    align?: "start" | "end" | "center" | "stretch" | "baseline";
    justify?: "start" | "end" | "center" | "between" | "around" | "evenly";
    wrap?: "no" | "wrap" | "reverse";
}

export const Flex = ({
    className,
    children,
    direction = "row",
    align = "start",
    justify = "start",
    wrap = "no",
    ...props
}: FlexProps): JSX.Element => (
    <div className={classNames(
        styles.flex,
        styles[`direction${upperFirst(direction)}`],
        styles[`align${upperFirst(align)}`],
        styles[`justify${upperFirst(justify)}`],
        styles[`wrap${upperFirst(wrap)}`],
        className
    )} {...props}>
        {children}
    </div>
);
