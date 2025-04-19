import type { Route } from "./+types/mudras_bhedas";
import Mudras from "components/Mudras_Bhedas";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mudras_Bhedas" }
  ];
}

export default function mudras() {
  return <Mudras />;
}
