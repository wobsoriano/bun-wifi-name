const getWifiName = () => {
  const cmd =
    "/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport"

  const { stdout } = Bun.spawnSync([cmd, "-I"])

  let name

  name = /^\s*SSID: (.+)\s*$/gm.exec(stdout.toString())
  name = name && name.length ? name[1] : null

  if (!name) {
    throw new Error("Could not get SSID")
  }

  return name
}

export default getWifiName
