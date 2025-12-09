// src/bff/appBff.ts
import { api } from "../http/api";
import type { AppState } from "../context/appDataContext";
import type { Evento, Cidade } from "../domain";

export async function fetchAppState(): Promise<AppState> {
  const [eventosRes, cidadesRes] = await Promise.all([
    api.get<Evento[]>("/eventos"),
    api.get<Cidade[]>("/cidades"),
  ]);

  return {
    eventos: eventosRes.data,
    cidades: cidadesRes.data,
  };
}

// se quiser já deixar pronto para CRUD:

export async function createEvento(payload: Omit<Evento, "id">) {
  const response = await api.post<Evento>("/eventos", payload);
  return response.data;
}

export async function updateEvento(id: string, payload: Partial<Evento>) {
  const response = await api.patch<Evento>(`/eventos/${id}`, payload);
  return response.data;
}

export async function deleteEventoApi(id: string) {
  await api.delete(`/eventos/${id}`);
}

export async function createCidade(payload: Omit<Cidade, "id">) {
  const response = await api.post<Cidade>("/cidades", payload);
  return response.data;
}
