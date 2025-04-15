const parserPlugins = [
  'jsx',
  'classProperties', // '@babel/plugin-proposal-class-properties',
  'flow',
  'syntax-typescript',
];

const generatorOptions = {
  retainLines: true,
  retainFunctionParens: true,
};

module.exports = {
  parserPlugins,
  generatorOptions,
};
