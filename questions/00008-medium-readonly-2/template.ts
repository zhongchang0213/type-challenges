type MyReadonly2<T, K extends keyof T = keyof T> = Omit<T, K> & Readonly<Pick<T, K>>

// 从T中挑选K 并加上仅读 & T中排除K的对象
