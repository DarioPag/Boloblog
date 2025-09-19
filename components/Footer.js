export class AppFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-purple-900 text-gray-200 px-6 py-8">
  <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-6">
    
    <!-- Logo / Name -->
    <div class="text-xl font-bold mb-4 md:mb-0">SoccerHub</div>

    <!-- Info Section -->
    <div class="flex flex-col sm:flex-row gap-8">
      <!-- Contact -->
      <div>
        <h3 class="font-semibold mb-2">Contact</h3>
        <p class="text-gray-400 text-sm">Email: info@soccerhub.com</p>
        <p class="text-gray-400 text-sm">Phone: +1 (555) 123-4567</p>
      </div>

      <!-- Address -->
      <div>
        <h3 class="font-semibold mb-2">Address</h3>
        <p class="text-gray-400 text-sm">123 Soccer Street</p>
        <p class="text-gray-400 text-sm">Cityville, Country</p>
      </div>

      <!-- Social Icons -->
      <div>
        <h3 class="font-semibold mb-2">Follow Us</h3>
        <div class="flex gap-4 text-gray-400">
          <a href="#" class="hover:text-white transition"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="hover:text-white transition"><i class="fab fa-twitter"></i></a>
          <a href="#" class="hover:text-white transition"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>

  </div>

  <div class="mt-6 text-center text-gray-500 text-sm">
    &copy; 2025 SoccerHub. All rights reserved.
  </div>
</footer>

    `;
  }
}

customElements.define("app-footer", AppFooter);
