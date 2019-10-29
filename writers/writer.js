const fs = require('fs');

const write = (path, str) => {
  fs.writeFileSync(path, str, 'utf8');
};

const writeJSON = (path, obj) => {
  write(path, JSON.stringify(obj));
};

module.exports = {
  write,
  writeJSON
};