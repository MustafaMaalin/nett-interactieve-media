const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: {
        content: [
            "./resources/**/*.antlers.html",
            "./resources/**/*.blade.php",
            "./content/**/*.md"
        ]
    },
    important: true,
    theme: {
        extend: {
          fontFamily:{
            sans: ['din-2014', ...defaultTheme.fontFamily.sans],
          },
          colors: {
            "nettt-pink" :"#E70082",

          },
        
        },
    },
    variants: {},
    plugins: []
};
