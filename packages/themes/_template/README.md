# WeldUI Theme: REPLACE_NAME

> A custom theme for [WeldUI](https://weldui.dev) design system.

## Installation

```bash
pnpm add @weldui/theme-REPLACE_NAME
```

## Usage

```html
<!-- Import after @weldui/core tokens -->
<link rel="stylesheet" href="node_modules/@weldui/core/dist/tokens/base.css" />
<link rel="stylesheet" href="node_modules/@weldui/core/dist/tokens/semantic.css" />
<link rel="stylesheet" href="node_modules/@weldui/theme-REPLACE_NAME/theme.css" />

<!-- Apply theme via data attribute -->
<body data-theme="REPLACE_NAME">
  <wu-button>Themed Button</wu-button>
</body>
```

## CSS Import

```css
@import '@weldui/core/tokens/base.css';
@import '@weldui/core/tokens/semantic.css';
@import '@weldui/theme-REPLACE_NAME/theme.css';
```

## Customisation

Override any token in your own CSS:

```css
[data-theme="REPLACE_NAME"] {
  --wu-color-primary: your-custom-color;
}
```

## License

Commercial — see [WeldUI licensing](https://weldui.dev/pricing).
