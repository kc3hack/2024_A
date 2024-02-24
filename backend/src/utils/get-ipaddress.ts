import os from 'os';

export const getIPAddresses = (): string[] => {
  const interfaces = os.networkInterfaces();
  const ipAddresses: string[] = [];

  for (const name in interfaces) {
    for (const interfaceInfo of interfaces[name]!) {
      // IPv4アドレスのみを取得し、内部アドレスを除外します。
      if (interfaceInfo.family === 'IPv4' && !interfaceInfo.internal) {
        ipAddresses.push(interfaceInfo.address);
      }
    }
  }

  return ipAddresses;
};
