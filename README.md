# nkd-factory

📦 JavaScript bundler/linter

---

### Usage

```bash
yarn add nkd-factory --dev
```

**package.json**
```json
"scripts": {
  "build": "nkd build",
  "lint": "nkd lint --ext .ts,.kdu src"
}
```

```bash
yarn build
```

---

### Config

Create `nkd.config.js` in project root. More detail is [here](https://github.com/khanhduy1407/nkd-factory/blob/master/lib/default.js).

`nkd.config.js` type: `NkdConfigObject | NkdConfigObject[] | (defaultRollupConfig) => RollupConfog`.

**config object**
```ts
// nkd.config.js
module.exports = {

  // entry file, default: 'src/index.js'
  entry?: string

  // lib name, default: auto get by package.json.name, like: 'KduAwesomeSwiper'
  name?: string

  // out file name, default: auto get by package.json.name, like: 'kdu-awesome-swiper'
  fileName?: string

  // output dir, default: 'dist'
  outDir?: string

  // output bundle types, default: ['umd', 'esm', 'cjs']
  targets?: string[]

  // exports moudle type, default: 'auto'
  exports?: string

  // @rollup/plugin-replace config, default { PACKAGE_VERSION, 'process.env.NODE_ENV' }
  replace?: object

  // parser type, default: 'buble', options: 'buble' | 'babel'
  parser?: string
  // parser plugin options, default rollup-plugin-buble options
  parserOptions?: object // {}

  // todo file formats, default: ['.mjs', '.js', '.jsx', '.json', '.ts']
  resolve?: string[]

  // enable kdu plugin, default: auto get by package.json.<xxx>dependencies
  kdu?: false | { /* rollup-plugin-kdu config */ }

  // enable eslint plugin (before build), default: false
  eslint?: false | { /* rollup-plugin-eslint config */ }

  // enable typescript plugin (before build), default: auto get by package.json.dependencies
  typescript?: false | { /* rollup-plugin-typescript2 config */ }

  // compression
  minimize?: boolean // true

  // file header
  banner?: string // default: https://github.com/khanhduy1407/nkd-factory/blob/master/lib/default.js#L18

  // Refer to https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
  // list external dependencies, exactly the way it is written in the import statement.
  external?: string[]

  // Refer to https://rollupjs.org/guide/en#output-globals for details
  // Provide global variable names to replace your external imports
  globals?: {
    [key: string]: string
  }
}
```

**config function**
```ts
// nkd.config.js
module.exports = (defaultRollupConfig): RollupConfog => {
  // overwrite the default Rollup confog
  // ...
  return RollupConfig
}
```

---

### Preset (about nkd provide preset configs)

**[tsconfig.json - extends](https://www.typescriptlang.org/tsconfig#extends)**

```js
{
  "extends": "./node_modules/nkd-factory/preset/tsconfig/kdu",
  // your options like:
  "compilerOptions": {
    "declaration": true,
    "declarationDir": "types",
    "baseUrl": ".",
    // ...
  },
  "exclude": [
    "node_modules",
    "dist",
    // ...
  ]
}
```

**[.eslintrc.js  extends](https://eslint.org/docs/user-guide/configuring#extending-configuration-files)**

```js
module.exports = {
  extends: './node_modules/nkd-factory/preset/eslintrc/kdu.typescript',
  rules: {
    // rules...
  }
}
```
