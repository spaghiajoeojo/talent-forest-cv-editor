<script setup>
import { computed, ref } from "@vue/composition-api";
import { GridItem } from "vue-grid-layout";
import BaseResumeSection from "../models/BaseResumeSection";
import PhotoSection from "../models/PhotoSection";
import PhotoSectionComponent from "./PhotoSection.vue";

const props = defineProps({
  section: {
    type: BaseResumeSection,
    required: true,
  },
  draggable: {
    type: Boolean,
    default: false,
  },
  resizable: {
    type: Boolean,
    default: false,
  },
});
defineEmits(["selected"]);
const backgroundColor = computed(() => {
  try {
    const { r, g, b, a } = props.section.background.rgba;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  } catch {
    return "rgba(255,255,255,1)";
  }
});
const sectionComponent = ref(null);

if (props.section instanceof PhotoSection) {
  sectionComponent.value = PhotoSectionComponent;
}
</script>

<template>
  <grid-item
    :x="section.x"
    :y="section.y"
    :w="section.w"
    :h="section.h"
    :i="section.i"
    :is-draggable="draggable"
    :is-resizable="resizable"
    :style="{ background: backgroundColor }"
  >
    <template v-if="sectionComponent">
      <component :is="sectionComponent" :section="section"></component>
    </template>
    <button class="edit" @click="$emit('selected')">Edit</button>
  </grid-item>
</template>

<style scoped>
button.edit {
  position: absolute;
  top: 0;
  left: 0;
}
</style>

