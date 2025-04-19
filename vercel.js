// vercel.js
import { createRequestHandler } from "@remix-run/vercel";
import { createReadableStreamFromReadable } from "@remix-run/node";

export default createRequestHandler({
  build: {
    serverBuildPath: "./build/server/index.js",
  },
  mode: process.env.NODE_ENV,
  getLoadContext(event) {
    // Add anything to the context that you want to be available in your loaders
    return {};
  },
  // This is needed for React Router v7 streaming support
  createReadableStreamFromReadable,
});
