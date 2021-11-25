import React, {forwardRef, ForwardedRef} from "react";
import {useFields, toItem} from "../../hooks";
import Card from "./card";

export interface BingoProps {
    ids: number[];
}

const Bingo = ({ids}: BingoProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const fields = useFields();
    return <Card ref={ref} tiles={ids.map((id) => toItem(fields[id]))}/>;
};

export default forwardRef(Bingo);
