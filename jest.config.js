module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    testMatch: [
        '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
        '**/*.steps.ts'
    ],
    // testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  }