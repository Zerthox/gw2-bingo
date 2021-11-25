import {useStaticQuery, graphql} from "gatsby";
import {Item} from "../components/elements";

export interface Field {
    fractal: string;
    encounter?: string;
    event: string;
}

interface FieldData {
    allFieldsJson: {
        totalCount: number;
        nodes: Field[];
    }
}

const useFieldData = (): FieldData => useStaticQuery<FieldData>(graphql`
    query {
        allFieldsJson {
            totalCount
            nodes {
                fractal
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
export const toItem = ({fractal, encounter, event}: Field): Item => ({
    title: encounter ? `${fractal} - ${encounter}` : fractal,
    content: event
});
