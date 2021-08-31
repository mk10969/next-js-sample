// webAssembly file nameをhashにすると、buildこける。
module.exports = {
  webpack: (config, { isServer }) => {
    config.experiments = {
      asyncWebAssembly: true,
    };
    config.output.webassemblyModuleFilename =
      (isServer ? '../' : '') + 'static/wasm/webassembly.wasm';
    return config;
  },
};

// /**
//  * @type { import("next").NextConfig}
//  */
// const config = {
//   webpack: (config) => ({
//     ...config,
//     experiments: {
//       asyncWebAssembly: true,
//     },
//   }),
// };
// module.exports = config;
