import data from "./data.json";

export interface Fractal {
    fractal: string;
    encounter?: string;
    event: string;
}

/** Collection of all available fields. */
const all = data.fields;

/** Collection of all fields for CM. */
const cm = data.fields.filter(({fractal}) => fractal.endsWith("CM"));

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

export interface Field {
    title: string;
    content: string;
}

/** Converts fractal data to a field. */
const toField = ({fractal, encounter, event}: Fractal): Field => ({
    title: encounter ? `${fractal} ${encounter}` : fractal,
    content: event
});

export default {all, cm, random, toField};
