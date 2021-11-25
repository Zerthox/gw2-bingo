import {useStaticQuery, graphql} from "gatsby";

export interface Fractal {
    id: number;
    name: string;
    scales: number[];
}

interface FractalData {
    allFractalsJson: {
        nodes: Fractal[];
    }
}

const useFractalData = (): FractalData => useStaticQuery<FractalData>(graphql`
    query {
        allFractalsJson {
            nodes {
                id
                name
                scales
            }
        }
    }
`);

export const useFractals = (): Fractal[] => useFractalData().allFractalsJson.nodes;
