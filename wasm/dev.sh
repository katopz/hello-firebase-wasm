cargo build --target wasm32-unknown-unknown --release
wasm-bindgen target/wasm32-unknown-unknown/release/greeter.wasm --out-dir ../functions/src/wasm --nodejs
rsync -r ../functions/src/wasm ../functions/lib