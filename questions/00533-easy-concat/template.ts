type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U]

// 新增First Tail 获取数据头部和尾部元素

type First<T extends unknown[]> = T extends [infer F, ...infer _r] ? F : never

type Tail<T extends unknown[]> = T extends [...any, infer L] ? L : never

// 数组继承可以用infer 与 ...运算符展开， 其中支持...any来达到去末尾的元素

export {}
