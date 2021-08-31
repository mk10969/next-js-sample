Wasm へのコンパイルのため、wasm-pack をインストールします

```
cargo install wasm-pack
```

https://rustwasm.github.io/docs/wasm-bindgen/reference/deployment.html
フラグ次第では、web, nodeJs, deno とかできるみたい。(deno あつい)

- build wasm-pack

```
wasm-pack build
```

→wasm32-unknown-unknown で build される。

- build wasm32-wasi

```
cargo build --target wasm32-wasi --release
```
