---
title: "Webpack.js"
categories:
  - SD
tags:
  - Web
  - Javascript
last_modified_at: 2016-01-05T12:00:00-01:00
---

**[Webpack.js](https://webpack.js.org/){:target="_blank"}** is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.

## Core Concepts

### [Entry](https://webpack.js.org/concepts/entry-points/){:target="_blank"}

### [Output](https://webpack.js.org/concepts/output/){:target="_blank"}

### [Loaders](https://webpack.js.org/concepts/loaders/){:target="_blank"}

### [Plugins](https://webpack.js.org/concepts/plugins/){:target="_blank"}

### [Mode](https://webpack.js.org/concepts/#mode){:target="_blank"}

### [Browser Compatibility](https://webpack.js.org/concepts/#browser-compatibility){:target="_blank"}

### Environment, webpack runs on Node.js version 8.x and higher.

## [Modules](https://webpack.js.org/concepts/modules/){:target="_blank"}

## [Manifest](https://webpack.js.org/concepts/manifest/){:target="_blank"}

In a typical application or site built with webpack, there are three main types of code:

- The source code you, and maybe your team, have written.
- Any third-party library or "vendor" code your source is dependent on.
- A webpack runtime and manifest that conducts the interaction of all modules.

**Runtime**, along with the manifest data, is basically all the code webpack needs to connect your modularized application while it's running in the browser. It contains the loading and resolving logic needed to connect your modules as they interact. This includes connecting modules that have already been loaded into the browser as well as logic to lazy-load the ones that haven't.

**Manifest**, As the compiler enters, resolves, and maps out your application, it keeps detailed notes on all your modules. This collection of data is called the "Manifest," and it's what the runtime will use to resolve and load modules once they've been bundled and shipped to the browser. No matter which module syntax you have chosen, those `import` or `require` statements have now become `__webpack_require__` methods that point to module identifiers. Using the data in the manifest, the runtime will be able to find out where to retrieve the modules behind the identifiers.
