import getDarwinWifiName from './os/darwin'
import getLinuxWifiName from './os/linux'
import getWin32WifiName from './os/win32'

const OS = process.platform

export function getWifiName() {
  if (OS === "darwin") {
    return getDarwinWifiName()
  } else if (OS === 'win32') {
    return getWin32WifiName()
  } else if (OS === "linux") {
    return getLinuxWifiName()
  }

  throw new Error("Not supported")
}

export default getWifiName
