export class NavBar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <nav class="bg-white shadow-lg fixed w-full z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <!-- Logo -->
            <div class="flex items-center">
              <a href="#/" class="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <i class="fa-solid fa-futbol text-purple-500"></i>
                SoccerHub
              </a>
            </div>

            <!-- Menu Desktop -->
            <div class="hidden md:flex items-center gap-6">
              <a href="#/" class="text-gray-700 hover:text-purple-500 flex items-center gap-1"><i class="fa-solid fa-house"></i> Home</a>
              <a href="#/world-cups" class="text-gray-700 hover:text-purple-500 flex items-center gap-1"><i class="fa-solid fa-trophy"></i> World Cups</a>
              <a href="#/teams" class="text-gray-700 hover:text-purple-500 flex items-center gap-1"><i class="fa-solid fa-users"></i> Teams</a>
              <a href="#/about" class="text-gray-700 hover:text-purple-500 flex items-center gap-1"><i class="fa-solid fa-info-circle"></i> About</a>
            </div>

            <!-- Login & Register Buttons -->
            <div class="hidden md:flex items-center gap-3">
              <button id="Login-btn" class="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition">Login</button>
              <button id="registro-btn" class="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition">Register</button>
            </div>

            <!-- Mobile Menu Button -->
            <div class="flex items-center md:hidden">
              <button id="menu-btn" class="text-gray-700 focus:outline-none">
                <i class="fa-solid fa-bars text-2xl"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden md:hidden">
          <a href="#/" class="block px-4 py-2 text-gray-700 hover:bg-gray-200 flex items-center gap-2">Home</a>
          <a href="#/world-cups" class="block px-4 py-2 text-gray-700 hover:bg-gray-200 flex items-center gap-2">World Cups</a>
          <a href="#/teams" class="block px-4 py-2 text-gray-700 hover:bg-gray-200 flex items-center gap-2">Teams</a>
          <a href="#/about" class="block px-4 py-2 text-gray-700 hover:bg-gray-200 flex items-center gap-2">About</a>
          <button id="Login-btn-mobile" class="w-full text-left px-4 py-2 bg-purple-500 text-white rounded mt-2 hover:bg-purple-600 transition">Login</button>
          <button id="registro-btn-mobile" class="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 rounded mt-2 hover:bg-gray-300 transition">Register</button>
        </div>
      </nav>
    `;
  }

  connectedCallback() {
    const btn = this.querySelector('#menu-btn');
    const menu = this.querySelector('#mobile-menu');

    if (btn && menu) {
      btn.addEventListener('click', () => menu.classList.toggle('hidden'));
    }

    const loginBtns = this.querySelectorAll('#Login-btn, #Login-btn-mobile');
    loginBtns.forEach(loginBtn => {
      loginBtn.addEventListener('click', () => {  
        location.href = "/pages/Login.html"; 
      });
    });


    const registerBtns = this.querySelectorAll('#registro-btn, #registro-btn-mobile');
    registerBtns.forEach(registerBtn => {
      registerBtn.addEventListener('click', () => {
        location.href = "/pages/Register.html"; 
      });
    });

  }
}

customElements.define("nav-bar", NavBar);
