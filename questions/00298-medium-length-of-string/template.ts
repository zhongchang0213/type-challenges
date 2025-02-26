export type LengthOfString<S extends string, T extends string[] = []> = S extends `${infer F}${infer R}` ? LengthOfString<R, [...T, F]> : T['length']

