import React, {HTMLAttributes} from "react";
import {Link} from "gatsby";
import classNames from "classnames";
import * as styles from "./button.module.scss";

export type ButtonProps = HTMLAttributes<HTMLElement>;

const Button = ({className, children, ...props}: ButtonProps): JSX.Element => (
    <div className={classNames(styles.button, className)} {...props}>
        {children}
    </div>
);

export interface LinkButtonProps extends ButtonProps {
    to: string;
}

const LinkButton = ({children, to, ...props}: LinkButtonProps): JSX.Element => (
    <Link to={to} className={styles.link}>
        <Button {...props}>
            {children}
        </Button>
    </Link>
);

export default Button;
export {LinkButton};
