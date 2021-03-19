export type Collection<V, K extends string | number = string> = {
    [key in K | string]: V;
};