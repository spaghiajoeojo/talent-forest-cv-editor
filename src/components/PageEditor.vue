<script setup>
import { ref } from "@vue/composition-api";
import { GridLayout } from 'vue-grid-layout';
import ResumeSection from "./ResumeSection.vue";
import * as resume from '../assets/resume.json';
import ResumeSectionEditor from "./ResumeSectionEditor.vue";
import BaseResumeSection from "../models/BaseResumeSection";
import PhotoSection from "../models/PhotoSection";

const sections = ref([
  new PhotoSection({ x: 0, y: 0, w: 4, h: 8, i: "photo_profile" }, resume.basics.image),
  new BaseResumeSection({ x: 4, y: 0, w: 8, h: 5, i: "title_and_postion" }),
  new BaseResumeSection({ x: 4, y: 5, w: 8, h: 10, i: "work_experience" }),
  new BaseResumeSection({ x: 4, y: 15, w: 8, h: 10, i: "education" }),
  new BaseResumeSection({ x: 4, y: 25, w: 4, h: 7, i: "languages" }),
  new BaseResumeSection({ x: 8, y: 25, w: 4, h: 7, i: "other_certifications" }),
  new BaseResumeSection({ x: 0, y: 5, w: 4, h: 8, i: "contacts" }),
  new BaseResumeSection({ x: 0, y: 5, w: 4, h: 16, i: "skills" }),
]);

const selectedSection = ref(sections[0]);

function selectSection(item) {
  selectedSection.value = item;
  console.log(selectedSection);
}
</script>

<template>
  <div class="container">
    <ResumeSectionEditor v-if="selectedSection" :model-value="selectedSection"/>
    <div class="page" size="A4">
      <grid-layout
        :layout="sections"
        :col-num="12"
        :row-height="35"
        :max-rows="32"
        :is-draggable="true"
        :is-resizable="true"
        :is-mirrored="false"
        :vertical-compact="true"
        :margin="[0, 0]"
        :use-css-transforms="true"
      >
        <resume-section
          :class="{red: item === selectedSection}"
          @selected="selectSection(item)"
          v-for="item in sections"
          :key="item.i"
          :section="item"
          :resizable="item === selectedSection"
          :draggable="item === selectedSection"
        ></resume-section>
      </grid-layout>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
}
.red {
  /* background: red; */
  border: 2px solid red;
}
.page {
  background: white;
  display: block;
  margin: 0 auto;
  margin-bottom: 0.5cm;
  box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
}
.page[size="A4"] {
  width: 21cm;
  height: 29.7cm;
}
.page[size="A4"][layout="landscape"] {
  width: 29.7cm;
  height: 21cm;
}
.page[size="A3"] {
  width: 29.7cm;
  height: 42cm;
}
.page[size="A3"][layout="landscape"] {
  width: 42cm;
  height: 29.7cm;
}
.page[size="A5"] {
  width: 14.8cm;
  height: 21cm;
}
.page[size="A5"][layout="landscape"] {
  width: 21cm;
  height: 14.8cm;
}
@media print {
  body,
  .page {
    margin: 0;
    box-shadow: 0;
  }
}
</style>

