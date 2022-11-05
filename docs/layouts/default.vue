<template>
  <div class="min-h-screen">
    <div class="flex min-h-screen">
      <div class="sidebar p-4 bg-slategray-50">
        <h6 class="text-slategray-900 font-bold">EtherUI</h6>
        <p class="text-slategray-500 mb-4">
          Modern CSS UI Kit
        </p>
        <p class="font-bold text-slategray-900">Pages</p>
        <ul class="list-none m-0 p-0">
          <li><a href="#" class="text-slategray-500">Home</a></li>
          <li><a href="#" class="text-slategray-500">About</a></li>
          <li><a href="#" class="text-slategray-500">Pricing</a></li>
          <li><a href="#" class="text-slategray-500">Learn</a></li>
          <li><a href="#" class="text-slategray-500">Contact</a></li>
        </ul>
      </div>
      <div class="grow p-4">
        <div class=""></div>
        <slot />
      </div>
    </div>
  </div>
</template>

<style>
@import "../../dist/ether-ui.css";

body,
html,
#__nuxt {
  min-height: 100vh;
}

.sidebar {
  width: 320px;
}
</style>
