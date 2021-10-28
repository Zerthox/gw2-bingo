import fractalData from "./fractals.json";
import fieldData from "./fields.json";
import {Item} from "../components/layout";

// TODO: move all data to graphql?

/** One day in milliseconds. */
const DAY = 24 * 60 * 60 * 1000;

/** Base offset in the daily rotation. */
const OFFSET = 8;

export interface Fractal {
    id: number;
    name: string;
    scales: number[];
}

/** Convert a fractal ID to the corresponding fractal data. */
const toFractal = (id: number): Fractal => fractalData.fractals[id];

/** Collection of fractal data. */
const fractals = {
    all: fractalData.fractals as Fractal[],
    cm: [16, 17, 21].map(toFractal) as Fractal[],
    dailies: fractalData.dailies.map((fractals) => fractals.map(toFractal)) as Fractal[][]
};

/** Todays fractal dailies */
const dailiesToday = (): Fractal[] => fractals.dailies[(Math.floor(Date.now() / DAY) + OFFSET) % 15];

export interface Field {
    fractal: string;
    encounter?: string;
    event: string;
}

/** Collection of field data. */
const fields = {
    all: fieldData.fields as Field[],
    cm: fieldData.fields.filter(({fractal}) => fractal.endsWith("CM")) as Field[]
};


/** Converts field data to an item. */
const toItem = ({fractal, encounter, event}: Field): Item => ({
    title: encounter ? `${fractal} ${encounter}` : fractal,
    content: event
});

/** Generates a set of random field IDs */
const random = (whitelist: Field[] = fields.all): number[] => {
    if (whitelist.length < 9) {
        return [];
    } else {
        const result: number[] = [];
        while (result.length < 9) {
            const generated = whitelist[Math.floor(Math.random() * whitelist.length)];
            const id = fields.all.indexOf(generated);
            if (!result.includes(id)) {
                result.push(id);
            }
        }
        return result;
    }
};

export {fractals, toFractal, dailiesToday, fields, random, toItem};
