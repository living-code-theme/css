<!-- living-code-readme:1 -->
# 🎨 Living Code for CSS variables

**Calm slate. Living color.** Living Code for CSS variables. Repository-owned theme files, installation instructions and four color flavors.

[Installation](#installation) · [Flavors](#flavors) · [Configuration](#configuration) · [All ports](https://github.com/living-code-theme)

## Installation

```sh
pnpm add @living-code/css
```

Import the stylesheet in your app:

```css
@import "@living-code/css/living-code.css";
```

Or load it directly in HTML:

```html
<link rel="stylesheet" href="living-code.css" />
<html data-theme="living-code-night">
```

Use palette names (`var(--lc-teal)`) or semantic roles (`var(--lc-keyword)`, `var(--lc-bg)`, `var(--lc-border-active)`).

## Flavors

Expand a flavor for its activation instructions.

<details data-lc-flavor="night">
<summary><strong>Night</strong> · Dark · full palette</summary>

```html
<html data-theme="living-code-night">
```

</details>

<details data-lc-flavor="frost">
<summary><strong>Frost</strong> · Dark · softer chroma</summary>

```html
<html data-theme="living-code-frost">
```

</details>

<details data-lc-flavor="paper">
<summary><strong>Paper</strong> · Light · near-white slate</summary>

```html
<html data-theme="living-code-paper">
```

</details>

<details data-lc-flavor="signal">
<summary><strong>Signal</strong> · Dark · teal accent</summary>

```html
<html data-theme="living-code-signal">
```

</details>

## Configuration

See [CSS variables's documentation](https://developer.mozilla.org/docs/Web/CSS/color_value/oklch) for application settings and reload behavior. The activation instructions above identify each supported flavor; keep your other application configuration.

## Compatibility

Preserves the npm package name `@living-code/css` and its existing import paths. Package publication and registry credentials are separate from creating this repository.

## Contributing

Found a problem? [Open an issue](https://github.com/living-code-theme/css/issues/new/choose) with the app version, the flavor and a screenshot. Want Living Code somewhere else? [Request a port](https://github.com/living-code-theme/core/issues/new?template=port-request.yml).

Pull requests are welcome. Keep this README, `port.json` and `images/` in sync, and use real screenshots of the app, never mockups.

🦎 **One chameleon, many habitats.** Part of [Living Code](https://github.com/living-code-theme).

## License

[MIT](LICENSE) © Elliot Luque
