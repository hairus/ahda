<template>
  <div class="h-screen bg-slate-100 flex transition-all">
    <section
      class="bg-[#FFDFD6] w-64 min-h-screen overflow-y-auto overscroll-auto custom-scrollbar shadow-custom hidden md:block"
    >
      <div class="mx-auto pt-8 pb-2 flex justify-center gap-3 items-center">
        <img src="@/assets/logo.png" alt="Hairus logo" class="h-6 w-auto" />
        <div class="font-semibold">
          Hairus
          <span class="bg-[#E3A5C7] rounded-full py-1 px-2 text-[#fff1f1]"
            >System</span
          >
        </div>
      </div>
      <div class="side-nav__divider mx-auto my-4"></div>
      <ul>
        <li>
          <a href="javascript:;" class="side-menu" @click="toggleMenu">
            <div class="side-menu__icon"><i class="bx bxs-dashboard"></i></div>
            <div class="side-menu__title">
              Dashboard
              <div class="side-menu__sub-icon">
                <i class="fa-solid fa-chevron-down"></i>
              </div>
            </div>
          </a>
          <ul class="side-menu__sub-menu">
            <li>
              <a href="#" class="side-menu side-menu--active">
                <div class="side-menu__icon">
                  <i class="bx bx-radio-circle"></i>
                </div>
                <div class="side-menu__title">Overview 1</div>
              </a>
            </li>
            <li>
              <a href="#" class="side-menu">
                <div class="side-menu__icon">
                  <i class="bx bx-radio-circle"></i>
                </div>
                <div class="side-menu__title">Overview 2</div>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="javascript:;" class="side-menu" @click="toggleMenu">
            <div class="side-menu__icon"><i class="bx bx-cog"></i></div>
            <div class="side-menu__title">
              Settings
              <div class="side-menu__sub-icon">
                <i class="fa-solid fa-chevron-down"></i>
              </div>
            </div>
          </a>
          <ul class="side-menu__sub-menu">
            <li>
              <a href="#" class="side-menu">
                <div class="side-menu__icon">
                  <i class="bx bxs-user"></i>
                </div>
                <div class="side-menu__title">Profile</div>
              </a>
            </li>
            <li>
              <a href="#" class="side-menu">
                <div class="side-menu__icon">
                  <i class="bx bxs-data"></i>
                </div>
                <div class="side-menu__title">Data</div>
              </a>
            </li>
          </ul>
        </li>
        <div class="side-nav__divider mx-auto my-4"></div>
        <li>
          <a href="javascript:;" class="side-menu" @click="toggleMenu">
            <div class="side-menu__icon"><i class="bx bx-cog"></i></div>
            <div class="side-menu__title">
              Settings
              <div class="side-menu__sub-icon">
                <i class="fa-solid fa-chevron-down"></i>
              </div>
            </div>
          </a>
          <ul class="side-menu__sub-menu">
            <li>
              <a href="index.html" class="side-menu">
                <div class="side-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div class="side-menu__title">Profile</div>
              </a>
            </li>
            <li>
              <a
                href="side-menu-light-dashboard-overview-2.html"
                class="side-menu"
              >
                <div class="side-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div class="side-menu__title">Data</div>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="javascript:;" class="side-menu" @click="toggleMenu">
            <div class="side-menu__icon"><i class="bx bx-cog"></i></div>
            <div class="side-menu__title">
              Settings
              <div class="side-menu__sub-icon">
                <i class="fa-solid fa-chevron-down"></i>
              </div>
            </div>
          </a>
          <ul class="side-menu__sub-menu">
            <li>
              <a href="index.html" class="side-menu">
                <div class="side-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div class="side-menu__title">Profile</div>
              </a>
            </li>
            <li>
              <a
                href="side-menu-light-dashboard-overview-2.html"
                class="side-menu"
              >
                <div class="side-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div class="side-menu__title">Data</div>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="javascript:;" class="side-menu" @click="toggleMenu">
            <div class="side-menu__icon"><i class="bx bx-cog"></i></div>
            <div class="side-menu__title">
              Settings
              <div class="side-menu__sub-icon">
                <i class="fa-solid fa-chevron-down"></i>
              </div>
            </div>
          </a>
          <ul class="side-menu__sub-menu">
            <li>
              <a href="index.html" class="side-menu">
                <div class="side-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div class="side-menu__title">Profile</div>
              </a>
            </li>
            <li>
              <a
                href="side-menu-light-dashboard-overview-2.html"
                class="side-menu"
              >
                <div class="side-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div class="side-menu__title">Data</div>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="javascript:;" class="side-menu" @click="toggleMenu">
            <div class="side-menu__icon"><i class="bx bx-cog"></i></div>
            <div class="side-menu__title">
              Settings
              <div class="side-menu__sub-icon">
                <i class="fa-solid fa-chevron-down"></i>
              </div>
            </div>
          </a>
          <ul class="side-menu__sub-menu">
            <li>
              <a href="index.html" class="side-menu">
                <div class="side-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div class="side-menu__title">Profile</div>
              </a>
            </li>
            <li>
              <a
                href="side-menu-light-dashboard-overview-2.html"
                class="side-menu"
              >
                <div class="side-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div class="side-menu__title">Data</div>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="javascript:;" class="side-menu" @click="toggleMenu">
            <div class="side-menu__icon"><i class="bx bx-cog"></i></div>
            <div class="side-menu__title">
              Settings
              <div class="side-menu__sub-icon">
                <i class="fa-solid fa-chevron-down"></i>
              </div>
            </div>
          </a>
          <ul class="side-menu__sub-menu">
            <li>
              <a href="index.html" class="side-menu">
                <div class="side-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div class="side-menu__title">Profile</div>
              </a>
            </li>
            <li>
              <a
                href="side-menu-light-dashboard-overview-2.html"
                class="side-menu"
              >
                <div class="side-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div class="side-menu__title">Data</div>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </section>
    <section id="content" class="w-full">
      <header class="bg-white shadow-md">
        <div class="flex items-center justify-between h-20 px-4 sm:px-6">
          <!-- Logo dan Deskripsi -->
          <div class="flex items-center">
            <div class="ml-4">
              <div class="text-sm font-medium text-gray-900">Sunday</div>
              <div class="text-sm font-medium text-gray-500">
                21 January 2024
              </div>
            </div>
          </div>

          <!-- Untuk Navigasi -->
          <div class="hidden md:flex items-center space-x-4 pe-10">
            <div class="flex flex-col">
              <span class="font-semibold col-span-1">Administrator</span>
              <span class="col-span-1">(Dinas)</span>
            </div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/036/594/092/large_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"
              alt=""
              class="w-14 rounded-full"
            />
          </div>

          <!-- Mobile Menu Button -->
          <div class="md:hidden flex items-center">
            <button
              type="button"
              class="inline-flex items-center p-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <main class="mx-10 my-10">
        <router-view />
      </main>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Velocity from "velocity-animate";
