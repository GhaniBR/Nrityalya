import Gallery from "components/Gallery";
import type { Route } from "./+types/gallery";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gallery" }
  ];
}

export default function gallery() {
  return <Gallery />;
}
