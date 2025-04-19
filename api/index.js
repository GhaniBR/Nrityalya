import { createRequestHandler } from "@react-router/node";
import * as serverBuild from "../build/server/index.js";

export default function handler(req, res) {
  // This adapter converts Vercel's req/res to what React Router expects
  return createRequestHandler({
    build: serverBuild,
    mode: process.env.NODE_ENV,
  })(req, res);
}
