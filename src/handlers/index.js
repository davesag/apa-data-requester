import fs   from 'fs';
import path from 'path';

const basename  = path.basename(module.filename);

let handlers = {};

const isHandlerFile = (file) => {
  return (file.indexOf('.') !== 0) &&       // no dot files
         (file !== basename) &&             // ignore index itself
  (file.slice(-3) === '.js');               // must end in .js
};

const collectHandler = (file) => {
  const name = file.slice(0, -3);
  handlers[name] = require(`./${name}`);
};

fs.readdirSync(__dirname)
  .filter(isHandlerFile)
  .forEach(collectHandler);

module.exports = handlers;
