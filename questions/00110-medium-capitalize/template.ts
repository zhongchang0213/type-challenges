type MyCapitalize<S extends string> = S extends `${infer F}${infer _}` ? `${Uppercase<F>}${_}` : S

type aa = Capitalize<'j'>
