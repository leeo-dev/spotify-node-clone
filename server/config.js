import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const currentDir = dirname(fileURLToPath(import.meta.url))
const root = join(currentDir, '../')
const audioDirectory = join(root, 'audio')
const publicDirectory = join(root, 'public')

export default {
  port: process.env.PORT || 3000,
  dir: {
    root,
    audioDirectory,
    publicDirectory,
    songsDirectory: join(audioDirectory, 'songs'),
    fxDirectory: join(audioDirectory, 'fx'),
  },
  pages: {
    homeHTML: 'home/index.html',
    controllerHTML: 'controller/index.html',
  },
  location: {
    home: "/home"
  },
  constants: {
    CONTENT_TYPE: {
      '.html': 'text/html',
      '.css': 'text/css',
      '.js': 'text/javascript',
    }
  }
}




// logger.info(import.meta.url) // file:///D:/Windows%20-%202022/Documents/Personal/spotify-node-clone/server/config.js
// logger.info(fileURLToPath(import.meta.url)) // D:\Windows - 2022\Documents\Personal\spotify-node-clone\server\config.js
// logger.info(dirname(fileURLToPath(import.meta.url))) // D:\Windows - 2022\Documents\Personal\spotify-node-clone\server