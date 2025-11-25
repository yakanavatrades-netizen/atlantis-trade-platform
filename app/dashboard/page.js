
"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      const res = await fetch("/api/session");
      const data = await res.json();

      if (data.loggedIn) {
        setLoggedIn(true);
      } else {
        window.location.href = "/login";
      }
    }

    checkAuth();
  }, []);

  if (!loggedIn) return <p>Verificando sesión...</p>;

  return (
    <div style={{ padding: "40px" }}>
      <h1>Bienvenido al Dashboard</h1>
      <p>Aquí verás tus alertas, contenido privado y acceso al chat.</p>
    </div>
  );
}
