import React, {forwardRef, ForwardedRef} from "react";
import Card from "./card";
import {fields, toItem} from "../../data";

export interface BingoProps {
    ids: number[];
}

const Bingo = ({ids}: BingoProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => (
    <Card ref={ref} tiles={ids.map((id) => toItem(fields.all[id]))}/>
);

export default forwardRef(Bingo);
