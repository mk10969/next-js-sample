Wasm へのコンパイルのため、wasm-pack をインストールします

```
cargo install wasm-pack
```

https://rustwasm.github.io/docs/wasm-bindgen/reference/deployment.html
フラグ次第では、web, nodeJs, deno とかできるみたい。(deno あつい)

- build wasm-pack  
  (wasm-pack で build すると、package.json が生成される...内部では、wasm-bindgen-cli を呼んでいるみたい)

```
wasm-pack build
```

→wasm32-unknown-unknown で build される。
