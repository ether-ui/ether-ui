<template>
  <e-page>
    <template v-slot:sidebar>
      <p class="text-base-content-light">Table of Contents</p>
      <ul class="list-none m-0 p-0 list-toc">
        <li>
          <a href="#standard">Standard Checkbox</a>
        </li>
        <li>
          <a href="#themed">Themed Checkbox</a>
        </li>
        <li>
          <a href="#color">Color Checkbox</a>
        </li>
        <li>
          <a href="#custom">Custom Checkbox</a>
        </li>
      </ul>
    </template>
    <template v-slot:content>
      <h2 class="font-bold mb-2">Form: Checkbox</h2>
      <h5 class="mt-4 mb-2 font-bold" id="standard">Standard Checkbox</h5>
      <p class="mb-3">
        Checkbox with no color modifiers will assume the neutral color.
      </p>
      <div>
        <code-preview>
          <template v-slot:preview>
            <div class="flex justify-center">
              <label class="form-element-checkbox">
                <input type="checkbox" />
                Free Vibe Check Here
              </label>
            </div>
          </template>
          <template v-slot:code-html>
            <pre><code v-highlight class="HTML">&lt;label class="form-element-checkbox primary">
  &lt;input type="checkbox" checked/>
  Primary Vibe Check Here
&lt;/label></code></pre>
          </template>
        </code-preview>
      </div>
      <h5 class="mt-8 mb-2 font-bold" id="themed">Themed Checkbox</h5>
      <p class="mb-3">
        You can assign the <code>.primary</code>, <code>.secondary</code> or
        <code>.tertiary</code> class so that the checkbox adopts the theme
        color.
      </p>
      <div>
        <code-preview>
          <template v-slot:preview>
            <div class="flex justify-center">
              <label class="form-element-checkbox primary">
                <input type="checkbox" checked />
                Primary Vibe Check Here
              </label>
            </div>
            <div class="flex justify-center my-3">
              <label class="form-element-checkbox secondary">
                <input type="checkbox" checked />
                Secondary Vibe Check Here
              </label>
            </div>
            <div class="flex justify-center">
              <label class="form-element-checkbox tertiary">
                <input type="checkbox" checked />
                Tertiary Vibe Check Here
              </label>
            </div>
          </template>
          <template v-slot:code-html>
            <pre><code v-highlight class="HTML">&lt;label class="form-element-checkbox">
  &lt;input type="checkbox" checked/>
  Primary Vibe Check Here
&lt;/label>
&lt;label class="form-element-checkbox secondary">
  &lt;input type="checkbox" checked/>
  Secondary Vibe Check Here
&lt;/label>
&lt;label class="form-element-checkbox tertiary">
  &lt;input type="checkbox" checked/>
  Tertiary Vibe Check Here
&lt;/label></code></pre>
          </template>
        </code-preview>
      </div>
      <h5 class="mt-8 mb-2 font-bold" id="color">Color Checkbox</h5>
      <p class="mb-3">
        You can also easily create a reusable CSS class if you want a custom
        colored checkbox.
      </p>
      <div>
        <code-preview>
          <template v-slot:preview>
            <div class="flex justify-center">
              <label class="form-element-checkbox mycheckbox">
                <input type="checkbox" checked />
                Custom Vibe Check Here
              </label>
            </div>
          </template>
          <template v-slot:code-css>
            <pre><code v-highlight class="CSS">.mycheckbox input[type="checkbox"]:checked {
  background-color: var(--carnation-500);
}

.mycheckbox input[type="checkbox"]:checked {
  border-color: var(--carnation-700);
}</code></pre>
          </template>
          <template v-slot:code-html>
            <pre><code v-highlight class="HTML">&lt;div class="form-element mycheckbox">
  &lt;label class="text-indigo-400">Label&lt;/label>
  &lt;textarea placeholder="Type here..." class="border-indigo-400" />
  &lt;p class="border-indigo-300">Helper message&lt;/p>
&lt;/div></code></pre>
          </template>
        </code-preview>
      </div>
      <h5 class="mt-8 mb-2 font-bold" id="custom">Custom Checkbox</h5>
      <p class="mb-3">
        You can override the default check icon with a bit of CSS. Just grab an
        SVG and write your CSS class.
      </p>
      <div>
        <code-preview>
          <template v-slot:preview>
            <div class="flex justify-center">
              <label class="form-element-checkbox mycheckboxicon">
                <input type="checkbox" checked />
                Custom Vibe Check Here
              </label>
            </div>
          </template>
          <template v-slot:code-css>
            <pre><code v-highlight class="CSS">.mycheckbox input[type="checkbox"]::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath fill-rule='evenodd' d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z' clip-rule='evenodd' /%3E%3C/svg%3E");
}</code></pre>
          </template>
          <template v-slot:code-html>
            <pre><code v-highlight class="HTML">&lt;div class="form-element mycheckbox">
  &lt;label class="text-indigo-400">Label&lt;/label>
  &lt;textarea placeholder="Type here..." class="border-indigo-400" />
  &lt;p class="border-indigo-300">Helper message&lt;/p>
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
      title: "Form: Checkbox - EtherUI",
    };
  },
};
</script>

<style>
.mycheckbox input[type="checkbox"]:checked {
  background-color: var(--carnation-500);
}

.mycheckbox input[type="checkbox"]:checked {
  border-color: var(--carnation-700);
}

.mycheckboxicon input[type="checkbox"]::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath fill-rule='evenodd' d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z' clip-rule='evenodd' /%3E%3C/svg%3E");
}
</style>
