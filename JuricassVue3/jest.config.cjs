module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest'
    //'^.+\\.vue$': 'vue-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@model/(.*)$': '<rootDir>/src/data/model/$1',
    '^@fixtures/(.*)$': '<rootDir>/src/data/fixtures/$1',
    '^~/(.*)$': '<rootDir>/$1'
  }
}
