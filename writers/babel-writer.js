const { writeJSON } = require('./writer');

const createBabel = path => {
  const babel = {
    'presets': [
      '@babel/preset-env',
      '@babel/preset-react'
    ],
    'plugins': [
      '@babel/plugin-proposal-class-properties'
    ]

  };

  writeJSON(path + '../.bablrc', babel);
};

module.exports = createBabel;