const langSelect = document.getElementById("language-select");

const translations = {
  es: {
    title: "Servidor Minecraft SEP",
    sobreTitulo: "🌍 Sobre el servidor",
    sobreTexto: "Minecraft SEP es un servidor de supervivencia con una comunidad activa, eventos semanales y sistemas únicos de economía y protección. Nuestro objetivo es brindar una experiencia divertida, segura y justa para todos los jugadores.",
    staffTitulo: "👥 Staff principal",
    reglasTitulo: "📜 Reglas principales",
    regla1: "❌ No hacer griefing.",
    regla2: "❌ No usar hacks o mods injustos.",
    regla3: "✅ Respeto entre jugadores y staff.",
    noticiasTitulo: "📰 Noticias del servidor",
    noticiaEvento: "🎉 Nuevo evento de construcción",
    noticiaTexto: "¡Participa y gana premios épicos antes del 30 de mayo!",
    redesTitulo: "Síguenos en redes",
    redesTexto: "Conéctate con la comunidad en nuestras plataformas:",
  },
  en: {
    title: "Minecraft SEP Server",
    sobreTitulo: "🌍 About the Server",
    sobreTexto: "Minecraft SEP is a survival server with an active community, weekly events, and unique systems for economy and protection. Our goal is to provide a fun, safe, and fair experience for all players.",
    staffTitulo: "👥 Main Staff",
    reglasTitulo: "📜 Main Rules",
    regla1: "❌ No griefing.",
    regla2: "❌ No unfair hacks or mods.",
    regla3: "✅ Respect players and staff.",
    noticiasTitulo: "📰 Server News",
    noticiaEvento: "🎉 New Building Event",
    noticiaTexto: "Join and win epic prizes before May 30!",
    redesTitulo: "Follow us on social media",
    redesTexto: "Connect with the community on our platforms:",
  },
  pt: {
    title: "Servidor Minecraft SEP",
    sobreTitulo: "🌍 Sobre o servidor",
    sobreTexto: "Minecraft SEP é um servidor de sobrevivência com uma comunidade ativa, eventos semanais e sistemas únicos de economia e proteção. Nosso objetivo é oferecer uma experiência divertida, segura e justa para todos os jogadores.",
    staffTitulo: "👥 Equipe principal",
    reglasTitulo: "📜 Regras principais",
    regla1: "❌ Não fazer griefing.",
    regla2: "❌ Não usar hacks ou mods injustos.",
    regla3: "✅ Respeito entre jogadores e equipe.",
    noticiasTitulo: "📰 Notícias do servidor",
    noticiaEvento: "🎉 Novo evento de construção",
    noticiaTexto: "Participe e ganhe prêmios épicos até 30 de maio!",
    redesTitulo: "Siga-nos nas redes sociais",
    redesTexto: "Conecte-se com a comunidade em nossas plataformas:",
  }
};

function cambiarIdioma(lang) {
  const t = translations[lang];
  if (!t) return;

  document.title = t.title;
  document.getElementById("sobreTitulo").textContent = t.sobreTitulo;
  document.getElementById("sobreTexto").textContent = t.sobreTexto;
  document.getElementById("staffTitulo").textContent = t.staffTitulo;
  document.getElementById("reglasTitulo").textContent = t.reglasTitulo;
  document.getElementById("regla1").textContent = t.regla1;
  document.getElementById("regla2").textContent = t.regla2;
  document.getElementById("regla3").textContent = t.regla3;
  document.getElementById("noticiasTitulo").textContent = t.noticiasTitulo;
  document.getElementById("noticiaEvento").textContent = t.noticiaEvento;
  document.getElementById("noticiaTexto").textContent = t.noticiaTexto;
  document.getElementById("redesTitulo").textContent = t.redesTitulo;
  document.getElementById("redesTexto").textContent = t.redesTexto;
}

langSelect.addEventListener("change", () => {
  const selectedLang = langSelect.value;
  localStorage.setItem("language", selectedLang);
  cambiarIdioma(selectedLang);
});

// Aplicar idioma guardado
document.addEventListener("DOMContentLoaded", () => {
  const storedLang = localStorage.getItem("language") || "es";
  langSelect.value = storedLang;
  cambiarIdioma(storedLang);
});
