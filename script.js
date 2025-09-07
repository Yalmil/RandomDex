const animados = document.querySelectorAll('.animado');

function mostrarAnimados() {
  const trigger = window.innerHeight * 0.85;
  animados.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', mostrarAnimados);
window.addEventListener('load', mostrarAnimados);
window.addEventListener("load", () => {
  const intro = document.getElementById("intro");
  setTimeout(() => {
    intro.style.opacity = 0;
    setTimeout(() => intro.remove(), 1000);
  }, 2000); // Tiempo que permanece visible (2s)
});
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = () => {
  if (document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
document.getElementById("language-selector").addEventListener("change", function () {
  const lang = this.value;
  fetch(`lang/${lang}.json`)
    .then(response => response.json())
    .then(data => {
      document.querySelector("header h1").innerText = data.title;
      document.querySelector("#sobre h2").innerText = data.sobre_titulo;
      document.querySelector("#sobre h3:nth-of-type(1)").innerText = data.staff;
      document.querySelector("#sobre h3:nth-of-type(2)").innerText = data.reglas;
      // Agrega aquí más elementos a traducir
    });
});

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
    noticiasTexto: "¡Participa y gana premios épicos antes del 30 de mayo!",
    redesTitulo: "Síguenos en redes",
    redesTexto: "Conéctate con la comunidad en nuestras plataformas:",
    sugerenciasTitulo: "💡 Buzón de Sugerencias",
    sugerenciasTexto: "¡Envíanos tus ideas para mejorar el servidor!",
    metasTitulo: "Metas para el 2025",
    completado: "✅ Completado",
    progreso: "🚧 En progreso"
  },
  en: {
    title: "Minecraft SEP Server",
    sobreTitulo: "🌍 About the server",
    sobreTexto: "Minecraft SEP is a survival server with an active community, weekly events, and unique economy and protection systems. Our goal is to provide a fun, safe, and fair experience for all players.",
    staffTitulo: "👥 Main Staff",
    reglasTitulo: "📜 Main Rules",
    regla1: "❌ No griefing.",
    regla2: "❌ No using unfair hacks or mods.",
    regla3: "✅ Respect other players and staff.",
    noticiasTitulo: "📰 Server News",
    noticiasTexto: "Join and win epic prizes before May 30th!",
    redesTitulo: "Follow us on social media",
    redesTexto: "Connect with the community on our platforms:",
    sugerenciasTitulo: "💡 Suggestion Box",
    sugerenciasTexto: "Send us your ideas to improve the server!",
    metasTitulo: "Goals for 2025",
    completado: "✅ Completed",
    progreso: "🚧 In Progress"
  },
  pt: {
    title: "Servidor Minecraft SEP",
    sobreTitulo: "🌍 Sobre o servidor",
    sobreTexto: "Minecraft SEP é um servidor de sobrevivência com uma comunidade ativa, eventos semanais e sistemas únicos de economia e proteção. Nosso objetivo é oferecer uma experiência divertida, segura e justa para todos os jogadores.",
    staffTitulo: "👥 Equipe principal",
    reglasTitulo: "📜 Regras principais",
    regla1: "❌ Não causar griefing.",
    regla2: "❌ Não usar hacks ou mods injustos.",
    regla3: "✅ Respeito entre jogadores e staff.",
    noticiasTitulo: "📰 Notícias do servidor",
    noticiasTexto: "Participe e ganhe prêmios épicos até 30 de maio!",
    redesTitulo: "Siga-nos nas redes sociais",
    redesTexto: "Conecte-se com a comunidade em nossas plataformas:",
    sugerenciasTitulo: "💡 Caixa de sugestões",
    sugerenciasTexto: "Envie suas ideias para melhorar o servidor!",
    metasTitulo: "Metas para 2025",
    completado: "✅ Concluído",
    progreso: "🚧 Em andamento"
  }
};

const languageSelector = document.getElementById("languageSelector");
languageSelector.addEventListener("change", changeLanguage);

function changeLanguage() {
  const lang = languageSelector.value;
  const t = translations[lang];

  document.querySelector("title").textContent = t.title;
  document.getElementById("sobreTitulo").textContent = t.sobreTitulo;
  document.getElementById("sobreTexto").textContent = t.sobreTexto;
  document.getElementById("staffTitulo").textContent = t.staffTitulo;
  document.getElementById("reglasTitulo").textContent = t.reglasTitulo;
  document.getElementById("regla1").textContent = t.regla1;
  document.getElementById("regla2").textContent = t.regla2;
  document.getElementById("regla3").textContent = t.regla3;
  document.getElementById("noticiasTitulo").textContent = t.noticiasTitulo;
  document.getElementById("noticiasTexto").textContent = t.noticiasTexto;
  document.getElementById("redesTitulo").textContent = t.redesTitulo;
  document.getElementById("redesTexto").textContent = t.redesTexto;
  document.getElementById("sugerenciasTitulo").textContent = t.sugerenciasTitulo;
  document.getElementById("sugerenciasTexto").textContent = t.sugerenciasTexto;
  document.getElementById("metasTitulo").textContent = t.metasTitulo;
  document.getElementById("completadoTitulo").textContent = t.completado;
  document.getElementById("progresoTitulo").textContent = t.progreso;
}
let diamante = Math.floor(Math.random() * 3) + 1;

function verificarDiamante(num) {
  const resultado = document.getElementById("resultado-juego");
  if (num === diamante) {
    resultado.textContent = "💎 ¡Encontraste el diamante!";
    resultado.style.color = "lime";
  } else {
    resultado.textContent = "🚫 No era ese. Intenta otra vez.";
    resultado.style.color = "red";
  }
}
document.addEventListener("DOMContentLoaded", () => {
  let visitas = localStorage.getItem("visitas") || 0;
  visitas++;
  localStorage.setItem("visitas", visitas);
  document.getElementById("visitas").textContent = visitas;
});
<script>
  const audio = document.getElementById("bgMusic");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const volumenControl = document.getElementById("volumenControl");

  // Reproducir/Pausar
  playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      playPauseBtn.textContent = "⏸️";
    } else {
      audio.pause();
      playPauseBtn.textContent = "▶️";
    }
  });

  // Control de volumen
  volumenControl.addEventListener("input", () => {
    audio.volume = volumenControl.value;
  });

  // Cargar volumen inicial
  audio.volume = volumenControl.value;
</script>


