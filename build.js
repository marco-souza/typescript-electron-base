#! env node
const packager = require('electron-packager')
const path = require('path')
const config = {
  dir: '.',
  out: './builds',
  platform: ['darwin', 'linux'],
  arch: 'x64',
  asar: false,
  icon: path.resolve(__dirname, 'images/icon'),
  name: 'DevDocs',
  overwrite: true,
  ignore: ['node_modules']
}

packager(config, (err) => !err && console.log("\n\nGreat, we just build everything, let's have a party now 🤩 🎉  \n"))
