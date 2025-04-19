import type { Route } from "./+types/about";
import About from "components/About";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About" }
  ];
}

export default function about() {
  return <About />;
}
