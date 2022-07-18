import { expect, test } from 'bun:test'
import { getWifiName } from '../src'

test('getWifiName', () => {
  const notEmpty = getWifiName() !== ''
  expect(notEmpty).toBe(true)
})
