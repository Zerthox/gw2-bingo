import {useStaticQuery, graphql} from "gatsby";
import {useFractals, Fractal} from "./fractals";

interface DailyData {
    allDailiesJson: {
        nodes: {
            _0: number;
            _1: number;
            _2: number;
        }[]
    }
}

const useDailyData = () => useStaticQuery<DailyData>(graphql`
    query {
        allDailiesJson {
            nodes {
                _0
                _1
                _2
            }
        }
    }
`);

export const useDailies = (): Fractal[][] => {
    const fractals = useFractals();
    return useDailyData().allDailiesJson.nodes.map(({_0, _1, _2}) => [fractals[_0], fractals[_1], fractals[_2]]);
};

/** One day in milliseconds. */
const DAY = 24 * 60 * 60 * 1000;

/** Base offset in the daily rotation. */
const OFFSET = 8;

/** Todays fractal dailies */
export const useTodaysDailies = (): Fractal[] => useDailies()[(Math.floor(Date.now() / DAY) + OFFSET) % 15];
