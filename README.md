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

## Usage

```html
<p class="capitalize-first">the first letter will always be uppercased!</p>
<p class="md:capitalize-first">
  the first letter will be uppercased on <code>md</code> screens and up.
</p>
<p class="hover:capitalize-first">
  the first letter will be uppercased on hover.
</p>
```

## License

Capitalize first letter is licensed under the MIT License.

## Credits

Created with [create-tailwind-plugin](https://github.com/Landish/create-tailwind-plugin).
