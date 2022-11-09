# Generating Forms and Types from Schemas

**Demo Project for Async's [International Show 'n' Tell 2022](https://asyncjs.com/international-show-n-tell-2022/)**

- Name: Jake 'Sid' Smith
- Website: https://jakesidsmith.com/
- Twitter: [@jakesidsmith](https://twitter.com/jakesidsmith)
- GitHub: https://github.com/jakesidsmith/

This demo is available at: http://github.com/jakesidsmith/show-n-tell-2022

## Intro

This talk covers using schemas to generate forms (with React) and the corresponding TypeScript interfaces. Using schemas you can easily make updates to your apps, keep your forms consistent, keep your TypeScript server in sync with your forms, and allow your users (or clients) to build their own forms.

BUT, that's not all you can use schemas and this kind of type inference for, for example [tsurl](https://github.com/jakesidsmith/tsurl) uses schemas and type inference to handle constructing and deconstructing URLs in a type-safe way.

I'm currently writing a blog post on this kinda schema stuff, so I'll add a link to that at a later date.

## Building and running the project

Make sure you're using at least node 16, or if you have NVM just run:

```shell
nvm use
```

You'll probably also want at least NPM 8 which you can install with:

```shell
npm i npm@8 -g
```

Install dependencies with:

```shell
npm ci
```

Run the dev server:

```shell
npm start
```

Run tests:

```shell
npm test
```

Format all the codes:

```shell
npm run format
```
