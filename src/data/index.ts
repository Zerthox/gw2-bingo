import dataCM from "./cm.json";

type RawData = {[fractal: string]: string[]};

export interface Field {
    fractal: string;
    event: string;
}

/** Flattens nested data into an array of fields. */
const flatten = (data: RawData): Field[] => Object.entries(data).map(([fractal, fields]) => fields.map((event) => ({fractal, event}))).flat();

const processedCM: RawData = {};
for (const [fractal, encounters] of Object.entries(dataCM)) {
    for (const [boss, fields] of Object.entries(encounters)) {
        processedCM[`${fractal} ${boss}`] = fields;
    }
}

const fieldsCM = flatten(processedCM);
console.log(processedCM, fieldsCM);

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
