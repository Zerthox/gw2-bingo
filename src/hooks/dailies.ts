import {useStaticQuery, graphql} from "gatsby";

interface DailyEntry {
    _0: number;
    _1: number;
    _2: number;
}

interface DailyData {
    allDailiesJson: {
        nodes: DailyEntry[];
    }
    allRecsJson: {
        nodes: DailyEntry[];
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
        allRecsJson {
            nodes {
                _0
                _1
                _2
            }
        }
    }
`);

export const useDailies = (): number[][] => useDailyData().allDailiesJson.nodes.map(({_0, _1, _2}) => [_0, _1, _2]);

export const useRecs = (): number[][] => useDailyData().allRecsJson.nodes.map(({_0, _1, _2}) => [_0, _1, _2]);

/** One day in milliseconds. */
const DAY = 24 * 60 * 60 * 1000;

/** Base offset in the daily rotation. */
const OFFSET = 8;

/** Todays index in the daily rotation. */
const todaysIndex = () => (Math.floor(Date.now() / DAY) + OFFSET) % 15;

/** Todays fractal daily ids. */
export const useTodaysDailies = (): number[] => useDailies()[todaysIndex()];

/** Todays fractal rec scales. */
export const useTodaysRecs = (): number[] => useRecs()[todaysIndex()];
