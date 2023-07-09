
module.exports = {
  testEnvironment: 'jsdom', 
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'], // Паттерны для поиска тестовых файлов
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'], // Расширения файлов, которые могут быть импортированы в тестах
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Используем Babel для транспиляции JavaScript и JSX
  },
  setupFilesAfterEnv: ['./setupTests.js'], // Файлы, 
  coveragePathIgnorePatterns: ['/node_modules/'], // Игнорировать покрытие для файлов из node_modules
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy', // Заглушка для импорта CSS модулей
  },
};