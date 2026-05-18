const HISTORY_KEY = "novabmx:viewed";
const MAX_HISTORY = 12;

function trackView(slug) {
  try {
    const prev = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
    const next = [slug, ...prev.filter(s => s !== slug)].slice(0, MAX_HISTORY);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
  } catch {}
}
function getViewed() {
  try { return JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]"); }
  catch { return []; }
}

function renderRecommendations() {
  const container = document.getElementById("recommendations-grid");
  if (!container) return;
  const viewed = getViewed();
  let recos;
  if (viewed.length === 0) {
    recos = [...CATEGORIES].sort(() => Math.random() - 0.5).slice(0, 4);
  } else {
    const seen = viewed.map(s => getCategory(s)).filter(Boolean);
    const rest = CATEGORIES.filter(c => !viewed.includes(c.slug));
    recos = [...seen, ...rest].slice(0, 4);
  }
  container.innerHTML = recos.map(c => `
    <a href="productos.html?cat=${c.slug}" class="reco-card">
      <div class="image-placeholder">Tu imagen aquí</div>
      <h3>${c.name}</h3>
    </a>
  `).join("");
}
document.addEventListener("DOMContentLoaded", renderRecommendations);














// Slider desactivado - solo muestra portada 3 estática