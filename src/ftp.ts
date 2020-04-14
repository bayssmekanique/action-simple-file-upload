import FTPClient from 'ftp'
import path from 'path'

export interface Options {
  user: string,
  password: string,
  host: string,
  port: string,
  src: string,
  dest: string
}

export default async function UploadFile(options: Options) {
  const ftpClient = new FTPClient()

  const put = (src: string, dest: string) => {
    return new Promise((resolve, reject) => {
      ftpClient.put(src, dest, error => {
        error ? reject(error) : resolve()
      })
    })
  }

  const mkdir = (path: string) => {
    return new Promise((resolve, reject) => {
      ftpClient.mkdir(path, true, error => {
        error ? reject(error) : resolve()
      })
    })
  }

  return new Promise((resolve, reject) => {
    ftpClient.on('ready', async () => {
      try {
        await mkdir(path.dirname(options.dest))
        await put(path.resolve(options.src), options.dest)
        ftpClient.end()
        resolve('Upload Successful')
      } catch (error) {
        reject(error)
      }
    })
  
    ftpClient.connect({
      host: options.host,
      port: parseInt(options.port, 10),
      user: options.user,
      password: options.password
    })
  })
}