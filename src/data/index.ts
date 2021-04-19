import dataCM from "./cm.json";

interface Fractal {
    global?: string[];
    encounters?: {[encounter: string]: string[]};
}

type Data = {[fractal: string]: Fractal};

export interface Field {
    fractal: string;
    event: string;
}

/** Flattens nested data into an array of fields. */
const flatten = (data: Data): Field[] => Object.entries(data).map(([fractal, {global = [], encounters = {}}]) => {
    const flatGlobals = global.map((event) => ({fractal: fractal, event}));
    const flatEncounters = Object.entries(encounters).map(([encounter, fields]) => fields.map((event) => ({fractal: `${fractal} ${encounter}`, event}))).flat();
    return flatGlobals.concat(flatEncounters);
}).flat();

const fieldsCM = flatten(dataCM);

/** Collection of all available fields. */
const getAll = (): Field[] => fieldsCM;

/** Collection of all fields for CM. */
const getCM = (): Field[] => fieldsCM;

/** Generates a set of random IDs */
const random = (size: number): Array<number> => {
    const result = [];
    while (result.length < 9) {
        const id = Math.floor(Math.random() * size);
        if (!result.includes(id)) {
            result.push(id);
        }
    }
    return result;
};

export default {getAll, getCM, random};
