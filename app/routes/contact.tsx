import Contact from "components/Contact";
import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact" }
  ];
}

export default function contact() {
  return <Contact />;
}
