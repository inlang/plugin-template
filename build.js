/**
 * This is the build script for the project.
 *
 * It takes the source code and bundles it into a single file
 * that can be imported into an inlang project.
 */

import { build } from "esbuild";
import { NodeModulesPolyfillPlugin } from "@esbuild-plugins/node-modules-polyfill";

await build({
  entryPoints: ["src/index.ts"],
  outfile: "dist/index.js",
  bundle: true,
  // minification is disabled in dev mode for better debugging
  minify: process.env.DEV ? false : true,
  watch: process.env.DEV ? true : false,
  format: "esm",
  platform: "browser",
  target: "es2020",
  plugins: [
    // by default node polyfills are included
    // as a lot of npm packages that deal with files
    // use built-in node modules
    NodeModulesPolyfillPlugin(),
  ],
});

console.log("✅ build complete");
if (process.env.DEV) {
  console.log("👀 watching for changes...");
}
