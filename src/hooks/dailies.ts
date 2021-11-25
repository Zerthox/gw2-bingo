import {useStaticQuery, graphql} from "gatsby";

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

export const useDailies = (): number[][] => useDailyData().allDailiesJson.nodes.map(({_0, _1, _2}) => [_0, _1, _2]);

/** One day in milliseconds. */
const DAY = 24 * 60 * 60 * 1000;

/** Base offset in the daily rotation. */
const OFFSET = 8;

/** Todays fractal daily ids. */
export const useTodaysDailies = (): number[] => useDailies()[(Math.floor(Date.now() / DAY) + OFFSET) % 15];
