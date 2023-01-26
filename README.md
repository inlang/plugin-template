# inlang plugin-template

> **Note**  
> 
> **Change the following things if you use this template:**
> 1. Name your repository "inlang-plugin-{name}".
> 2. Change the introduction paragraph to describe your plugin.
> 3. Create a release on GitHub so users can import a specific version of your plugin.
> 4. Update the Usage section.
> 5. Open a PR to https://github.com/inlang/awesome-inlang

This is a template for creating a new plugin for [inlang](https://inlang.com).

Plugins allow the customization of inlang's behavior by, for example, defining how resources should be parsed and serialized. Read more about using plugins on the [documentation site](https://inlang.com/documentation/plugins). This template has been set up to provide out of the box:

- [x] TypeScript
- [x] Testing (the example)
- [x] Bundling

## Usage

Plugins can be imported directly from GitHub releases via jsDelivr. 

```js
// filename: inlang.config.js

export async function defineConfig(env){
  const plugin = await env.$import(
    "https://cdn.jsdelivr.net/gh/{username}/{repository-name}@{version}/dist/index.js"
  ) 
}
```

The [dist](./dist/) directory is used to distribute the plugin directly via CDN like [jsDelivr](https://www.jsdelivr.com/). Using a CDN works because the inlang config uses dynamic imports to import plugins. Read the [jsDelivr documentation](https://www.jsdelivr.com/?docs=gh) on importing from GitHub.

For additional usage information, take a look at [example](./example/).

## Developing

Run the following commands in your terminal (node and npm must be installed):

1. `npm install`
2. `npm run dev`

`npm run dev` will start the development environment which automatically compiles the [src/index.ts](./src/index.ts) files to JavaScript ([dist/index.js](dist/index.js)), runs tests defined in `*.test.ts` files and watches changes.

## Publishing

1. Run `npm run build` to generate a build.
2. Commit the new build. 
3. Create a new release on GitHub that uses [Semantic Versioning (SemVer)](https://semver.org/). Take a look at [inlang-plugin-json](https://github.com/samuelstroschein/inlang-plugin-json/releases) for example releases.

![](https://camo.githubusercontent.com/dcc07ce55f0484b41bb7ca0b55bd43475e866521d47f7ce1bf997715416de2e9/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3930323533313033353830363433333238302f313036363736373833363039393338333332362f436c65616e53686f745f323032332d30312d32325f61745f31322e31342e303932782e706e67)
