export const compose = (...fns: any[]) => (x: any[]) => fns.reduce((acc, fn) => fn(acc), x);
