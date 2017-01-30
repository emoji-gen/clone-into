'use strict'

import fs from 'fs'
import path from 'path'
import vm from 'vm'

import test from 'ava'
import sinon from 'sinon'

const opts   = { encoding: 'utf-8' }
const source = fs.readFileSync(path.join(__dirname, 'index.js'), opts)

test('in firefox', t => {
  const context = {
    module: {},
    cloneInto: sinon.spy(obj => obj),
  }
  vm.createContext(context)
  vm.runInContext(source, context)

  const obj         = { foo: 1 }
  const targetScope = { bar: 2 }
  const result      = context.module.exports(obj, targetScope)

  t.deepEqual(result, obj)
  t.true(context.cloneInto.called)
  t.deepEqual(context.cloneInto.args[0][0], obj)
  t.deepEqual(context.cloneInto.args[0][1], targetScope)
  t.deepEqual(context.cloneInto.args[0][2], undefined)
})

test('in not firefox', t => {
  const context = {
    module: {},
  }
  vm.createContext(context)
  vm.runInContext(source, context)

  const obj         = { foo: 1 }
  const targetScope = { bar: 2 }
  const result      = context.module.exports(obj, targetScope)

  t.deepEqual(result, obj)
})
