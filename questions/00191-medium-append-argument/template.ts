type AppendArgument<Fn, A> = Fn extends (...args: infer Arg) => infer R ? (...args: [...Arg, A]) => R : never

// type AppendArgument<Fn extends (...args: any) => any, A> = (...args: [...Parameters<Fn>, A]) => ReturnType<Fn>
