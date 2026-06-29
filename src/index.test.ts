import { afterEach, expect, rs, test } from '@rstest/core';

afterEach(() => {
  rs.resetModules();
  rs.unstubAllGlobals();
});

test('in firefox', async () => {
  const mock = rs.fn((obj, targetScope, options) => obj);
  rs.stubGlobal('cloneInto', mock);

  const { cloneInto } = await import('./index.js');

  expect(rs.isMockFunction(cloneInto)).toBe(true);

  const obj = { foo: 1 };
  const targetScope = { bar: 2 };
  const result = cloneInto(obj, targetScope);

  expect(result).toBe(obj);
  expect(mock).toBeCalled();
  expect(mock.mock.calls[0][0]).toBe(obj);
  expect(mock.mock.calls[0][1]).toBe(targetScope);
  expect(mock.mock.calls[0][2]).toBeUndefined();
});

test('in not firefox', async () => {
  const { cloneInto } = await import('./index.js');

  expect(rs.isMockFunction(cloneInto)).toBe(false);

  const obj = { foo: 1 };
  const targetScope = { bar: 2 };
  const result = cloneInto(obj, targetScope);

  expect(result).toBe(obj);
});
