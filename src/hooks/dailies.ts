import {useStaticQuery, graphql} from "gatsby";
import {DATE, OFFSET} from "../data";

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

/** Returns the index in the daily rotation for a given date. */
const indexFor = (date: Date) => {
    // calculate time passed since last update
    const passed = date.getTime() - DATE;

    // index is days passed
    return (Math.floor(passed / DAY) + OFFSET) % 15;
};

/** Returns the fractal daily ids for a given date. */
export const useDailiesFor = (date: Date): number[] => useDailies()[indexFor(date)];

/** Returns the fractal rec scales for a given date. */
export const useRecsFor = (date: Date): number[] => useRecs()[indexFor(date)];

/** Returns todays fractal daily ids. */
export const useTodaysDailies = (): number[] => useDailiesFor(new Date());

/** Returns todays fractal rec scales. */
export const useTodaysRecs = (): number[] => useRecsFor(new Date());
