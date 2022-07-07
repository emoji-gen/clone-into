'use strict'

import fs from 'node:fs'
import path from 'node:path'
import vm from 'node:vm'

const source = fs.readFileSync(path.join(__dirname, '../dist/index.js'), 'utf-8')

test('in firefox', () => {
  const context: any = {
    module: {},
    cloneInto: jest.fn(obj => obj),
  }
  vm.createContext(context)
  vm.runInContext(source, context)

  const obj = { foo: 1 }
  const targetScope = { bar: 2 }
  const result = context.module.exports.cloneInto(obj, targetScope)

  expect(result).toBe(obj)
  expect(context.cloneInto).toBeCalled()
  expect(context.cloneInto.mock.calls[0][0]).toBe(obj)
  expect(context.cloneInto.mock.calls[0][1]).toBe(targetScope)
  expect(context.cloneInto.mock.calls[0][2]).toBeUndefined()
})

test('in not firefox', () => {
  const context: any = {
    module: {},
  }
  vm.createContext(context)
  vm.runInContext(source, context)

  const obj = { foo: 1 }
  const targetScope = { bar: 2 }
  const result = context.module.exports.cloneInto(obj, targetScope)

  expect(result).toBe(obj)
})
