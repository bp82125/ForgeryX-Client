<template>
  <div class="flex flex-col min-h-screen p-4 items-center justify-center">
    <InputForm
      :selectedFile="selectedFile"
      @update:selectedFile="handleFileSelected"
    />
    <ImageGrid />
    <ImageExamples
      v-if="!selectedFile"
      @imageSelected="handleExampleSelected"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import InputForm from "@/components/InputForm.vue";
import ImageGrid from "@/components/ImageGrid.vue";
import ImageExamples from "./ImageExamples.vue";

const selectedFile = ref(null);

const handleFileSelected = (file) => {
  selectedFile.value = file;
};

const handleExampleSelected = (imageUrl) => {
  selectedFile.value = imageUrl;
};
</script>
