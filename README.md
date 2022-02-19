# hello-firebase-wasm

POC WASM on Firebase Cloud Function

```shell
# To build WASM from Rust
cargo install -f wasm-bindgen-cli
cargo build --target wasm32-unknown-unknown --release && wasm-bindgen target/wasm32-unknown-unknown/release/greeter.wasm --out-dir ../functions//src/wasm --nodejs

# To run WASM with Firebase
cd functions
npm run dev
```
