class A {
  getArgs: () => any[];

  constructor(...args: any[]) {
    this.getArgs = () => args;
  }
}

export const enum B {
  B1,
  B2
}

export { A };
