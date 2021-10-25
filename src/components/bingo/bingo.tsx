import React from "react";
import Card from "./card";
import {fields, toItem} from "../../data";

export interface BingoProps {
    ids: number[];
}

const Bingo = ({ids}: BingoProps): JSX.Element => (
    <Card tiles={ids.map((id) => toItem(fields.all[id]))}/>
);

export default Bingo;
