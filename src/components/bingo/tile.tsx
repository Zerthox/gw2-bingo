import React from "react";
import classNames from "classnames";
import * as Styles from "./tile.module.scss";

export interface TileProps {
    title: string;
    content: string;
    highlight: boolean;
    className?: string;
    onClick?: () => void;
}

const Tile = ({title, content, highlight, className, onClick}: TileProps): JSX.Element => (
    <div
        className={classNames(Styles.tile, className, {
            [Styles.clickable]: onClick instanceof Function,
            [Styles.highlight]: highlight
        })}
        onClick={onClick}
    >
        <div className={Styles.title}>{title}</div>
        <div className={Styles.content}>{content}</div>
    </div>
);

export default Tile;
