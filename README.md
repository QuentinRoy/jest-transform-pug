# jest-transform-pug

[![NPM](https://img.shields.io/npm/v/jest-transform-pug.svg)](https://www.npmjs.com/package/jest-transform-pug)
[![dependencies Status](https://david-dm.org/QuentinRoy/jest-transform-pug/status.svg)](https://david-dm.org/QuentinRoy/jest-transform-pug)
[![devDependencies Status](https://david-dm.org/QuentinRoy/jest-transform-pug/dev-status.svg)](https://david-dm.org/QuentinRoy/jest-transform-pug?type=dev)

A [Jest](https://github.com/facebook/jest) transform that compiles your
[.pug](https://github.com/pugjs/pug) files as template functions just like your
pug loader would (e.g [rollup-plugin-pug](https://github.com/aMarCruz/rollup-plugin-pug)
or [pug-loader](https://github.com/pugjs/pug-loader)).

## Usage

```
npm install jest-transform-pug --save-dev
```

## Setup

Define `jest-transform-pug` as a transformer for Jest, by adding
the following to your Jest configuration in your `package.json`:

```json
{
  "jest": {
    "transform": {
      "\\.(pug)$": "jest-transform-pug"
    }
  }
}
```

Warning, this would override default transforms automatically set up by jest.
Hence, if you rely on e.g., babel transpilation in your tests, you will need
to set up babel jest as well:

```json
{
  "jest": {
    "transform": {
      "^.+\\.jsx?$": "babel-jest",
      "\\.(pug)$": "jest-transform-pug"
    }
  }
}
```
