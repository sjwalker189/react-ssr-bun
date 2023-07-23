import React from "react";
import { renderToReadableStream } from "react-dom/server";
import App from "./App.tsx";

const server = Bun.serve({
  port: 3000,
  async fetch(request) {
    const url = new URL(request.url);
    const length = url.searchParams.has("length")
      ? Number(url.searchParams.get("length"))
      : 1;

    const headers = new Headers();
    headers.set("Content-Type", "text/html;charset=utf8");

    const body = await renderToReadableStream(<App length={length} />);

    return new Response(body, {
      headers,
    });
  },
});

console.log(`Listening on http://localhost:${server.port}`);
