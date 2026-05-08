# TESTING-TOP

This repository contains solutions for The Odin Project’s Testing Practice exercise, focused on writing unit tests with Jest and practicing **Test Driven Development (TDD)**. It uses Node.js as the runtime environment for Jest. Babel is configured to enable ES Modules (`import/export`) compatibility with Jest.

## 🚀 Tech Stack 

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/docs/getting-started)
[![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)](https://babeljs.io/docs/)

## 🎯 Purpose

The goal of this project is to strengthen core JavaScript skills while learning how to:

- Write unit tests using Jest.

- Apply **Test Driven Development (TDD)**.

- Structure small, reusable functions.

- Handle edge cases through testing.

- Work with ES Modules in a testing environment.

## 🧪 Testing

All functions were developed using **TDD (Test Driven Development)**:

1. Write a failing test

2. Implement minimum code to pass

3. Refactor

4. Repeat

### Run Tests

```bash
npm test
```

### Watch mode

```bash
npm run test:watch
```

## ⚙️ Configuration Notes

This project uses:

- `"type": "module"` → enables ES module syntax (import/export).

- `babel-jest` → allows Jest to run ES module-based code.

- `@babel/preset-env` → transpiles modern JavaScript for testing compatibility.

- `Node.js` is used as the runtime environment for executing tests.

## Project Structure 

```
/src
  capitalize.js
  reverseString.js
  calculator.js
  caesarCipher.js
  analyzeArray.js

/tests
  capitalize.test.js
  reverseString.test.js
  calculator.test.js
  caesarCipher.test.js
  analyzeArray.test.js
```

## What I learned

- Writing unit tests with Jest from scratch.

- Structuring small, testable JavaScript functions.

- Thinking through edge cases before implementation.

- Working with ES Modules in a Node.js testing environment.

- Applying Test Driven Development (TDD) in practice.

## 📚 Notes

- Intended for learning purposes, focusing on testing fundamentals rather than production-grade architecture.

- Tests are written using Jest and follow a Test Driven Development workflow.

## 🔗 Repository

[TESTING-TOP](https://github.com/nishadnp/testing-TOP)