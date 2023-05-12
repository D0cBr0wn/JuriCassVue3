module.exports = {
  presets: ['@babel/preset-env', 'babel-preset-vite'],
  env: {
    test: {
      presets: [['@babel/preset-env', { targets: { node: true } }]],
      plugins: ['@babel/plugin-proposal-class-properties', 'babel-plugin-transform-import-meta']
    }
  }
}
