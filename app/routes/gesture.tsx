import UploadImage from "components/UploadImage";
import type { Route } from "./+types/gesture";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gesture" }
  ];
}

export default function basic() {
  return <UploadImage />;
}
