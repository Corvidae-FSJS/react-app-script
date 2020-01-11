const { write } = require('../writers/writer');

const createGitignore = path => {
  const gitignore = 
  `
  node_modules
`;

  write(path + '/.gitignore', gitignore);
};

module.exports = createGitignore;