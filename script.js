let activeGroup = "all";

function filterGroup(group, btn) {
  activeGroup = group;
  document
    .querySelectorAll(".nav-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  applyFilters();
}

function filterAll() {
  applyFilters();
}

function applyFilters() {
  const query = document.getElementById("search").value.toLowerCase().trim();
  const sections = document.querySelectorAll(".section");
  let visibleCount = 0;

  sections.forEach((sec) => {
    const group = sec.dataset.group;
    const keywords = (sec.dataset.keywords || "").toLowerCase();
    const text = sec.textContent.toLowerCase();

    const groupMatch = activeGroup === "all" || group === activeGroup;
    const searchMatch =
      !query || text.includes(query) || keywords.includes(query);

    if (groupMatch && searchMatch) {
      sec.classList.remove("hidden");
      visibleCount++;
    } else {
      sec.classList.add("hidden");
    }
  });

  document.getElementById("no-results").style.display =
    visibleCount === 0 ? "block" : "none";
}
