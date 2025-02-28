<template>
  <div class="w-full">
    <div class="flex flex-col items-center gap-8 p-8">
      <InputForm v-model:selectedFile="selectedFile" />
      <ImageExamples />
      <ImageGrid />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import InputForm from "@/components/InputForm.vue";
import ImageGrid from "@/components/ImageGrid.vue";
import ImageExamples from "@/components/ImageExamples.vue";

const selectedFile = ref(null);
</script>
