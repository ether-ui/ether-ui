<template>
  <e-page>
    <template v-slot:sidebar>
      <p class="text-base-content-light">Table of Contents</p>
      <ul class="list-none m-0 p-0 list-toc">
        <li>
          <a href="#standard">Standard Input</a>
        </li>
        <li>
          <a href="#themed">Themed Input</a>
        </li>
        <li>
          <a href="#color">Colored Input</a>
        </li>
        <li>
          <a href="#icon">Icon Input</a>
        </li>
      </ul>
    </template>
    <template v-slot:content>
      <h5 class="mt-8 mb-2 font-bold" id="standard">Standard Input</h5>
      <p class="mb-3">
        Input with no color modifiers will not have any hover color changes.
      </p>
      <div>
        <code-preview>
          <template v-slot:preview>
            <div class="form-element">
              <label>Label</label>
              <input placeholder="Type here..." />
              <p>Helper message</p>
            </div>
          </template>
          <template v-slot:code-html>
            <pre><code v-highlight class="HTML">&lt;div class="form-element">
  &lt;label>Label&lt;/label>
  &lt;input placeholder="Type here..." />
  &lt;p>Helper message&lt;/p>
&lt;/div></code></pre>
          </template>
        </code-preview>
      </div>
      <h5 class="mt-8 mb-2 font-bold" id="themed">Themed Input</h5>
      <p class="mb-3">
        You can assign the <code>.primary</code>, <code>.secondary</code> or
        <code>.tertiary</code> class so that the input adopts the theme color
        (on hover).
      </p>
      <div>
        <code-preview :variants="['Primary', 'Secondary', 'Tertiary']">
          <template v-slot:preview-Primary>
            <div class="form-element primary">
              <label>Label</label>
              <input placeholder="Type here..." />
              <p>Helper message</p>
            </div>
          </template>
          <template v-slot:code-html-Primary>
            <pre><code v-highlight class="HTML">&lt;div class="form-element tertiary">
  &lt;label>Label&lt;/label>
  &lt;input placeholder="Type here..." />
  &lt;p>Helper message&lt;/p>
&lt;/div></code></pre>
          </template>
          <template v-slot:preview-Secondary>
            <div class="form-element secondary">
              <label>Label</label>
              <input placeholder="Type here..." />
              <p>Helper message</p>
            </div>
          </template>
          <template v-slot:code-html-Secondary>
            <pre><code v-highlight class="HTML">&lt;div class="form-element secondary">
  &lt;label>Label&lt;/label>
  &lt;input placeholder="Type here..." />
  &lt;p>Helper message&lt;/p>
&lt;/div></code></pre>
          </template>
          <template v-slot:preview-Tertiary>
            <div class="form-element tertiary">
              <label>Label</label>
              <input placeholder="Type here..." />
              <p>Helper message</p>
            </div>
          </template>
          <template v-slot:code-html-Tertiary>
            <pre><code v-highlight class="HTML">&lt;div class="form-element tertiary">
  &lt;label>Label&lt;/label>
  &lt;input placeholder="Type here..." />
  &lt;p>Helper message&lt;/p>
&lt;/div></code></pre>
          </template>
        </code-preview>
      </div>
      <h5 class="mt-8 mb-2 font-bold" id="color">Color Input</h5>
      <p class="mb-3">
        You can also use any of the theme's
        <NuxtLink to="/colors">color classes</NuxtLink>
        to change the color of the input
      </p>
      <div>
        <code-preview>
          <template v-slot:preview>
            <div class="form-element tertiary">
              <label class="text-indigo-400">Label</label>
              <input placeholder="Type here..." class="border-indigo-400" />
              <p class="text-indigo-300">Helper message</p>
            </div>
          </template>
          <template v-slot:code-html>
            <pre><code v-highlight class="HTML">&lt;div class="form-element tertiary">
  &lt;label class="text-indigo-400">Label&lt;/label>
  &lt;input placeholder="Type here..." class="border-indigo-400" />
  &lt;p class="border-indigo-300">Helper message&lt;/p>
&lt;/div></code></pre>
          </template>
        </code-preview>
      </div>
      <h5 class="mt-8 mb-4 font-bold" id="icon">Icon Inputs</h5>
      <div>
        <code-preview>
          <template v-slot:preview>
            <div class="form-element primary">
              <label>Label</label>
              <div class="has-icons">
                <svg
                  class="prepend-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <input placeholder="Enter here..." />
                <svg
                  class="append-icon cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </template>
          <template v-slot:code-html>
            <pre><code v-highlight class="HTML">&lt;div class="form-element primary">
&lt;label>Label&lt;/label>
&lt;div class="has-icons">
  &lt;svg
      class="prepend-icon"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
  >
    &lt;path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
    />
  &lt;/svg>
  &lt;input placeholder="Enter here..." />
  &lt;svg
      class="append-icon cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
  >
    &lt;path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  &lt;/svg>
&lt;/div></code></pre>
          </template>
        </code-preview>
      </div>
    </template>
  </e-page>
</template>

<script>
import EPage from "~/components/EPage";
import CodePreview from "@/components/CodePreview";
export default {
  components: { CodePreview, EPage },
  head() {
    return {
      title: "Form: Inputs - EtherUI",
    };
  },
};
</script>
