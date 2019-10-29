const fs = require('fs');
const { writeJSON } = require('../writers/writer');

describe('will it mock?', () => {
  it('should mock a file', () => {
    fs.writeFileSync = jest.fn();
    writeJSON('../', { name: 'spot' });
    expect(fs.writeFileSync).toHaveBeenCalledWith('../', '{"name":"spot"}', 'utf8');
  });
});