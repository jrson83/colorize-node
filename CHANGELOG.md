### Changelog

All notable changes to this project will be documented in this file.

## v0.5.0 - unreleased

- bump minimum node version to [18.12.0](https://nodejs.org/en/blog/release/v18.12.0) (node.js 18+ is now required)
- fix package manager install warning
- fix esm exports, now supports cjs & esm exports
- replace default with named export to avoid forcing `allowSyntheticDefaultImports` flag & improve cjs compatibility
- remove redundant `stdout` import from `node:process`
- improve return conditions
- improve types to infer color names, fixes chain autocompletes in IDE
- enable compiling typescript declarations
- update dependencies
- replace unbuild with pkgroll
- replace vitest with native node.js test runner
- refactor tests, update workflow node version

## v0.4.1 - 2023-09-19

- update all dependencies

## v0.3.1 - 2023-06-15

- update all dependencies

## v0.3.0 - 2023-01-29

- rewrite from scratch in TypeScript
- add `cjs` & `mjs` support
- fix type errors
- optimize performance (faster then chalk, but picocolors is still faster)
- replace `prettier` with `rome`
- replace `jest` with `vitest`
- rewrite tests with `vitest`
- update `readme.md`
- update package exports

## v0.2.0 - 2022-04-21

- add shields.io badges to `README.md`
- add `CHANGELOG.md`
- update `.npmignore`

## v0.1.0 - 2022-04-07

- initial release
