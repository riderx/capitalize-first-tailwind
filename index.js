const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addUtilities }) {
  const utilities = {
    '.capitalize-first:first-letter': {
      textTransform: 'uppercase',
    },
  };
  addUtilities(utilities, ['responsive', 'hover']);
});
