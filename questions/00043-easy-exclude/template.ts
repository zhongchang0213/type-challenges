type MyExclude<T, U> = T extends U ? never : T

type a = Exclude<string | number | (() => void), Function>

type uni = 'a' | 'b' | 'c'
type I = MyExclude<uni, 'a' | 'b'>

type MC<T> = T extends 'a' ? 'a' : T
type D = MC<uni>

// 初步结论： 两个泛型之间继承 涉及到依次分发
