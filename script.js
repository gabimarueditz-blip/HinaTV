const animeCatalog = [
  {
    title: "Shadow Echoes",
    year: "2026",
    type: "Action",
    rating: 4.9,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Moonlit Blades",
    year: "2025",
    type: "Fantasy",
    rating: 4.8,
    badge: "Hot",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Neon Drift",
    year: "2024",
    type: "Sci-Fi",
    rating: 4.7,
    badge: "HD",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Cherry Kisses",
    year: "2026",
    type: "Romance",
    rating: 4.9,
    badge: "Top",
    image:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Crimson Horizon",
    year: "2023",
    type: "Action",
    rating: 4.8,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Aurora Lane",
    year: "2025",
    type: "Fantasy",
    rating: 4.7,
    badge: "Classic",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Lucky Tails",
    year: "2024",
    type: "Comedy",
    rating: 4.6,
    badge: "Trending",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Violet Static",
    year: "2026",
    type: "Sci-Fi",
    rating: 4.9,
    badge: "Fresh",
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80"
  }
];

const catalog = document.querySelector("#catalog");
const chips = document.querySelectorAll(".chip");

function renderCards(filter = "All") {
  const items = filter === "All"
    ? animeCatalog
    : animeCatalog.filter((item) => item.type === filter);

  catalog.innerHTML = items
    .map(
      (item) => `
        <article class="anime-card">
          <img src="${item.image}" alt="${item.title} poster" />
          <div class="card-body">
            <div class="card-topline">
              <span class="card-badge">${item.badge}</span>
              <span class="card-rating">★ ${item.rating}</span>
            </div>
            <h3>${item.title}</h3>
            <div class="anime-meta">
              <span>${item.type}</span>
              <span>${item.year}</span>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((button) => button.classList.remove("active"));
    chip.classList.add("active");
    renderCards(chip.textContent.trim());
  });
});

renderCards();
