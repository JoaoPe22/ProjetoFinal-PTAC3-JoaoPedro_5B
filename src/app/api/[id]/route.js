import { NextResponse } from "next/server";
import { listaDeViagens } from "../route";

export async function GET(req) {
  const id = parseInt(req.url.split("/api/")[1]);
  let objeto = null;
  listaDeViagens.forEach((obj) => {
    if (obj.id == id) {
      objeto = obj;
    }
  });
  return NextResponse.json(objeto);
}