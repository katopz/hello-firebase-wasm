import * as functions from "firebase-functions";
import * as greeter from "./wasm/greeter";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  const foo = "Hello from Firebase! and " + greeter.greet("WASM");
  response.send(foo);
});
