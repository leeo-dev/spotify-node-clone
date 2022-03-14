import fs from 'fs' 
import fsPromises from 'fs/promises'
import config from './config.js'
import { join, extname } from 'path'
export class Service {
  createFileStream(fileName) {
    return fs.createReadStream(fileName)
  }

  async getFileInfo (file) {
    // file = home/index
    const fullFilePath = join(config.dir.publicDirectory, file)
    // valida se existe
    await fsPromises.access(fullFilePath)
    const fileType = extname(fullFilePath)

    return {
      type: fileType,
      name: fullFilePath
    }
  }

  async getFileStream(fileName) {
    const { name, type } = await this.getFileInfo(fileName)
    return {
      stream: this.createFileStream(name),
      type
    }
  }
}