type TrimLeft<S extends string> = S extends `${' ' | '\n' | '\t'}${infer R}` ? Trim<R> : S
