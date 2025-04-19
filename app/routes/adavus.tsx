import Adavus from "components/Adavus";
import type { Route } from "./+types/adavus";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Adavus" }
  ];
}

export default function adavus() {
  return <Adavus />;
}
