import { Pokemon } from "~/pokemon/pokemon";
import type { Route } from "./+types/home"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tipos" },
    { name: "description", content: "Tipos de Pokemon!" },
  ];
}

export default function Home() {
  return <Pokemon/>;
}
