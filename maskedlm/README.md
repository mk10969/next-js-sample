
Wasmへのコンパイルのため、wasm-packをインストールします
```
cargo install wasm-pack
```

https://rustwasm.github.io/docs/wasm-bindgen/reference/deployment.html
フラグ次第では、web, nodeJs, denoとかできるみたい。(denoあつい)



 - build wasm-pack
```
wasm-pack build 
```
→wasm32-unknown-unknownでbuildされる。


 - build wasm32-wasi
```
cargo build --target wasm32-wasi --release
```

