import React from "react";
import classNames from "classnames";
import {Field} from "../../data";
import * as styles from "./tile.module.scss";

export interface TileProps extends Field {
    highlight: boolean;
    className?: string;
    onClick?: () => void;
}

const Tile = ({title, content, highlight, className, onClick}: TileProps): JSX.Element => (
    <div
        className={classNames(styles.tile, className, {
            [styles.clickable]: onClick instanceof Function,
            [styles.highlight]: highlight
        })}
        onClick={onClick}
    >
        <div className={styles.title}>{title}</div>
        <div className={styles.content}>{content}</div>
    </div>
);

export default Tile;
