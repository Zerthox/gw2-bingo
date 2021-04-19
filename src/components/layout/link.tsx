import React from "react";
import classNames from "classnames";
import {Link as GatsbyLink} from "gatsby";
import * as Styles from "./link.module.scss";

export interface LinkProps {
    to: string;
    className?: string;
    children: React.ReactNode;
}

const Link = ({to, className, children}: LinkProps): JSX.Element => (
    to.match(/^\//) ? (
        <GatsbyLink to={to} className={classNames(Styles.link, className)}>{children}</GatsbyLink>
    ) : (
        <a
            className={classNames(Styles.link, className)}
            href={to}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    )
);

export default Link;
