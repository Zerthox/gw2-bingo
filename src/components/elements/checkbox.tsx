import React from "react";
import classNames from "classnames";
import * as styles from "./checkbox.module.scss";

export interface CheckboxProps {
    checked: boolean;
    disabled?: boolean;
    className?: string;
    children?: React.ReactNode;
    onChange?: (checked: boolean) => void;
}

export const Checkbox = ({checked, disabled = false, className, children, onChange}: CheckboxProps): JSX.Element => (
    <label className={classNames(styles.checkbox, {[styles.disabled]: disabled}, className)}>
        <input
            type="checkbox"
            className={styles.input}
            checked={checked}
            disabled={disabled}
            onChange={({target}) => onChange instanceof Function && onChange(target.checked)}
        />
        <div className={styles.label}>{children}</div>
    </label>
);
