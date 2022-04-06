import util from 'util'

const colorize = Object.fromEntries(
  Object.entries(util.inspect.colors).map(([color, code]) => [
    color,
    (string) => {
      if (!code) return
      if (!process.stdout.hasColors()) return string
      return `\x1b[${code[0]}m${string}\x1b[${code[1]}m`
    }
  ])
)

export default colorize
