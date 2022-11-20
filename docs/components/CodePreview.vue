<template>
  <div class="code-preview">
    <div v-if="variants.length" class="variants-bar">
      <span style="font-size: 0.75rem">Variants: </span>
      <button
        v-for="variant in variants"
        class="btn small mx-2"
        :class="{
          primary: activeVariant === variant,
          'primary-inverted': activeVariant !== variant,
        }"
        @click="activeVariant = variant"
      >
        {{ variant }}
      </button>
    </div>
    <div class="code-preview-window">
      <slot v-if="!variants.length" name="preview"></slot>
      <div v-show="activeVariant === variant" v-for="variant in variants">
        <slot :name="'preview-' + variant"></slot>
      </div>
    </div>
    <div class="code-bar">
      <span class="font-bold" style="font-size: 0.75rem">HTML</span>
    </div>
    <slot v-if="!variants.length" name="code-html"></slot>
    <div v-else>
      <div v-for="variant in variants" v-show="activeVariant === variant">
        <slot :name="'code-html-' + variant"></slot>
      </div>
    </div>
    <slot name="code-js"></slot>
  </div>
</template>

<script>
export default {
  name: "CodePreview",
  props: {
    variants: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      activeVariant: this.variants.length ? this.variants[0] : null,
    };
  },
};
</script>

<style>
.code-preview {
  border: 1px solid var(--slategray-100);
  border-radius: 10px;
}

.code-preview pre {
  margin: 0;
  padding: 0;
}

.code-preview .hljs {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  border: 0;
}

.code-preview-window {
  padding: 1rem;
}

.variants-bar {
  border-bottom: 1px solid var(--slategray-100);
  padding: 0.5rem 1rem;
}

.code-bar {
  padding: 0.5rem 1rem;
  border-top: 1px solid var(--slategray-100);
  border-bottom: 1px solid var(--slategray-100);
}
</style>
