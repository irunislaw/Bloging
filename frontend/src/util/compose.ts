export const compose = <T>(...fns: any[]) => (x: any[]) => fns.reduce((acc, fn) => fn(acc), x) as T;
