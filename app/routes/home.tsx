import type { Route } from "./+types/home";
import SkillsCard from "components/SkillsCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nrityalaya" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <SkillsCard />;
}
