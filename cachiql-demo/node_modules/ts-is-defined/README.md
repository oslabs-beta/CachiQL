# ts-is-defined

[![npm version](https://badge.fury.io/js/ts-is-defined.svg?t=1495378566925)](https://badge.fury.io/js/ts-is-defined)
[![CircleCI](https://circleci.com/gh/iyegoroff/ts-is-defined.svg?style=svg)](https://circleci.com/gh/iyegoroff/ts-is-defined)
[![Dependency Status](https://david-dm.org/iyegoroff/ts-is-defined.svg?t=1495378566925)](https://david-dm.org/iyegoroff/ts-is-defined)
[![devDependencies Status](https://david-dm.org/iyegoroff/ts-is-defined/dev-status.svg)](https://david-dm.org/iyegoroff/ts-is-defined?type=dev)
[![npm](https://img.shields.io/npm/l/ts-is-defined.svg?t=1495378566925)](https://www.npmjs.com/package/ts-is-defined)

Typescript utilities

```ts
export function isDefined<T>(value: T): value is NonNullable<T> {
  return value !== undefined && value !== null
}

export function assertIsDefined<T>(
  value: T,
  message: string
): asserts value is NonNullable<T> {
  invariant(isDefined(value), message)
}
```
