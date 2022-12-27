import type { Config } from "https://cdn.jsdelivr.net/gh/inlang/inlang/source-code/core/src/config/schema.ts";

/**
 * The plugin configuration.
 */
type PluginConfig = {
  /**
   * Defines the path pattern for the resources.
   *
   * Must include the `{language}` placeholder.
   *
   * @example
   *  "./resources/{language}.json"
   */
  pathPattern: string;
};

// export const readResources: Config["readResources"] = async (args) => {
//   return await Promise.all(
//     args.config.languages.map((language) => {
//       const path = args.pluginConfig.pathPattern.replace(
//         "{language}",
//         language
//       );
//     })
//   );
// };

// export async function readResources(
//   args: Parameters<Config["readResources"]>[0] & { pluginConfig: PluginConfig }
// ): ReturnType<Config["readResources"]> {
//   return await Promise.all(
//     args.config.languages.map(async (language) => {
//       const path = args.pluginConfig.pathPattern.replace(
//         "{language}",
//         language
//       );
//       const json = JSON.parse(await args.$fs.readFile(path, "utf-8"));
//       return [];
//     })
//   );
// }
// // export const readResources = async ({ $import, config, pluginConfig }) => {
// //   return await Promise.all(
// //     config.languages.map(async (/** @type {string} */ id) => {
// //       const path = pluginConfig.pathPattern.replace("{language}", id);
// //       const module = await $import(path);
// //       return resourceFrom(module.default, id);
// //     })
// //   );
// // };
