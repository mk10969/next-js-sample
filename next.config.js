// webAssembly file nameをhashにすると、buildこける。
module.exports = {
  disDir: '.next',
  webpack: (config, { isServer }) => {
    config.experiments = {
      asyncWebAssembly: true,
    };
    // hash 使えない。。。(´･ω･`)
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
