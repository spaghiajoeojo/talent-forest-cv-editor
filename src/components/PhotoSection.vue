<script setup>
import { computed } from "@vue/composition-api";
import BaseResumeSection from "../models/BaseResumeSection";
import PhotoSection from "../models/PhotoSection";

const props = defineProps({
  section: {
    type: PhotoSection,
    required: true,
  },
});
</script>

<template>
    <div class="img-container" :style="{ padding: section.aspect.padding }">
        <img :src="section.data" :style="{ borderRadius: section.aspect.borderRadius }" />
    </div>
</template>

<style scoped>
.img-container {
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
}
img {
  max-height: 100%;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;
}
</style>

