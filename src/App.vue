<template>
  <div class="h-screen bg-gray-200 flex">
    <section
      class="bg-[#FFDFD6] w-64 min-h-screen overflow-y-auto overscroll-auto"
    >
      <div class="mx-auto pt-4 flex justify-center gap-3 items-center">
        <img src="./assets/logo.png" alt="Hairus logo" class="h-6 w-auto" />
        <span class="text-xl font-semibold">Hairus</span>
      </div>
      <div class="side-nav__divider mt-4 mx-auto my-6"></div>

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
              <a href="index.html" class="side-menu">
                <div class="side-menu__icon">
                  <i data-feather="activity"></i>
                </div>
                <div class="side-menu__title">Overview 1</div>
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
    $submenu.css("display", "block"); // Ensure visibility before animating
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
  background-color: #fff0eb;
  border-radius: 1rem;
  margin: 0.25rem 0.75rem 0 1rem;
}

.side-menu__icon {
  margin-right: 10px;
}

.side-menu__title {
  display: flex;
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
  margin: 0;
  display: none;
  background-color: #fff0eb;
  border-radius: 1rem;
  margin: 0.25rem 0.75rem 0 1rem;
}

.side-menu__icon {
  margin-left: 1rem;
  font-size: 15pt;
}

.side-menu__sub-open {
  display: block;
}

.side-nav__divider {
  height: 1px;
  background-color: #b7b7b7;
  width: 80%;
  margin: 20px auto;
}
</style>
