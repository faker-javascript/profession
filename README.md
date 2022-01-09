<h1 align="center">Profession</h1>
<p align="center">
Profession package provides functionality to generate a fake profession value.
</p>

<p align="center">
<a href="https://github.com/faker-javascript/profession/releases"><img alt="Version" src="https://img.shields.io/github/release/faker-javascript/profession.svg?label=version&color=green"></a> <img src="https://img.shields.io/npm/dt/@fakerjs/profession"> <a href="https://github.com/faker-javascript/profession"><img src="https://img.shields.io/badge/license-MIT-blue.svg?color=green" alt="License"></a> <img src="https://github.com/faker-javascript/profession/actions/workflows/tests.yml/badge.svg">

## Install

```
$ npm install --save @fakerjs/profession
```

## Usage

```js
import fakeProfession from '@fakerjs/profession';

fakeProfession();
//=> Software Engineer

fakeProfession({rank: true});
//=> Lead Software Engineer

fakeProfession({rank: true, locale: 'en_US'});
//=> Lead Software Engineer

// Allowed ranks: true, false
// Allowed locales: en_US
```

## Tests

Run tests

```
npm run test
```

## License
[The MIT License (MIT)](https://github.com/faker-javascript/profession/blob/master/LICENSE.txt)
Copyright (c) [Sergey Romanenko](https://github.com/Awilum)
