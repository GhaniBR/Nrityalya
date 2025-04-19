import type { Route } from "./+types/basic";
import Basics from "components/Basics";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Basics" }
  ];
}

export default function basic() {
  return <Basics />;
}
