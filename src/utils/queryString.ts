export const isPlainObject = (
    value: unknown
): value is Record<string, unknown> =>
    typeof value === 'object' && value !== null;

export const queryString = (data: Record<string, unknown>): string => {
    const makeQuery = (data: unknown, parent = ''): string => {
        if (Array.isArray(data)) {
            return data
                .map((item, idx) => makeQuery(item, `${parent}[${idx}]`))
                .join('&');
        }

        if (isPlainObject(data)) {
            return Object.keys(data)
                .map((key) => makeQuery(data[key], `${parent}[${key}]`))
                .join('&');
        }

        if (data === null || data === undefined) {
            return `${parent}=`;
        }

        return `${parent}=${data}`;
    };

    return Object.keys(data)
        .map((key) => makeQuery(data[key], key))
        .join('&');
};
