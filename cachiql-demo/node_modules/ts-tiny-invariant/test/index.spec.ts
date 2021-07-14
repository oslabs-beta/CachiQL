import invariant from '../src'

test('should throw on failed condition', () => {
  expect(() => { invariant(false, 'fail') }).toThrow('Invariant failed: fail')
})

test('should not throw on passed condition', () => {
  expect(() => { invariant(true, 'pass') }).not.toThrow()
})
