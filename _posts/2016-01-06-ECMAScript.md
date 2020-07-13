---
title: "ECMAScript"
categories:
  - SD
tags:
  - Web
  - Javascript
last_modified_at: 2016-01-06T12:00:00-01:00
---

**[ECMAScript](https://en.wikipedia.org/wiki/ECMAScript){:target="_blank"}** is a general-purpose programming language, standardized by [Ecma International](http://www.ecma-international.org/){:target="_blank"} according to the document [ECMA-262](https://www.ecma-international.org/publications/standards/Ecma-262.htm){:target="_blank"}. It was inspired by JavaScript and JScript and was created to help foster multiple independent implementations. ECMAScript is commonly used for client-side scripting on the World Wide Web, and it is increasingly being used for writing server applications and services using Node.js.

[ECMA-262.pdf](https://www.ecma-international.org/publications/standards/Ecma-262.htm){:target="_blank"}, [Github-ecma262](https://github.com/tc39/ecma262){:target="_blank"}, [Github-test262](https://github.com/tc39/test262){:target="_blank"}

- [2015](/assets/images/posts/2016-01-06-ECMAScript/ECMAScript2015-ECMA-262.pdf){:target="_blank"}, [Github](https://github.com/lukehoban/es6features#readme){:target="_blank"}
- [2016](/assets/images/posts/2016-01-06-ECMAScript/ECMAScript2016-ECMA-262.pdf){:target="_blank"}
- [2017](/assets/images/posts/2016-01-06-ECMAScript/ECMAScript2017-ECMA-262.pdf){:target="_blank"}
- [2018](/assets/images/posts/2016-01-06-ECMAScript/ECMAScript2018-ECMA-262.pdf){:target="_blank"}
- [2019](/assets/images/posts/2016-01-06-ECMAScript/ECMAScript2019-ECMA-262.pdf){:target="_blank"}
- [2020](/assets/images/posts/2016-01-06-ECMAScript/ECMAScript2020-ECMA-262.pdf){:target="_blank"}

ECMAScript version history

| Edition | Date published | Name | Changes from prior edition | Editor |
| ------- | -------------- | ---- | -------------------------- | ------ |
| 1   | June 1997 | | First edition | Guy L. Steele Jr. |
| 2   | June 1998 | | Editorial changes to keep the specification fully aligned with ISO/IEC 16262 international standard | Mike Cowlishaw |
| 3   | December 1999 | | Added regular expressions, better string handling, new control statements, try/catch exception handling, tighter definition of errors, formatting for numeric output and other enhancements | Mike Cowlishaw |
| 4   | Abandoned (last draft 30 June 2003) | | Fourth Edition was abandoned, due to political differences concerning language complexity. Many features proposed for the Fourth Edition have been completely dropped; some were incorporated into the sixth edition. |  |
| 5   | December 2009 | | Adds "strict mode," a subset intended to provide more thorough error checking and avoid error-prone constructs. Clarifies many ambiguities in the 3rd edition specification, and accommodates behaviour of real-world implementations that differed consistently from that specification. Adds some new features, such as getters and setters, library support for JSON, and more complete reflection on object properties. | Pratap Lakshman, Allen Wirfs-Brock |
| 5.1 | June 2011 | | This edition 5.1 of the ECMAScript standard is fully aligned with third edition of the international standard ISO/IEC 16262:2011. | Pratap Lakshman, Allen Wirfs-Brock |
| 6   | June 2015 | ECMAScript 2015 (ES2015) | See 6th Edition – ECMAScript 2015 | Allen Wirfs-Brock |
| 7   | June 2016 | ECMAScript 2016 (ES2016) | See 7th Edition – ECMAScript 2016 | Brian Terlson |
| 8   | June 2017 | ECMAScript 2017 (ES2017) | See 8th Edition – ECMAScript 2017 | Brian Terlson |
| 9   | June 2018 | ECMAScript 2018 (ES2018) | See 9th Edition – ECMAScript 2018 | Brian Terlson |
| 10  | June 2019 | ECMAScript 2019 (ES2019) | See 10th Edition – ECMAScript 2019 | Brian Terlson, Bradley Farias, Jordan Harband |
| 11  | June 2020 | ECMAScript 2020 (ES2020) | See 11th Edition – ECMAScript 2020 | Jordan Harband, Kevin Smith  |

## [List of ECMAScript engines](https://en.wikipedia.org/wiki/List_of_ECMAScript_engines)

These are new generation ECMAScript engines for web browsers, all implementing [just-in-time compilation (**JIT**)](https://en.wikipedia.org/wiki/Just-in-time_compilation){:target="_blank"} or variations of that idea. The performance benefits for just-in-time compilation make it much more suitable for web applications written in JavaScript. 

- Carakan: A JavaScript engine developed by Opera Software ASA, included in the 10.50 release of the Opera web browser, until switching to V8 with Opera 15 (released in 2013).
- Chakra (JScript9): A JScript engine used in Internet Explorer. It was first previewed at MIX 10 as part of the Internet Explorer 9 Platform Preview.
- Chakra: A JavaScript engine used in Microsoft Edge.
- SpiderMonkey: A JavaScript engine in Mozilla Gecko applications, including Firefox. The engine currently includes the IonMonkey compiler and OdinMonkey optimization module, has previously included the TraceMonkey compiler (first javascript JIT) and JägerMonkey.
- JavaScriptCore: A JavaScript interpreter and JIT originally derived from KJS. It is used in the WebKit project and applications such as Safari. Also known as Nitro, SquirrelFish and SquirrelFish Extreme.
- JScript .NET: A .NET Framework JScript engine used in ASP.NET based on Common Language Runtime and COM Interop. Unfortunately support was dropped with .NET Core and CoreCLR so its future looks questionable for ASP.NET Core.
- Tamarin: An ActionScript and ECMAScript engine used in Adobe Flash.
- **V8**: A JavaScript engine used in Google Chrome, Node.js, and V8.NET.
- Nashorn: A JavaScript engine used in Oracle Java Development Kit (JDK) since version 8.
- iv, ECMAScript Lexer / Parser / Interpreter / VM / method JIT written in C++
- CL-JavaScript: Can compile JavaScript to machine language on Common Lisp implementations that compile to machine language
- BESEN: A complete JIT-compiling implementation of ECMAScript Fifth Edition written in Object Pascal.

The following engines use runtime interpreters, which do not compile into native machine code and generally run more slowly:

- Continuum: A self-interpreter that supports older drafts of the ECMAScript 2015 specification. Uniquely, the engine is implemented in ECMAScript 3, which made it possible to run ES2015 in browsers as old as IE6.
- Futhark: The ECMAScript engine of the Opera web browser versions 9.50 to 10.10.
- InScript: An obsolete proprietary library used for iCab 2 and 3.
- JScript: The engine that is used in Internet Explorer for versions up to IE9, and one component of the Trident layout engine.
- KJS: The engine used in Konqueror, and one component of KHTML, a predecessor to JavaScriptCore.
- Linear B: The ECMAScript engine of the Opera web browser versions 7.0 to 9.50, exclusive.
- Narcissus: JavaScript implemented in JavaScript (a meta-circular evaluator), intended to run in another JavaScript engine, of theoretical and educational nature only.
- JS-Interpreter A lightweight JavaScript interpreter implemented in JavaScript with step-by-step execution.
- QtScript: Originally developed by Trolltech, now owned by The Qt Company. It provides QObject integration with JavaScriptCore.
- V4 (QJSEngine): Qt's newer ECMAScript engine, powering QML and QtQuick. ES6-compliant and under active development at The Qt Company.
- Rhino: One of several JavaScript engines from Mozilla, using the Java platform.
- YAJI: An ECMAScript engine based on the FESI implementation by Jean-Marc Lugrin in 1999, using the Java platform, currently being developed to support the latest standards (ECMAScript spec. 262, v5.1).
- Duktape: A small footprint, easily embeddable Ecmascript E5/E5.1 engine.
- The Kinoma Platform, an ECMAScript 6 runtime environment and framework. This is one of the first runtimes to correctly implement almost all of the ECMAScript 6 specification, currently unmaintained.
- Moddable successor of Kinoma Platform, currently active project and aims to support more recent versions of ECMAScript.
- Jsish: An ES5.1 subset interpreter with builtin SQLite, JSON, WebSocket, and ZVFS support.
- **Websocket.js**: An embeddable Javascript engine with HTTP/Websocket support.
- Espruino: A very small footprint interpreter specifically for microcontrollers. Can run in less than 8 kB of RAM by executing from source (rather than bytecode).
- MuJS: A lightweight ECMAScript interpreter library, designed for embedding in other software to extend them with scripting capabilities. Originally developed for MuPDF.
- mJS: Restricted JavaScript engine. Used for Internet of Things (IoT).
- Tiny-JS: A minimal JavaScript interpreter written in C++.
- JerryScript: A lightweight JavaScript engine by Samsung for microcontrollers with less than 64 KB RAM.
- Gjs Javascript Bindings for Gnome
- GNU Guile features an ECMAScript interpreter as of version 1.9
- njs: A lightweight JavaScript interpreter optimized for web server scripting and fastest VM context creation; used in nginx.
- QuickJS: A lightweight ECMAScript 6 interpreter by Fabrice Bellard and Charlie Gordon.
- engine262: A JavaScript engine written in JavaScript for development and exploration. It is primarily used to validate the ECMAScript specification.
- graaljs: An ECMAScript compliant JavaScript engine for GraalVM which supports language interoperability that can also execute Node.js applications.

