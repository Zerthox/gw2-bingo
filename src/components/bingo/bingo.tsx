import React from "react";
import Card from "./card";
import data from "../../data";

export interface BingoProps {
    fields: Array<number>;
}

const Bingo = ({fields}: BingoProps): JSX.Element => (
    <Card tiles={fields.map((id) => {
        const {fractal, event} = data.getAll()[id];
        return {title: fractal, content: event};
    })}/>
);

export default Bingo;
