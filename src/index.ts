import getDarwinWifiName from './os/darwin'
import getLinuxWifiName from './os/linux'
import getWin32WifiName from './os/win32'

const OS = process.platform

export function getWifiName() {
  switch (OS) {
    case 'darwin':
      return getDarwinWifiName()
    case 'win32':
      return getWin32WifiName()
    case 'linux':
      return getLinuxWifiName()
    default:
      throw new Error("Not supported")
  }
}

export default getWifiName
