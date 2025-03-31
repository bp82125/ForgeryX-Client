<template>
  <div class="flex flex-col min-h-screen p-4 items-center justify-center">
    <InputForm
      :selectedFile="selectedFile"
      @update:selectedFile="handleFileSelected"
    />
    <ImageGrid></ImageGrid>
    <ImageExamples
      v-if="!selectedFile"
      @imageSelected="handleExampleSelected"
    />
    <ImageMetadata></ImageMetadata>
    <ImageDescriptionDialog></ImageDescriptionDialog>
    <ImageComparisionDialog></ImageComparisionDialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import InputForm from "@/components/InputForm.vue";
import ImageGrid from "@/components/ImageGrid.vue";
import ImageExamples from "./ImageExamples.vue";
import ImageMetadata from "./ImageMetadata.vue";
import ImageDescriptionDialog from "./ImageDescriptionDialog.vue";
import ImageComparisionDialog from "./ImageComparisionDialog.vue";

const selectedFile = ref(null);

const handleFileSelected = (file) => {
  selectedFile.value = file;
};

const handleExampleSelected = (imageUrl) => {
  selectedFile.value = imageUrl;
};
</script>
