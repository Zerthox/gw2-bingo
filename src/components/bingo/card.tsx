import React, {useState} from "react";
import Tile, {TileProps} from "./tile";
import * as styles from "./card.module.scss";

export type FieldProps = Omit<TileProps, "highlight">;

export interface CardProps {
    tiles: Array<FieldProps>;
}

const Card = ({tiles}: CardProps): JSX.Element => {
    const [active, setActive] = useState(Array<boolean>(9).fill(false));
    return (
        <div className={styles.card}>
            {tiles.map((props, i) => (
                <Tile
                    key={i}
                    {...props}
                    highlight={active[i]}
                    className={props.className}
                    onClick={() => {
                        active[i] = !active[i];
                        setActive([...active]);
                    }}
                />
            ))}
        </div>
    );
};

export default Card;
