import type { Evento } from "./evento";
import type { PontoTuristico } from "./pontoTuristico";

export interface Cidade {
  id: string;
  nome: string;
  uf: string;
  desc: string;
  pontos: PontoTuristico[];
  eventos: Evento[];
}
