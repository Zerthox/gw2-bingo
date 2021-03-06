/** Helper for conversion. */
const converter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";

/** Encodes IDs as a 12 character base64 string. */
export const encode = (ids: number[]): string => {
    // check ids length
    if (ids.length !== 9) {
        return "";
    }

    // convert into 4x 2-bit numbers
    const numbers: number[] = [];
    for (const id of ids) {
        numbers.push(id & 3);
        numbers.push((id >> 2) & 3);
        numbers.push((id >> 4) & 3);
        numbers.push((id >> 6) & 3);
    }

    // group numbers to base64 code
    let code = "";
    for (let i = 0; i < numbers.length; i += 3) {
        code += converter.charAt(numbers[i] + (numbers[i + 1] << 2) + (numbers[i + 2] << 4));
    }
    return code;
};

/** Decodes IDs from a 12 character base64 string. */
export const decode = (code: string): number[] => {
    // check code length
    if (code.length !== 12) {
        return [];
    }

    // decode numbers
    const numbers: number[] = [];
    for (const char of code.split("")) {
        // convert it to 6-bit number
        const code = converter.indexOf(char);

        // check code
        if (code === -1) {
            return [];
        }

        // split into 3x 2-bit numbers
        numbers.push(code & 3);
        numbers.push((code >> 2) & 3);
        numbers.push((code >> 4) & 3);
    }

    // group numbers to bytes
    const ids: number[] = [];
    for (let i = 0; i < numbers.length; i += 4) {
        ids.push(numbers[i] + (numbers[i + 1] << 2) + (numbers[i + 2] << 4) + (numbers [i + 3] << 6));
    }
    return ids;
};
