Wasm へのコンパイルのため、wasm-pack をインストールします

```
cargo install wasm-pack
```

https://rustwasm.github.io/docs/wasm-bindgen/reference/deployment.html
フラグ次第では、web, nodeJs, deno とかできるみたい。(deno あつい)

- build wasm-pack  
(wasm-pack でbuildすると、package.jsonが生成される...内部では、wasm-bindgen-cliを呼んでいるみたい)
```
wasm-pack build
```

→wasm32-unknown-unknown で build される。
