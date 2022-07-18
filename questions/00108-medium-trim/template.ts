// type Trim<S extends string> = S extends `${' ' | '\n' | '\t'}${infer R}` ? Trim<R> : S extends `${infer R}${' ' | '\n' | '\t'}` ? Trim<R> : S

// best
type space = ' ' | '\n' | '\t'

type Trim<S extends string> = S extends `${space}${infer R}` | `${infer R}${space}` ? Trim<R> : S

