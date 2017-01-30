interface CloneIntoOptions {
    cloneFunctions?: boolean;
    wrapReflectors?: boolean;
}

declare function cloneInto<T>(
    obj: T,
    targetScope: any,
    options?: CloneIntoOptions
): T;

export = cloneInto;
