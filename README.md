# hello-firebase-wasm

POC WASM on Firebase Cloud Function

```shell
# Setup
cargo install cargo-watch
cargo install -f wasm-bindgen-cli

# To watch and build WASM from Rust
cargo watch -- . ./dev.sh

# To run WASM with Firebase
cd functions
npm run dev
```
