const parserPlugins = [
  'jsx',
  'classProperties', // '@babel/plugin-proposal-class-properties',
  'syntax-typescript',
  '@babel/plugin-syntax-typescript',
  'typescript',
];

const generatorOptions = {
  retainLines: true,
  retainFunctionParens: true,
};

module.exports = {
  parserPlugins,
  generatorOptions,
};
