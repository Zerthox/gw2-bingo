import {useStaticQuery, graphql} from "gatsby";
import {Fractal} from "./fractals";
import {Item} from "../components/elements";

export const enum Mode {
    Normal = "Normal",
    CM = "CM",
    Both = "Both"
}

export interface Field {
    fractal: string;
    mode?: Mode;
    encounter?: string;
    event: string;
}

interface FieldData {
    allFieldsJson: {
        totalCount: number;
        nodes: Field[];
    }
}

const useFieldData = () => useStaticQuery<FieldData>(graphql`
    query {
        allFieldsJson {
            totalCount
            nodes {
                fractal
                mode
                encounter
                event
            }
        }
    }
`);

export const useFields = (): Field[] => useFieldData().allFieldsJson.nodes;

export const useFieldCount = (): number => useFieldData().allFieldsJson.totalCount;

/** Generates a set of random field IDs */
export const randomFields = (all: Field[], whitelist: Field[]): number[] => {
    if (whitelist.length < 9) {
        return [];
    } else {
        const result: number[] = [];
        while (result.length < 9) {
            const generated = whitelist[Math.floor(Math.random() * whitelist.length)];
            const id = all.indexOf(generated);
            if (!result.includes(id)) {
                result.push(id);
            }
        }
        return result;
    }
};

/** Converts field data to an item. */
export const toItem = (fractals: Fractal[], {fractal, mode, encounter, event}: Field): Item => {
    const found = fractals.find(({name}) => name === fractal);
    const display = mode === Mode.CM
        ? `${found ? found.displayCM ?? found.name : fractal} CM`
        : found ? found.display ?? found.name : fractal;
    return {
        title: encounter ? `${display} - ${encounter}` : display,
        content: event
    };
};
