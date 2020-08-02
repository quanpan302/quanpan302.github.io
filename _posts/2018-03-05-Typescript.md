---
title: "Typescript.js"
categories:
  - SD
tags:
  - Web
  - Javascript
last_modified_at: 2018-03-05T12:00:00-01:00
---

**[Typescript.js](https://www.typescriptlang.org/){:target="_blank"}** is a super-set of JavaScript, it doesn't have a default template - there would be too many. Instead, other projects have their own TypeScript bootstrap templates with their own context. These projects provide templates which include TypeScript support.

TOC

- [Basic](#basic)
  - [Types{:target="_blank"}](#typestarget_blank)
  - [Interfaces{:target="_blank"}](#interfacestarget_blank)
  - [Functions{:target="_blank"}](#functionstarget_blank)
  - [Literal Types{:target="_blank"}](#literal-typestarget_blank)
  - [Unions and Intersection Types{:target="_blank"}](#unions-and-intersection-typestarget_blank)
  - [Classes{:target="_blank"}](#classestarget_blank)
  - [Enums{:target="_blank"}](#enumstarget_blank)
  - [Generics{:target="_blank"}](#genericstarget_blank)
- [Identifiers](#identifiers)
- [Keywords](#keywords)
- [Handbook](#handbook)
  - [React.js{:target="_blank"}](#reactjstarget_blank)
- [Resources](#resources)


[handbook.pdf](/assets/images/posts/2018-03-05-Typescript/typescript-handbook-beta.pdf){:target="_blank"}


## Basic

**object** is a type that represents the non-primitive type, i.e. anything that is not `number`, `string`, `boolean`, `symbol`, `null`, or `undefined`.

### [Types](https://www.staging-typescript.org/docs/handbook/basic-types.html){:target="_blank"}

```javascript
// Boolean
let isDone: boolean = false;

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;

// String
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}. I'll be ${age + 1} years old next month.`;

// Array
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];

// Tuple
let x: [string, number];  // Declare a tuple type
// Initialize it
x = ["hello", 10];  // OK

// Enum
enum Color {
  Red = 1,
  Green,
  Blue,
}
let colorName: string = Color[2];
console.log(colorName);  // Displays 'Green'

// Unknown
let notSure: unknown = 4;

// Any
declare function getValue(key: string): any;
// OK, return value of 'getValue' is not checked
const str: string = getValue("myString");

// Void
function warnUser(): void {
  console.log("This is my warning message");
}

// Null and Undefined
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
```

### [Interfaces](https://www.staging-typescript.org/docs/handbook/interfaces.html){:target="_blank"}

```javascript
const user = {
  name: "Hayes",
  id: 0,
};
```

```javascript
const user: User = {
  name: "Hayes",
  id: 0,
};
```

```javascript
interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("Murphy", 1);
```

### [Functions](https://www.staging-typescript.org/docs/handbook/functions.html){:target="_blank"}

```javascript
// Typing the function
function add(x: number, y: number): number {
  return x + y;
}
let myAdd = function(x: number, y: number): number {
  return x + y;
};

// Writing the function type
let myAdd: (x: number, y: number) => number = function(
  x: number,
  y: number
): number {
  return x + y;
};
```

### [Literal Types](https://www.staging-typescript.org/docs/handbook/literal-types.html){:target="_blank"}

```javascript
// String Literal Types
type Easing = "ease-in" | "ease-out" | "ease-in-out";
class UIElement {
  animate(dx: number, dy: number, easing: Easing) {
    if (easing === "ease-in") {
      // ...
    } else if (easing === "ease-out") {
    } else if (easing === "ease-in-out") {
    } else {
      // It's possible that someone could reach this
      // by ignoring your types though.
    }
  }
}
let button = new UIElement();
button.animate(0, 0, "ease-in");

// Numeric Literal Types
function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
  return (Math.floor(Math.random() * 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6;
}
const result = rollDice();
```

### [Unions and Intersection Types](https://www.staging-typescript.org/docs/handbook/unions-and-intersections.html){:target="_blank"}

```javascript
function padLeft(value: string, padding: string | number) {
  // ...
}
```

### [Classes](https://www.staging-typescript.org/docs/handbook/classes.html){:target="_blank"}

```javascript
class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);
```

### [Enums](https://www.staging-typescript.org/docs/handbook/enums.html){:target="_blank"}

```javascript
enum Response {
  No = 0,
  Yes = 1
}

function respond(recipient: string, message: Response): void {
  // ...
}

respond("Princess Caroline", Response.Yes);
```

### [Generics](https://www.staging-typescript.org/docs/handbook/generics.html){:target="_blank"}

```javascript
// Generic Types
function identity<T>(arg: T): T {
  return arg;
}
let output = identity<string>("myString"); // type of output will be 'string'
let output = identity("myString"); // type of output will be 'string'

// Generic Classes
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) {
  return x + y;
};
```


## Identifiers

Valid

- empName
- emp_name
- _empName
- result1
- $result

## Keywords

| keywords  | keywords   | keywords    |
| --------- | ---------- | ----------- |
| **Reserved words**                   |
| break     | case       | catch       |
| class     | const      | continue    |
| debugger  | default    | delete      |
| do        | else       | enum        |
| export    | extends    | false       |
| finally   | for        | function    |
| If        | import     | in          |
| istanceOf | new        | null        |
| return    | super      | switch      |
| this      | throw      | true        |
| try       | typeOf     | var         |
| void      | while      | with        |
| **Strict Mode Reserved Words**       |
| as        | implements | interface   |
| let       | package    | private     |
| protected | public     | static      |
| yield     |            |             |
| ** Contextual keywords**             |
| any       | boolean    | constructor |
| declare   | get        | module      |
| require   | number     | set         |
| string    | symbol     | type        |
| from      | of         |             |


## Handbook

### [React.js](https://www.staging-typescript.org/docs/handbook/react.html){:target="_blank"}

Install create-react-app

```bash
node -v

ls /usr/local/lib/node_modules/

sudo npm install -g create-react-app
```

Create our new project, Project layout:

```bash
create-react-app react-with-ts --template=typescript
```

```
react-with-ts/
  ├─ .gitignore
  ├─ node_modules/
  ├─ public/
  ├─ src/
  │  └─ ...
  ├─ package.json
  ├─ tsconfig.json
  
  └─ tslint.json
```


## Resources

{% include embed.html id="ahCwqrYpIuM" %}
