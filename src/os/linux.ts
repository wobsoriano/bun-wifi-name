const getWifiName = () => {
  const { stdout } = Bun.spawnSync(['iwgetid', '--raw'])

  const name = stdout.toString().replace('\n', '')

  if (!name) {
    throw new Error('Could not get SSID')
  }

  return name
}

export default getWifiName
