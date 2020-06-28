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

## Typescript.js and React.js

[example](https://www.staging-typescript.org/docs/handbook/react.html)

```bash
node -v

ls /usr/local/lib/node_modules/

sudo npm install -g create-react-app

create-react-app react-with-ts --template=typescript
```

Project layout

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
