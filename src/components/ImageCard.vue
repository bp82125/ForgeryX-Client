<template>
  <Card class="overflow-hidden flex flex-col items-center shadow-lg">
    <CardHeader class="grow">
      <CardTitle class="items-center">{{ image.method_name }}</CardTitle>
    </CardHeader>

    <CardContent class="p-0 flex flex-col items-center">
      <img
        :src="fullImagePath"
        :alt="'Image ' + image.method_name"
        class="w-full h-auto object-scale-down"
      />
      <!-- <p class="m-2 text-center">{{ image.method_name }}</p> -->
      <template v-if="image.score">
        <CardFooter class="flex justify-between w-full p-4">
          <p class="text-left">Độ tin cậy: {{ image.score }}</p>
        </CardFooter>
      </template>
    </CardContent>
  </Card>
</template>

<script setup>
import { computed } from "vue";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

const props = defineProps({
  image: {
    type: Object,
    required: true,
  },
});

const fullImagePath = computed(() => {
  return `${import.meta.env.VITE_BASE_URL}/${props.image.output_path}`;
});
</script>
