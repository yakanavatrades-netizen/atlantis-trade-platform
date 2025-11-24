export default function HomePage() {
  return (
    <main style={{ background: "#0c1015", color: "white", fontFamily: "Inter, sans-serif" }}>
      
      {/* HERO SECTION */}
      <section style={{
        padding: "120px 20px",
        textAlign: "center",
        background: "linear-gradient(to bottom, #06141d, #0c1015)"
      }}>
        <h1 style={{
          fontSize: "54px",
          fontWeight: "700",
          color: "#00bcd4",
          marginBottom: "20px",
          letterSpacing: "1px"
        }}>
          Atlantis Trade Group
        </h1>
        <p style={{
          fontSize: "20px",
          maxWidth: "700px",
          margin: "0 auto",
          color: "#cdd5df"
        }}>
          Comunidad privada de trading profesional. Señales premium, análisis diarios,
          formación avanzada y un entorno exclusivo para traders serios.
        </p>

        <div style={{ marginTop: "40px" }}>
          <a href="#plans" style={{
            padding: "15px 35px",
            background: "#1f6ef0",
            borderRadius: "10px",
            color: "white",
            textDecoration: "none",
            fontSize: "18px",
            marginRight: "15px"
          }}>
            Únete Ahora
          </a>

          <a href="#about" style={{
            padding: "15px 35px",
            borderRadius: "10px",
            border: "2px solid #00bcd4",
            color: "#00bcd4",
            textDecoration: "none",
            fontSize: "18px"
          }}>
            Saber Más
          </a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" style={{ padding: "80px 20px", maxWidth: "1100px", margin: "auto" }}>
        <h2 style={{
          fontSize: "38px",
          textAlign: "center",
          marginBottom: "40px",
          color: "#00bcd4"
        }}>
          ¿Qué es Atlantis Trade Group?
        </h2>

        <p style={{
          fontSize: "18px",
          lineHeight: "1.7",
          color: "#cdd5df",
          maxWidth: "850px",
          margin: "0 auto",
          textAlign: "center"
        }}>
          Somos una comunidad privada de traders enfocada en la consistencia real a largo plazo.
          Ofrecemos análisis institucionales, señales precisas, formación profesional,
          sesiones privadas y un entorno único donde los traders crecen juntos.
        </p>
      </section>

      {/* FEATURES SECTION */}
      <section style={{ padding: "80px 20px", background: "#111820" }}>
        <h2 style={{
          fontSize: "38px",
          textAlign: "center",
          marginBottom: "50px",
          color: "#00bcd4"
        }}>
          Qué Incluye la Membresía
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "auto"
        }}>
          {[
            { title: "Señales Diarias", desc: "Setups precisos y niveles clave con análisis institucional." },
            { title: "Análisis Diario", desc: "Videos diarios con estructura, liquidez y bias institucional." },
            { title: "Webinars Semanales", desc: "Sesiones privadas de formación avanzada para miembros." },
            { title: "Chat Privado", desc: "Un espacio premium tipo Discord para compartir ideas y setups." }
          ].map((card, index) => (
            <div key={index} style={{
              background: "#0c1218",
              padding: "30px",
              borderRadius: "14px",
              boxShadow: "0 0 12px rgba(0,0,0,0.4)",
              transition: "0.3s"
            }}>
              <h3 style={{
                fontSize: "22px",
                marginBottom: "10px",
                color: "#1f6ef0"
              }}>
                {card.title}
              </h3>
              <p style={{ color: "#cdd5df", lineHeight: "1.6" }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PLANS SECTION */}
      <section id="plans" style={{ padding: "80px 20px", maxWidth: "1100px", margin: "auto" }}>
        <h2 style={{
          fontSize: "38px",
          textAlign: "center",
          marginBottom: "40px",
          color: "#00bcd4"
        }}>
          Planes de Membresía
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px"
        }}>

          {[
            { name: "Mensual", price: "119€", perks: ["Acceso total", "Señales diarias", "Videos diarios"] },
            { name: "Trimestral", price: "300€", perks: ["Todo lo del mensual", "Webinars exclusivos"] },
            { name: "Anual", price: "999€", perks: ["Acceso completo", "Seminarios avanzados", "Contenido exclusivo"] }
          ].map((plan, idx) => (
            <div key={idx} style={{
              background: "#111820",
              padding: "35px",
              borderRadius: "14px",
              textAlign: "center",
              boxShadow: "0 0 12px rgba(0,0,0,0.4)"
            }}>
              <h3 style={{ fontSize: "24px", color: "#1f6ef0", marginBottom: "10px" }}>
                {plan.name}
              </h3>
              <p style={{ fontSize: "30px", color: "white", margin: "15px 0" }}>{plan.price}</p>

              <ul style={{ listStyle: "none", padding: 0, marginBottom: "30px", color: "#cdd5df" }}>
                {plan.perks.map((perk, i) => (
                  <li key={i} style={{ marginBottom: "10px" }}>{perk}</li>
                ))}
              </ul>

              <a href="#" style={{
                padding: "12px 25px",
                background: "#1f6ef0",
                borderRadius: "10px",
                color: "white",
                textDecoration: "none",
                fontWeight: "600"
              }}>
                Suscribirse
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: "#05080c",
        padding: "40px 20px",
        textAlign: "center",
        color: "#7e8b96"
      }}>
        © 2025 Atlantis Trade Group — Todos los derechos reservados
      </footer>

    </main>
  );
}
