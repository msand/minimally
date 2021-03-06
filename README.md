<p align="center">
  <a href="https://www.npmjs.org/package/minimally"><img src="https://img.shields.io/npm/v/minimally.svg?style=flat" alt="npm"></a> <a href="https://travis-ci.org/msand/minimally"><img src="https://travis-ci.org/msand/minimally.svg?branch=master" alt="travis"></a> <a href="https://david-dm.org/msand/minimally"><img src="https://david-dm.org/msand/minimally/status.svg" alt="dependencies Status"></a> <a href="https://unpkg.com/minimally/dist/minimally.umd.js"><img src="http://img.badgesize.io/https://unpkg.com/minimally/dist/minimally.umd.js?compression=gzip" alt="gzip size"></a> <a href="https://packagephobia.now.sh/result?p=minimally"><img src="https://packagephobia.now.sh/badge?p=minimally" alt="install size"></a>

</p>

# minimally

Minimal key-value store and event subscription

Inspired by <https://github.com/developit/mitt/>

-   **Microscopic:** weighs about 200 bytes gzipped
-   **Functional:** methods don't rely on `this`
-   **Great Name:** somehow [minimally](https://npm.im/minimally) wasn't taken

minimally was made for the browser, but works in any JavaScript runtime. It has no dependencies and supports IE9+.

## Table of Contents

-   [Install](#install)
-   [Usage](#usage)
-   [Examples & Demos](#examples--demos)
-   [API](#api)
-   [Contribute](#contribute)
-   [License](#license)

## Install

This project uses [node](http://nodejs.org) and [npm](https://npmjs.com). Go check them out if you don't have them locally installed.

```sh
$ npm install --save minimally
```

Then with a module bundler like [rollup](http://rollupjs.org/) or [webpack](https://webpack.js.org/), use as you would anything else:

```javascript
// using ES6 modules
import minimally from 'minimally'

// using CommonJS modules
var minimally = require('minimally')
```

The [UMD](https://github.com/umdjs/umd) build is also available on [unpkg](https://unpkg.com):

```html
<script src="https://unpkg.com/minimally/dist/minimally.umd.js"></script>
```

You can find the library on `window.minimally`.

## Usage

```js
import minimally from 'minimally'

const model = minimally()

// listen to an event
model.on('foo', e => console.log('foo', e) )

// Set value for key and dispatch event to subscribers
const val = { a: 'b' }
model.set('foo', val)

// Get value for key
m.get(key) === val

// working with handler references:
function onFoo() {}
model.on('foo', onFoo)   // listen
model.off('foo', onFoo)  // unlisten
```

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [minimally](#minimally)
-   [get](#get)
    -   [Parameters](#parameters)
-   [on](#on)
    -   [Parameters](#parameters-1)
-   [off](#off)
    -   [Parameters](#parameters-2)
-   [set](#set)
    -   [Parameters](#parameters-3)

### minimally

minimally: Minimal key-value store and event subscription.

Returns **[minimally](#minimally)** 

### get

Get current value for key

#### Parameters

-   `key` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number))** Key for which to lookup value

Returns **any** 

### on

Subscribe to events for key with event handler

#### Parameters

-   `key` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number))** Type of event to listen for
-   `fn` **[Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** Function to call in response to given event

Returns **void** 

### off

Release subscription for key and event handler

#### Parameters

-   `key` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number))** Type of event to unregister `fn` from
-   `fn` **[Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** Handler function to remove

Returns **void** 

### set

Set value for key and dispatch event to subscribers

#### Parameters

-   `key` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number))** The event type to invoke
-   `val` **any?** Any value (object is recommended and powerful), passed to each handler

Returns **void** 

## Contribute

First off, thanks for taking the time to contribute!
Now, take a moment to be sure your contributions make sense to everyone else.

Development Start:

This project is typed with Flow Type annotations. To ensure you have the proper typings for this project run

`flow-typed install`

### Reporting Issues

Found a problem? Want a new feature? First of all see if your issue or idea has [already been reported](../../issues).
If don't, just open a [new clear and descriptive issue](../../issues/new).

### Submitting pull requests

Pull requests are the greatest contributions, so be sure they are focused in scope, and do avoid unrelated commits.

-   Fork it!
-   Clone your fork: `git clone https://github.com/<your-username>/minimally`
-   Navigate to the newly cloned directory: `cd minimally`
-   Create a new branch for the new feature: `git checkout -b my-new-feature`
-   Install the tools necessary for development: `npm install`
-   Make your changes.
-   Commit your changes: `git commit -am 'Add some feature'`
-   Push to the branch: `git push origin my-new-feature`
-   Submit a pull request with full remarks documenting your changes.

## License

[MIT License](https://opensource.org/licenses/MIT) © [Mikael Sand](https://github.com/msand/)
