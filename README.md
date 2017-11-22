<div align="center">
<h1>jl-toolbox 🛠📦</h1>

<p>CLI toolbox for common scripts for my projects</p>
</div>

<hr />

[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![version][version-badge]][package] [![downloads][downloads-badge]][npmcharts]
[![MIT License][license-badge]][license]

[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors)
[![PRs Welcome][prs-badge]][prs] [![Code of Conduct][coc-badge]][coc]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

## The problem

I do a bunch of open source and want to make it easier to maintain so many
projects.

## This solution

This is a CLI that abstracts away all configuration for my open source projects
for linting, testing, building, and more.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Installation](#installation)
- [Usage](#usage)
- [Inspiration](#inspiration)
- [Other Solutions](#other-solutions)
- [Contributors](#contributors)
- [LICENSE](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `devDependencies`:

```
npm install --save-dev jl-toolbox
```

## Usage

This is a CLI and exposes a bin called `jl-toolbox`. I don't really plan on
documenting or testing it super duper well because it's really specific to my
needs. You'll find all available scripts in `src/scripts`.

This project actually dogfoods itself. If you look in the `package.json`, you'll
find scripts with `node src {scriptName}`. This serves as an example of some of
the things you can do with `jl-toolbox`.

### Overriding Config

Unlike `react-scripts`, `jl-toolbox` allows you to specify your own
configuration for things and have that plug directly into the way things work
with `jl-toolbox`. There are various ways that it works, but basically if you
want to have your own config for something, just add the configuration and
`jl-toolbox` will use that instead of it's own internal config. In addition,
`jl-toolbox` exposes its configuration so you can use it and override only the
parts of the config you need to.

This can be a very helpful way to make editor integration work for tools like
ESLint which require project-based ESLint configuration to be present to work.

So, if we were to do this for ESLint, you could create an `.eslintrc` with the
contents of:

```
{"extends": "./node_modules/jl-toolbox/eslint.js"}
```

> Note: for now, you'll have to include an `.eslintignore` in your project until
> [this eslint issue is resolved](https://github.com/eslint/eslint/issues/9227).

Or, for `babel`, a `.babelrc` with:

```
{"presets": ["jl-toolbox/babel"]}
```

Or, for `jest`:

```javascript
const { jest: jestConfig } = require('jl-toolbox/config');
module.exports = Object.assign(jestConfig, {
  // your overrides here
});
```

> Note: `jl-toolbox` intentionally does not merge things for you when you start
> configuring things to make it less magical and more straightforward. Extending
> can take place on your terms. I think this is actually a great way to do this.

## Inspiration

This is a fork of [jl-toolbox](https://github.com/kentcdodds/jl-toolbox) from
@kentcdodds, who was inspired by `react-scripts`.

## Other Solutions

I'm not aware of any, if you are please [make a pull request][prs] and add it
here! Again, this is a very specific-to-me solution.

## Contributors

Thanks goes to these people ([emoji key][emojis]):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars.githubusercontent.com/u/1500684?v=3" width="100px;"/><br /><sub><b>Kent C. Dodds</b></sub>](https://kentcdodds.com)<br />[💻](https://github.com/kentcdodds/jl-toolbox/commits?author=kentcdodds "Code") [📖](https://github.com/kentcdodds/jl-toolbox/commits?author=kentcdodds "Documentation") [🚇](#infra-kentcdodds "Infrastructure (Hosting, Build-Tools, etc)") [⚠️](https://github.com/kentcdodds/jl-toolbox/commits?author=kentcdodds "Tests") | [<img src="https://avatars2.githubusercontent.com/u/22251956?v=4" width="100px;"/><br /><sub><b>Suhas Karanth</b></sub>](https://github.com/sudo-suhas)<br />[💻](https://github.com/kentcdodds/jl-toolbox/commits?author=sudo-suhas "Code") [🐛](https://github.com/kentcdodds/jl-toolbox/issues?q=author%3Asudo-suhas "Bug reports") [⚠️](https://github.com/kentcdodds/jl-toolbox/commits?author=sudo-suhas "Tests") | [<img src="https://avatars0.githubusercontent.com/u/1402095?v=4" width="100px;"/><br /><sub><b>Matt Parrish</b></sub>](https://github.com/pbomb)<br />[💻](https://github.com/kentcdodds/jl-toolbox/commits?author=pbomb "Code") [⚠️](https://github.com/kentcdodds/jl-toolbox/commits?author=pbomb "Tests") | [<img src="https://avatars2.githubusercontent.com/u/163561?v=4" width="100px;"/><br /><sub><b>Jason Lengstorf</b></sub>](https://code.lengstorf.com)<br />[💻](https://github.com/kentcdodds/jl-toolbox/commits?author=jlengstorf "Code") [📖](https://github.com/kentcdodds/jl-toolbox/commits?author=jlengstorf "Documentation") [🚇](#infra-jlengstorf "Infrastructure (Hosting, Build-Tools, etc)") |
| :---: | :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors][all-contributors] specification.
Contributions of any kind welcome!

## LICENSE

MIT

[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/travis/jlengstorf/jl-toolbox.svg?style=flat-square
[build]: https://travis-ci.org/jlengstorf/jl-toolbox
[coverage-badge]: https://img.shields.io/codecov/c/github/jlengstorf/jl-toolbox.svg?style=flat-square
[coverage]: https://codecov.io/github/jlengstorf/jl-toolbox
[version-badge]: https://img.shields.io/npm/v/jl-toolbox.svg?style=flat-square
[package]: https://www.npmjs.com/package/jl-toolbox
[downloads-badge]: https://img.shields.io/npm/dm/jl-toolbox.svg?style=flat-square
[npmcharts]: http://npmcharts.com/compare/jl-toolbox
[license-badge]: https://img.shields.io/npm/l/jl-toolbox.svg?style=flat-square
[license]: https://github.com/jlengstorf/jl-toolbox/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[donate-badge]: https://img.shields.io/badge/$-support-green.svg?style=flat-square
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/jlengstorf/jl-toolbox/blob/master/other/CODE_OF_CONDUCT.md
[github-watch-badge]: https://img.shields.io/github/watchers/jlengstorf/jl-toolbox.svg?style=social
[github-watch]: https://github.com/jlengstorf/jl-toolbox/watchers
[github-star-badge]: https://img.shields.io/github/stars/jlengstorf/jl-toolbox.svg?style=social
[github-star]: https://github.com/jlengstorf/jl-toolbox/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20jl-toolbox!%20https://github.com/jlengstorf/jl-toolbox%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/jlengstorf/jl-toolbox.svg?style=social
[emojis]: https://github.com/kentcdodds/all-contributors#emoji-key
[all-contributors]: https://github.com/kentcdodds/all-contributors
