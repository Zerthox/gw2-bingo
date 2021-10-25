import React from "react";
import classNames from "classnames";
import * as styles from "./tile.module.scss";

export interface Item {
    title: string;
    content: string;
}

export interface TileProps extends Item {
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
