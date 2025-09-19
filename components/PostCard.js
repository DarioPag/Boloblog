export class PostCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const hashtag = this.getAttribute("hashtag") || "#Soccer";
    const text = this.getAttribute("text") || "Default post text.";
    const img = this.getAttribute("img") || null;

    this.innerHTML = `
      <div class="bg-white shadow-lg rounded-xl p-5 mb-6">
        <p class="text-purple-500 font-semibold mb-2">${hashtag}</p>
        <p class="text-gray-700 mb-4">${text}</p>
        ${img ? `<img src="${img}" alt="Post image" class="rounded-lg mb-4">` : ""}
        <div class="flex gap-4 text-gray-600">
          <button id="like-btn" class="flex items-center gap-2 hover:text-purple-500">
            <i class="fa-solid fa-heart"></i> Like
          </button>
          <button class="flex items-center gap-2 hover:text-purple-500">
            <i class="fa-solid fa-share"></i> Share
          </button>
        </div>
      </div>
    `;

    const likeBtn = this.querySelector("#like-btn");
    likeBtn.addEventListener("click", () => {
      likeBtn.classList.toggle("text-red-500");
    });
  }
}

customElements.define("post-card", PostCard);
