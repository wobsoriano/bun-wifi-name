import { expect, test } from 'bun:test'
import { getWifiName } from '../src'

test('getWifiName', () => {
  expect(getWifiName()).toBeTruthy()
})
