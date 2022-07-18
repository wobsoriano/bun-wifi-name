import { expect, test } from 'bun:test'
import { getWifiName } from '../src'

test('getWifiName', () => {
  // Wifi name is unique so...
  const notEmpty = getWifiName() !== ''
  expect(notEmpty).toBe(true)
})
