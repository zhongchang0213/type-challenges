type LookUp<U extends { type: string }, T extends string> = {
  [P in T]: U extends { type: T } ? U : never
}[T]
