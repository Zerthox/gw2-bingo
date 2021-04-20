import React from "react";
import {Field} from "../../data";
import * as styles from "./list.module.scss";

export interface ListProps {
    children: Field[]
}

const List = ({children}: ListProps): JSX.Element => (
    <div className={styles.list}>
        {children.map(({title, content}, i) => (
            <div key={i} className={styles.entry}>
                <div className={styles.title}>{title}</div>
                <div className={styles.content}>{content}</div>
            </div>
        ))}
    </div>
);

export default List;
