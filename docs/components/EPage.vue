<template>
  <div>
    <!--    <div class="header mb-4">-->
    <!--      <div class="container">-->
    <!--        <NuxtLink to="/" class="logo-typo">EtherUI</NuxtLink>-->
    <!--        <ul>-->
    <!--          <li><a href="#">Home</a></li>-->
    <!--          <li><a href="#">About</a></li>-->
    <!--          <li><a href="#">Options</a></li>-->
    <!--        </ul>-->
    <!--        <div class="grow"></div>-->
    <!--        <ul>-->
    <!--          <li>-->
    <!--            <div class="form-element primary">-->
    <!--              <div class="has-icons">-->
    <!--                <svg-->
    <!--                  class="prepend-icon"-->
    <!--                  xmlns="http://www.w3.org/2000/svg"-->
    <!--                  fill="none"-->
    <!--                  viewBox="0 0 24 24"-->
    <!--                  stroke-width="1.5"-->
    <!--                  stroke="currentColor"-->
    <!--                >-->
    <!--                  <path-->
    <!--                    stroke-linecap="round"-->
    <!--                    stroke-linejoin="round"-->
    <!--                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"-->
    <!--                  />-->
    <!--                </svg>-->
    <!--                <input placeholder="Search..." />-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </li>-->
    <!--          <li class="separator"></li>-->
    <!--          <li><a href="#">Log in</a></li>-->
    <!--          <li><a href="#" class="btn primary">Sign up</a></li>-->
    <!--        </ul>-->
    <!--      </div>-->
    <!--    </div>-->
    <div class="header mb-4">
      <div class="container px-4">
        <NuxtLink to="/" class="logo-typo">EtherUI</NuxtLink>
        <ul>
          <li><a href="https://etherui.com">Back to Home</a></li>
        </ul>
        <div class="grow"></div>
        <ul>
          <li>
            <a href="https://github.com/ether-ui/ether-ui" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>
          </li>
          <li class="responsive-menu">
            <a href="#" @click="menu = !menu">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path
                  d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z"
                  fill="#1040e2"
                />
                <path
                  d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="container layout px-4">
      <div class="sidebar-left" :class="{ 'sidebar-left-active': menu }">
        <p class="menu-title font-bold">Getting Started</p>
        <ul class="main-side-menu list-none m-0 p-0">
          <li>
            <NuxtLink to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
                />
              </svg>
              Installation
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="configuration">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              Configuration
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
                />
              </svg>
              Colors
            </NuxtLink>
          </li>
          <li></li>
          <li></li>
        </ul>
        <p class="menu-title font-bold mt-3">Elements</p>
      </div>
      <div class="content">
        <slot name="content"></slot>
        <hr class="my-8" />
        <p style="text-align: right" class="text-base-content-light mb-4">
          Copyright &copy; 2022
          <a href="https://github.com/dejan7">Dejan Stosic</a>
        </p>
      </div>

      <div class="sidebar-right">
        <slot name="sidebar"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
    };
  },
  methods: {},
};
</script>

<style>
hr {
  border-top: 1px solid var(--slategray-300);
}

.hljs {
  border-radius: 10px;
}

code {
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  background: #282c34;
  color: #abb2bf;
  padding: 2px 6px;
  font-family: ui-monospace, SFMono-Regular, Consolas, Liberation Mono, Menlo,
    monospace;
  font-size: 1em;
}

.main-side-menu li {
  margin: 0.1rem 0;
}

.main-side-menu li a {
  display: block;
  padding: 0.25rem 0 0.25rem 0.5rem;
  border-radius: 5px;
}

.main-side-menu li a:hover {
  background: var(--base-50);
}

.main-side-menu li a svg {
  width: 20px;
  vertical-align: text-bottom;
}

.list-toc a {
  font-size: 0.85rem;
  color: var(--base-content);
}

.sidebar-right {
  display: none;
}

@media (max-width: 1023px) {
  .sidebar-left {
    position: absolute;
    left: 0;
    top: 0;
    width: 80vw;
    height: 100vh;
    background: #fff;
    padding: 1rem;
    transform: translateX(-100%);
    transition: transform 0.4s;
  }

  .sidebar-left-active {
    box-shadow: 10px 10px 5px -8px rgba(0, 0, 0, 0.39);
    transform: translateX(0) !important;
  }
}

@media (min-width: 1024px) {
  .responsive-menu {
    display: none !important;
  }

  .layout {
    display: grid;
    grid-template-columns: 200px auto 200px;
    align-items: start;
  }

  .sidebar-left {
    grid-column-start: 1;
    grid-column-end: 2;
    overflow-y: auto;
    position: sticky;
    top: 1rem;
  }

  .content {
    grid-column-start: 2;
    grid-column-end: 3;
    overflow-y: auto;
    padding: 0 1rem;
  }

  .sidebar-right {
    grid-column-start: 3;
    grid-column-end: 4;
    overflow-y: auto;
    position: sticky;
    top: 1rem;
    display: block;
  }
}
</style>
