import React from "react";
import Card from "./card";
import data from "../../data";

export interface BingoProps {
    fields: number[];
}

const Bingo = ({fields}: BingoProps): JSX.Element => (
    <Card tiles={fields.map((id) => data.toField(data.all[id]))}/>
);

export default Bingo;
