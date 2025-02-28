<template>
  <div class="container mx-auto px-4">
    <div
      v-if="
        deep_learning.standard.length ||
        Object.keys(deep_learning.multi_output).length
      "
      class="my-16"
    >
      <h1 class="text-3xl uppercase font-bold">
        Phương pháp Học Sâu (Deep Learning)
      </h1>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4"
      >
        <ImageCard
          v-for="image in deep_learning.standard"
          :key="image.output_path"
          :image="image"
        />
        <ImageCardCarousel
          v-for="(images, id) in deep_learning.multi_output"
          :key="id"
          :images="images"
        />
      </div>
    </div>

    <div class="">
      <h1
        v-if="
          img_procs.standard.length ||
          Object.keys(img_procs.multi_output).length
        "
        class="text-3xl uppercase font-bold"
      >
        Phương pháp Xử lý Ảnh
      </h1>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4"
      >
        <ImageCard
          v-for="image in img_procs.standard"
          :key="image.output_path"
          :image="image"
        />
        <ImageCardCarousel
          v-for="(images, id) in img_procs.multi_output"
          :key="id"
          :images="images"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useImageStore } from "@/stores/imageStore";
import ImageCard from "@/components/ImageCard.vue";
import ImageCardCarousel from "@/components/ImageCardCarousel.vue";

const imageStore = useImageStore();
const { deep_learning, img_procs } = storeToRefs(imageStore);
</script>
