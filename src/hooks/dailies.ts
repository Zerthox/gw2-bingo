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
const OFFSET = 0;

/** Returns the index in the daily rotation for a given date. */
const indexFor = (date: Date) => {
    // calculate the time passed since start of the year
    const start = Date.UTC(date.getUTCFullYear(), 0, 1);
    const passed = date.getTime() - start;

    // days passed are the rotation
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