import $ from "cash-dom";

const toggleMenu = (event) => {
  const $target = $(event.currentTarget);
  const $submenu = $target.next(".side-menu__sub-menu");

  if ($submenu.css("display") === "none") {
    $target.find(".side-menu__sub-icon").addClass("transform rotate-180");
    $target.addClass("side-menu--open");
    $submenu.css("display", "block");
    Velocity($submenu, "slideDown", {
      duration: 300,
      complete: function (el) {
        $(el).addClass("side-menu__sub-open");
      },
    });
  } else {
    $target.find(".side-menu__sub-icon").removeClass("transform rotate-180");
    $target.removeClass("side-menu--open");
    Velocity($submenu, "slideUp", {
      duration: 300,
      complete: function (el) {
        $(el).removeClass("side-menu__sub-open").css("display", "none");
      },
    });
  }
};

onMounted(() => {});
</script>

<style>
.side-menu {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  padding: 0 0.25rem 0 1.25rem;
  font-weight: 600;
  color: #505050;
}

.side-menu--active {
  background-color: #fdefeb;
  padding-right: 1rem;
}

.side-menu__icon {
  margin-right: 5px;
  font-size: 12px;
  display: flex;
  align-items: center;
}

.side-menu__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  border-radius: 8px;
}

.side-menu__sub-icon {
  transition: transform 0.3s;
}

.transform.rotate-180 {
  transform: rotate(180deg);
}

.side-menu__sub-menu {
  list-style-type: none;
  padding: 0;
  display: none;
  border-radius: 1rem;
  margin: 0rem 0.75rem 0 1rem;
  justify-content: flex-end;
}

.side-menu__sub-open {
  display: block;
}

.side-nav__divider {
  height: 0.5px;
  background-color: #b7b7b7;
  width: 80%;
}
</style>
