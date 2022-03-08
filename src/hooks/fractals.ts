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

export const scaleToTier = (scale: number): number => {
    if (scale <= 0 || scale >= 100) {
        return 0;
    } else if (scale <= 25) {
        return 1;
    } else if (scale <= 50) {
        return 2;
    } else if (scale <= 75) {
        return 3;
    } else {
        return 4;
    }
};
