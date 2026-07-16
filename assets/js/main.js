const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

document.querySelectorAll("video").forEach((video) => {
  const fallback = video.parentElement?.querySelector(".demo-fallback");
  if (!fallback) return;

  const hideFallback = () => {
    fallback.hidden = true;
  };

  video.addEventListener("loadeddata", hideFallback);
  video.addEventListener("error", () => {
    fallback.hidden = false;
    video.style.display = "none";
  });

  // If source fails to load (missing file), show instructions
  const source = video.querySelector("source");
  if (source) {
    source.addEventListener("error", () => {
      fallback.hidden = false;
      video.style.display = "none";
    });
  }
});
