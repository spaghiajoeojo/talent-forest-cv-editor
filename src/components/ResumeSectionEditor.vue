<script setup>
import { Sketch } from 'vue-color';
import BaseResumeSection from '../models/BaseResumeSection';

defineProps({
    modelValue: {
        type: BaseResumeSection,
        required: true,
    }
});
defineEmits(['update:modelValue']);


</script>

<template>
    <div>
        <pre>
            <!-- {{ modelValue }} -->
        </pre>
        <div v-for="(value, prop) in modelValue.aspect" :key="prop">
            <label>{{ prop }}</label>
            <input type="text" v-model="modelValue.aspect[prop]" />
        </div>
        <sketch v-model="modelValue.background" @input="$emit('update:modelValue', modelValue)">
        </sketch>
    </div>
</template>

<style scoped>
</style>

