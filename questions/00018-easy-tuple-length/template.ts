type Length<T extends readonly any[]> = T['length']

type myTuple = readonly any[]

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const

type T = typeof tesla

type C = T extends myTuple ? true : false

// tuple  readonly any[] 不可修改的数组
