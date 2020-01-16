module.exports = {
  presets: [
    '@babel/env',
    '@babel/react',
    '@babel/typescript'
  ],
  plugins: [
    ["@babel/plugin-syntax-dynamic-import"],
    ['@babel/proposal-decorators', { legacy: true }],
    ['@babel/proposal-class-properties', { loose: true }],
  ]
}
