import { exec } from 'bun-utilities/spawn'

const getWifiName = () => {
  const { stdout } = exec(['iwgetid', '--raw'])

  const name = stdout!.replace('\n', '')

  if (!name) {
    throw new Error('Could not get SSID')
  }

  return name
}

export default getWifiName
