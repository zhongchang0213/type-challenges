type ReplaceAll<S extends string, From extends string, To extends string> = S extends `${infer L}${From}${infer R}` ? From extends '' ? `${L}${From}${R}` : `${L}${To}${ReplaceAll<R, From, To>}` : S
