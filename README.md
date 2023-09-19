# colorize-node

![npm](https://img.shields.io/npm/v/colorize-node)
![node-current](https://img.shields.io/node/v/colorize-node)

> A lightweight library to color Node.js terminal output.

- No dependecies
- TypeScript support
- Node >= 12
- 207 bytes (minified & gzipped)

## Installation

```sh
npm install colorize-node
```

## Usage

```js
import colorize from 'colorize-node'

colorize.red('This string is red')

colorize.green(colorize.bold('This string is green & bold'))

colorize.bgGreen(`This string has green background and ${colorize.bold('this string is bold')}`)
```

## Supported colors

Uses modifiers, foreground & background colors from nodes `util.inspect.colors`.

Taken from the [Node.js docs](https://nodejs.org/api/util.html#customizing-utilinspect-colors):

| Foreground colors | Background colors | Modifiers       |
| ----------------- | ----------------- | --------------- |
| black             | bgBlack           | reset           |
| red               | bgRed             | bold            |
| green             | bgGreen           | italic          |
| yellow            | bgYellow          | underline       |
| blue              | bgBlue            | strikethrough   |
| magenta           | bgMagenta         | hidden          |
| cyan              | bgCyan            | dim             |
| white             | bgWhite           | overlined       |
| gray              | bgGray            | blink           |
| redBright         | bgRedBright       | inverse         |
| greenBright       | bgGreenBright     | doubleunderline |
| yellowBright      | bgYellowBright    | framed          |
| blueBright        | bgBlueBright      |                 |
| magentaBright     | bgMagentaBright   |                 |
| cyanBright        | bgCyanBright      |                 |
| whiteBright       | bgWhiteBright     |                 |

## License

This project is under MIT license.

The `test.js` file bundles portions of [picocolors (ISC License)](https://github.com/alexeyraspopov/picocolors).
