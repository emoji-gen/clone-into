interface CloneIntoOptions {
    cloneFunctions: boolean;
    wrapReflectors: boolean;
}

type CloneInto = <T>(obj: T, targetScope: any, options?: CloneIntoOptions) => T;

function getCloneInto() : CloneInto {
    // @ts-ignore
    if (typeof globalThis.cloneInto === 'function') {
        // @ts-ignore
        return globalThis.cloneInto
    }

    return <T>(obj: T, targetScope: any, options?: CloneIntoOptions) => {
        return obj
    }
}

export const cloneInto = getCloneInto()
