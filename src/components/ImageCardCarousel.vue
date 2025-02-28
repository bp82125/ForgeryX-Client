<template>
  <Card class="overflow-hidden flex flex-col items-center shadow-lg">
    <CardHeader class="grow">
      <CardTitle class="items-center">{{ currentImage.name }}</CardTitle>
    </CardHeader>

    <CardContent class="p-0 flex flex-col items-center w-full">
      <div class="relative w-full">
        <img
          :src="currentImagePath"
          :alt="'Image ' + currentImage.name"
          class="w-full h-auto object-scale-down transition-opacity duration-300"
          :class="{ 'opacity-0': isTransitioning }"
          @load="handleImageLoad"
        />
      </div>

      <CardFooter class="flex flex-col w-full px-4 py-2 space-y-4">
        <div class="flex justify-between w-full items-center">
          <p v-if="currentImage.result_type === 'score'" class="text-left">
            Độ tin cậy: {{ (currentImage.output.score * 100).toFixed(4) }}%
          </p>
          <Slider
            :model-value="[currentIndex]"
            :max="totalImages - 1"
            :step="1"
            @update:model-value="handleSliderChange"
            class="w-full mr-4"
          />
          <Button variant="ghost" size="icon" class="ml-auto">
            <CircleHelp />
          </Button>
        </div>
      </CardFooter>
    </CardContent>
  </Card>
</template>

<script setup>
import { ref, computed } from "vue";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { CircleHelp } from "lucide-vue-next";

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});

const currentIndex = ref(0);
const isTransitioning = ref(false);

const totalImages = computed(() => props.images.length);
const currentImage = computed(() => props.images[currentIndex.value] || {});
const currentImagePath = computed(() => {
  return `${import.meta.env.VITE_BASE_URL}/${currentImage.value.output.path}`;
});

const handleSliderChange = (value) => {
  isTransitioning.value = true;
  currentIndex.value = value;
};

const handleImageLoad = () => {
  isTransitioning.value = false;
};
</script>

<style scoped>
.transition-opacity {
  transition: opacity 0.3s ease-in-out;
}
</style>
