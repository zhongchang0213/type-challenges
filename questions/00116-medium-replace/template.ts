// type Replace<
//   TString extends string,
//   TFrom extends string,
//   TTo extends string,
// > = TString extends `${infer Left}${TFrom}${infer Right}`
//   ? TFrom extends ''
//     ? `${Left}${TFrom}${Right}`
//     : `${Left}${TTo}${Right}`
//   : TString

type Replace<S extends string, From extends string, To extends string> = S extends `${infer L}${From}${infer R}` ? From extends '' ? `${L}${From}${R}` : `${L}${To}${R}` : S
