# Colour Logger

Definitely recommend using this in a browser environment, don't know what will happen in a Node environment.

A very basic package to `console.log` things in colourful ways. Colours are based on the default [tailwind colours](https://tailwindcss.com/docs/customizing-colors#default-color-palette).

_Sorry the package is scoped to a person and not a grouping of packages like babel. This is just for my own fun and experimenting._

```js
import log from "@adrocodes/log"

log("some message", "red", { ...anyOtherData, it_is: "optional" })
```

You can implement this if your own project without this package.

```js
console.log("%c <your message>", "<css - eg> color: red", {
	optional: "extras",
})
```

## What to contribute?

Here are some details about how the package was created.

- 📦 [Parcel](https://parceljs.org/)
- 📝 [Jest](https://jestjs.io/)
- 💻 [TypeScript](https://www.typescriptlang.org/)
- 💅 [Prettier](https://prettier.io/)

### Commands

1. `start` - start the development process
2. `build` - build for production
3. `test` - run the tests once
4. `test:watch` - run the tests in watch mode

### Description

A very basic (by design) setup for creating npm packages. Edit the `index.ts` file with your functionality, write some tests if you want, `build` and ship it. Bundles using Parcel, meaning you can extend it if you need to or just leave it as is.

---

Made by [adro.codes](https://github.com/HurricaneInteractive) with ❤️
