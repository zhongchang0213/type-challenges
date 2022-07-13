type Chainable<O extends {} = {}> = {
  option<K extends string, V>(key: K extends keyof O ? never : K, value: V): Chainable<O & { [k in K]: V }>
  get(): O
}
