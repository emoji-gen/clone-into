interface CloneIntoOptions {
    cloneFunctions: boolean;
    wrapReflectors: boolean;
}

interface CloneInto {
  <T>(
      obj: T,
      targetScope: any,
      options?: CloneIntoOptions
  ): T;
}

declare const cloneInto: CloneInto;
export = cloneInto;
