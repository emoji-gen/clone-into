'use strict'

import fs from 'fs'
import path from 'path'
const vm = require('vm')

const opts = { encoding: 'utf-8' }
const source = fs.readFileSync(path.join(__dirname, '../dist/index.js'), opts)

test('in firefox', () => {
  const context = {
    module: {},
    cloneInto: jest.fn(obj => obj),
  }
  vm.createContext(context)
  vm.runInContext(source, context)

  const obj = { foo: 1 }
  const targetScope = { bar: 2 }
  const result = context.module.exports(obj, targetScope)

  expect(result).toBe(obj)
  expect(context.cloneInto).toBeCalled()
  expect(context.cloneInto.mock.calls[0][0]).toBe(obj)
  expect(context.cloneInto.mock.calls[0][1]).toBe(targetScope)
  expect(context.cloneInto.mock.calls[0][2]).toBeUndefined()
})

test('in not firefox', () => {
  const context = {
    module: {},
  }
  vm.createContext(context)
  vm.runInContext(source, context)

  const obj = { foo: 1 }
  const targetScope = { bar: 2 }
  const result = context.module.exports(obj, targetScope)

  expect(result).toBe(obj)
})
