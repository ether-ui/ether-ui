<template>
  <div class="h-screen">
    <div class="layout">
      <div class="sidebar">
        <h6 class="title">EtherUI Docs</h6>
        <p class="subtitle">Modern CSS UI Kit</p>
        <p class="menu-title">Pages</p>
        <ul>
          <li>
            <NuxtLink to="/">
              <IconDownload />
              Getting Started
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">
              <IconDownload />
              About
            </NuxtLink>
          </li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Learn</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <p class="menu-title">Pages</p>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Learn</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <p class="menu-title">Pages</p>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Learn</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div class="header p-4">deki</div>
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
// Import components as usual
import { IconDownload } from "@iconify-prerendered/vue-fa6-solid";
</script>

<style>
@import "../../dist/ether-ui.dev.css";

.layout {
  display: grid;
  grid-template-columns: 320px calc(100vw - 320px);
  grid-template-rows: 60px calc(100vh - 60px);
}

.sidebar {
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 3;
  overflow-y: auto;
}

.header {
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 1;
}

.content {
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  overflow-y: auto;
}
</style>
