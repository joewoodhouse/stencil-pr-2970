import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import { sass } from '@stencil/sass';

import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import cssnano from "cssnano";
import purgecss from "@fullhuman/postcss-purgecss";

const purge = purgecss({
  content: [
    "./src/**/*.tsx",
    "./src/index.html",
    "./src/**/*.scss"
  ],
  safelist: [':host'],
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

// https://stenciljs.com/docs/config

export const config: Config = {
  globalScript: 'src/global/app.ts',
  globalStyle: 'src/global/app.scss',
  taskQueue: 'async',
  outputTargets: [{
    type: 'www',
    serviceWorker: {
      swSrc: 'src/sw.js'
    }
  }],
  plugins: [
    sass(),
    postcss({
      plugins: [
        tailwind(),
        autoprefixer(),
        ...(!process.argv.includes("--dev")
          ? [purge, cssnano()]
          : [])
      ]
    }),
  ]
};
