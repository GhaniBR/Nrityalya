import Videos from "components/Videos";
import type { Route } from "./+types/videos";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Videos" }
  ];
}

export default function videos() {
  return <Videos />;
}
