# @codesect/stylelint-config

> Shared stylelint config for all CodeSect projects. This config is based on [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard).

## Install

```sh
npm install -D @codesect/stylelint-config
# Or with yarn:
yarn add @codesect/stylelint-config --dev
```

## Usage

You can reference/extend the config in your `.stylelintrc` [config object](https://stylelint.io/user-guide/configuration#extends). This will serve as a base for your config.

```JSON
{
  "extends": "@codesect/stylelint-config"
}
```

You can override the rules by adding a `"rules"` key to your config file. For example, if you want to allow ID selectors, you can set `selector-max-id` to `null` and to use tabs instead of spaces, you can set `indentation` to `tab`:

```JSON
{
  "extends": "@codesect/stylelint-config",
  "rules": {
    "indentation": "tab",
    "selector-max-id": null
  }
}
```

## Presets

In addition to the default preset, there is also an SCSS preset. This preset extends `@codesect/stylelint-config`.

### SCSS

```JSON
{
  "extends": "@codesect/stylelint-config/scss"
}
```

## License

[MIT](LICENSE) © Zsolt Meszaros
