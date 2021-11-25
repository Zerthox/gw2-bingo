import React from "react";
import classNames from "classnames";
import {Link as GatsbyLink} from "gatsby";
import * as styles from "./link.module.scss";

export interface LinkProps {
    to: string;
    className?: string;
    children: React.ReactNode;
}

export const Link = ({to, className, children}: LinkProps): JSX.Element => (
    to.match(/^\//) ? (
        <GatsbyLink to={to} className={classNames(styles.link, className)}>{children}</GatsbyLink>
    ) : (
        <a
            className={classNames(styles.link, className)}
            href={to}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    )
);
