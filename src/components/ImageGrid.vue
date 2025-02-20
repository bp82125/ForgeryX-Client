<template>
  <div class="container mx-auto px-4">
    <div class="mb-16">
      <h1 v-if="deep_learning.length" class="text-3xl uppercase font-bold">
        Deep Learning
      </h1>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4"
      >
        <ImageCard
          v-for="image in deep_learning"
          :key="image.output_path"
          :image="image"
        />
      </div>
    </div>
    <div>
      <h1 v-if="img_procs.length" class="text-3xl uppercase font-bold">
        Xử lý ảnh
      </h1>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4"
      >
        <ImageCard
          v-for="image in img_procs"
          :key="image.output_path"
          :image="image"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useImageStore } from "@/stores/imageStore";
import ImageCard from "@/components/ImageCard.vue";

const imageStore = useImageStore();
const { deep_learning, img_procs } = storeToRefs(imageStore);
</script>
