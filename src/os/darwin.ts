import { exec } from 'bun-utilities'

const getWifiName = () => {
  const cmd =
    "/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport"

  const { stdout } = exec([cmd, "-I"])

  let name

  name = /^\s*SSID: (.+)\s*$/gm.exec(stdout!)
  name = name && name.length ? name[1] : null

  if (!name) {
    throw new Error("Could not get SSID")
  }

  return name
}

export default getWifiName
