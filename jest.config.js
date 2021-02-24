module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    testMatch: [
        '(/__test__/.*|(\\.|/)(test|spec))\\.tsx?$',
        '**/*.test.ts',
        '**/*.steps.ts'
    ],
    // testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  }