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
    <ImageMetadata></ImageMetadata>
  </div>
</template>

<script setup>
import { ref } from "vue";
import InputForm from "@/components/InputForm.vue";
import ImageGrid from "@/components/ImageGrid.vue";
import ImageExamples from "./ImageExamples.vue";
import ImageMetadata from "./ImageMetadata.vue";

const selectedFile = ref(null);

const handleFileSelected = (file) => {
  selectedFile.value = file;
};

const handleExampleSelected = (imageUrl) => {
  selectedFile.value = imageUrl;
};
</script>
