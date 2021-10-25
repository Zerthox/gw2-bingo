import fractalData from "./fractals.json";
import fieldData from "./fields.json";
import {Item} from "../components/layout";

/** One day in milliseconds. */
const DAY = 24 * 60 * 60 * 1000;

/** Base offset in the daily rotation. */
const OFFSET = 8;

export interface Fractal {
    id: number;
    name: string;
    scales: number[];
}

const toFractal = (id: number): Fractal => fractalData.fractals[id];

/** Collection of fractal data. */
const fractals = {
    all: fractalData.fractals,
    cm: [16, 17, 21].map(toFractal),
    dailies: fractalData.dailies.map((fractals) => fractals.map(toFractal))
};

/** Todays Fractal dailies */
const dailiesToday = (): Fractal[] => fractals.dailies[(Math.floor(Date.now() / DAY) + OFFSET) % 15];

export interface Field {
    fractal: string;
    encounter?: string;
    event: string;
}

/** Collection of field data. */
const fields = {
    all: fieldData.fields,
    cm: fieldData.fields.filter(({fractal}) => fractal.endsWith("CM"))
};


/** Converts field data to a field. */
const toItem = ({fractal, encounter, event}: Field): Item => ({
    title: encounter ? `${fractal} ${encounter}` : fractal,
    content: event
});

/** Generates a set of random IDs */
const random = (size: number): number[] => {
    const result: number[] = [];
    while (result.length < 9) {
        const id = Math.floor(Math.random() * size);
        if (!result.includes(id)) {
            result.push(id);
        }
    }
    return result;
};

export {fractals, toFractal, dailiesToday, fields, random, toItem};
