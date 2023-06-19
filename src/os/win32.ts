import { exec } from 'bun-utilities/spawn'

const getWifiName = () => {
  const { stdout } = exec(['netsh', 'wlan', 'show', 'interface'])

  let name

  name = /^\s*SSID\s*: (.+)\s*$/gm.exec(stdout!)
  name = name && name.length ? name[1] : null

  if (!name) {
    throw new Error('Could not get SSID')
  }

  return name
}

export default getWifiName
