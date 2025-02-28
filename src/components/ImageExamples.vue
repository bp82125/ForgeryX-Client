<template>
  <div class="mt-8">
    <h2
      class="text-center scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
    >
      Ảnh mẫu
    </h2>
    <div class="grid grid-cols-4 gap-4 p-4 auto-rows-[200px] mt-8">
      <div
        v-for="image in images"
        :key="image"
        class="overflow-hidden rounded-lg border shadow cursor-pointer hover:scale-105 transition-transform duration-300"
        @click="selectExampleImage(image)"
      >
        <img
          :src="image"
          :alt="getFileName(image)"
          class="w-full h-full object-scale-down"
        />
        <p class="text-center mt-2 text-sm text-gray-700">
          {{ getFileName(image) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const emit = defineEmits(["imageSelected"]);
const images = ref([]);

const fetchImages = () => {
  const imageContext = import.meta.glob("/public/example/*.{jpg,jpeg}");
  images.value = Object.keys(imageContext).map((path) =>
    path.replace("/public", "")
  );
};

const getFileName = (path) => {
  return path.split("/").pop();
};

const selectExampleImage = (imageUrl) => {
  emit("imageSelected", imageUrl);
};

onMounted(fetchImages);
</script>
