import postcssRows from './scripts/postcss/rows.mjs';

const plugins = [
    postcssRows({
      units: [
        {
          functionName: '--unit',
          function: `calc(var(--column-gap-size) * $1)`
        },
        // {
        //   functionName: "--getAlphaRgb",
        //   function: "rgb(from $1 r g b / $2)"
        // },
        // {
        //   functionName: "--getAlphaOklab",
        //   function: "oklab(from $1 l a b / $2)"
        // }
      ]
    })
];

export default {
  plugins,
};