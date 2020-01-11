const { write } = require('../writers/writer');

const createIndex = path => {
  const index = 
  `
  #!/usr/bin/env node
`;

  write(path + '../index.js', index);
};

module.exports = createIndex;