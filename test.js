const merge = require('lodash/merge');
const cssMatcher = require('jest-matcher-css');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const customPlugin = require('./index');

expect.extend({
  toMatchCss: cssMatcher,
});

function generatePluginCss(overrides) {
  const config = {
    theme: {
      // Default options for your plugin.
      capitalizeFirstLetter: {
        YOUR_PLUGIN_CUSTOM_OPTION: false,
      },
    },
    variants: {
      // Default variants for your plugin.
      capitalizeFirstLetter: [],
    },
    corePlugins: false,
    plugins: [customPlugin],
  };

  return postcss(tailwindcss(merge(config, overrides)))
    .process('@tailwind utilities', {
      from: undefined,
    })
    .then(({ css }) => css);
}

test('utility classes can be generated', () => {
  return generatePluginCss().then(css => {
    expect(css).toMatchCss(`    
    .capitalize-first:first-letter {
      text-transform: uppercase
    }

    .hover\\:capitalize-first:hover:first-letter {
      text-transform: uppercase
    }

    @media (min-width: 640px) {
      .sm\\:capitalize-first:first-letter {
        text-transform: uppercase
      }

      .sm\\:hover\\:capitalize-first:hover:first-letter {
        text-transform: uppercase
      }
    }

    @media (min-width: 768px) {
      .md\\:capitalize-first:first-letter {
        text-transform: uppercase
      }

      .md\\:hover\\:capitalize-first:hover:first-letter {
        text-transform: uppercase
      }
    }

    @media (min-width: 1024px) {
      .lg\\:capitalize-first:first-letter {
        text-transform: uppercase
      }

      .lg\\:hover\\:capitalize-first:hover:first-letter {
        text-transform: uppercase
      }
    }

    @media (min-width: 1280px) {
      .xl\\:capitalize-first:first-letter {
        text-transform: uppercase
      }

      .xl\\:hover\\:capitalize-first:hover:first-letter {
        text-transform: uppercase
      }
    }

    @media (min-width: 1536px) {
      .\\32xl\\:capitalize-first:first-letter {
        text-transform: uppercase
      }

      .\\32xl\\:hover\\:capitalize-first:hover:first-letter {
        text-transform: uppercase
      }
    }
    `);
  });
});
