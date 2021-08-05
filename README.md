# Tailwind Capitalize first letter

> tailwind utility to capitalize only first letter of string

Install the plugin from npm:

```
$ npm install tailwind-capitalize-first-letter
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  // ...
  plugins: [
    // ...
    require('tailwind-capitalize-first-letter'),
    // ...
  ],
};
```

This plugin will generate following CSS:

```css
/* ... */
.capitalize-first:first-letter {
  texttransform: uppercase;
}
/* ... */
```

## License

Capitalize first letter is licensed under the MIT License.

## Credits

Created with [create-tailwind-plugin](https://github.com/Landish/create-tailwind-plugin).
