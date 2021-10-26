# Guild Wars 2 Bingo
Simple game of bingo for your Guild Wars 2 Fractal runs.

Visit [zerthox.github.io/gw2-bingo/](https://zerthox.github.io/gw2-bingo/) to play.

## Adding new bingo fields
Bingo fields are defined in [data/fields.json](./src/data/fields.json).  
When creating a [Pull Request](../../pulls), make sure to add the new fields **at the end** of the file.  
You can also create an [Issue](../../issues), if you do not want to deal with editing JSON.

## Build setup
The project makes use of [Gatsby](https://www.gatsbyjs.com/) as the main frontend framework.
The UI is written in [TypeScript](https://www.typescriptlang.org/) using [React](https://reactjs.org/).
Styling is done with [Sass](https://sass-lang.com/).

All of these are included as [npm](https://www.npmjs.com/) dependencies. You are only required to have [Node.js](https://nodejs.org/) installed.

```sh
# install dependencies
npm install

# run gatsby dev server
npm run dev

# build site for production
npm run build
```
