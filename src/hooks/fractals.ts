import {useStaticQuery, graphql} from "gatsby";

export interface Fractal {
    id: number;
    name: string;
    display?: string;
    hasCM: boolean;
    displayCM?: string;
    scales: number[];
}

interface FractalData {
    allFractalsJson: {
        nodes: (Omit<Fractal, "id"> & {jsonId: number})[];
    }
}

const useFractalData = () => useStaticQuery<FractalData>(graphql`
    query {
        allFractalsJson {
            nodes {
                jsonId
                name
                display
                hasCM
                displayCM
                scales
            }
        }
    }
`);

export const useFractalsWithLobby = (): Fractal[] => useFractalData().allFractalsJson.nodes.map(({jsonId, ...rest}) => ({id: jsonId, ...rest}));

export const useFractals = (): Fractal[] => useFractalsWithLobby().slice(1);
