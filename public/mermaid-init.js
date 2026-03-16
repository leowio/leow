import mermaid from "https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.esm.min.mjs";

function getTheme() {
  const dt = document.documentElement.getAttribute("data-theme");
  return dt === "dark" ? "dark" : "default";
}

const mermaidSources = [];

async function renderMermaidBlocks() {
  // On first run, find code blocks and store sources
  if (mermaidSources.length === 0) {
    const blocks = document.querySelectorAll(
      'pre[data-language="mermaid"], pre:has(code.language-mermaid)'
    );
    if (blocks.length === 0) return;

    for (const pre of blocks) {
      const code = pre.querySelector("code");
      mermaidSources.push({ text: code.textContent, pre });
    }
  }

  mermaid.initialize({ startOnLoad: false, theme: getTheme() });

  for (const entry of mermaidSources) {
    const id = "mermaid-" + Math.random().toString(36).slice(2, 9);
    try {
      const { svg } = await mermaid.render(id, entry.text);
      const wrapper = document.createElement("div");
      wrapper.className = "mermaid-diagram";
      wrapper.innerHTML = svg;

      // Override global svg { width: 1.5rem; height: 1.5rem } from Tailwind
      const svgEl = wrapper.querySelector("svg");
      if (svgEl) {
        svgEl.style.width = "100%";
        svgEl.style.height = "auto";
        svgEl.style.display = "block";
      }

      // Replace whichever element is currently in the DOM
      const current = entry.el || entry.pre;
      current.replaceWith(wrapper);
      entry.el = wrapper;
    } catch (e) {
      console.error("Mermaid render error:", e);
    }
  }
}

renderMermaidBlocks();

// Re-render on theme change
const observer = new MutationObserver((mutations) => {
  for (const m of mutations) {
    if (m.attributeName === "data-theme" && mermaidSources.length > 0) {
      renderMermaidBlocks();
    }
  }
});
observer.observe(document.documentElement, { attributes: true });
