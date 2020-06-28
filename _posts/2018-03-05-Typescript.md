---
title: "Typescript.js"
categories:
  - SD
tags:
  - Web
  - Javascript
last_modified_at: 2018-03-05T12:00:00-01:00
---

**[Typescript.js](https://www.typescriptlang.org/)** is a super-set of JavaScript, it doesn't have a default template - there would be too many. Instead, other projects have their own TypeScript bootstrap templates with their own context. These projects provide templates which include TypeScript support.

[handbook.pdf](/assets/images/posts/2018-03-05-Typescript/typescript-handbook-beta.pdf)

## Basic

**object** is a type that represents the non-primitive type, i.e. anything that is not `number`, `string`, `boolean`, `symbol`, `null`, or `undefined`.

### [Types](https://www.typescriptlang.org/docs/handbook/basic-types.html)

### [Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)

### [Functions](https://www.typescriptlang.org/docs/handbook/functions.html)

### [Literal Types](https://www.typescriptlang.org/docs/handbook/literal-types.html)

### [Unions and Intersection Types](https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html)

### [Classes](https://www.typescriptlang.org/docs/handbook/classes.html)

### [Enums](https://www.typescriptlang.org/docs/handbook/enums.html)

### [Generics](https://www.typescriptlang.org/docs/handbook/generics.html)

## Handbook

### [React.js](https://www.staging-typescript.org/docs/handbook/react.html)

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
