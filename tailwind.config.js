/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors')

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['Lato', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
            cursive: ['Niconne', 'cursive']
        },
        extend: {
            spacing: {
                128: '32rem',
                144: '36rem'
            },
            borderRadius: {
                '4xl': '2rem'
            },
            colors: {
                'red-brand': '#d34c4c'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}
