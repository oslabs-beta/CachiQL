import invariant from 'ts-tiny-invariant'

export function isDefined<T>(value: T): value is NonNullable<T> {
  return value !== undefined && value !== null
}

export function assertIsDefined<T>(
  value: T,
  message: string
): asserts value is NonNullable<T> {
  invariant(isDefined(value), message)
}
