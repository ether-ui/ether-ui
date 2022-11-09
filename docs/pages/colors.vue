<template>
  <e-page>
    <template v-slot:sidebar> </template>
    <template v-slot:content> color </template>
  </e-page>
</template>
<script>
import EPage from "~/components/EPage";
export default {
  components: { EPage },
};
</script>
