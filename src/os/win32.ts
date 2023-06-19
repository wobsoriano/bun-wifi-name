const getWifiName = () => {
  const { stdout } = Bun.spawnSync(['netsh', 'wlan', 'show', 'interface'])

  let name

  name = /^\s*SSID\s*: (.+)\s*$/gm.exec(stdout.toString())
  name = name && name.length ? name[1] : null

  if (!name) {
    throw new Error('Could not get SSID')
  }

  return name
}

export default getWifiName
