const { writeJSON } = require('./writer');

const createPackageJSON = path => {
  const packageJSON = {
    "name": "react-app-script",
    "version": "1.0.0",
    "description": "",
    "main": "src/index.js",
    "scripts": {
      "test": "jest --verbose",
      "test:watch": "npm run test -- --watch",
      "build": "webpack -p --devtool source-map",
      "start": "webpack-dev-server --hot --mode development --devtool eval-source-map"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {},
    "devDependencies": {}
  }


  writeJSON(path + './package.json', packageJSON)
}

module.exports = createPackageJSON;