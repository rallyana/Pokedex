import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Tipos } from '../Tipos/tipos';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tipos" },
    { name: "description", content: "Tipos de Pokemon" },
  ];
}

export default function type() {
  return <Tipos />;
}
