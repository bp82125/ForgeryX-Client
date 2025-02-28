<template>
  <Card class="overflow-hidden flex flex-col items-center shadow-lg">
    <CardHeader class="grow">
      <CardTitle class="items-center">{{ image.name }}</CardTitle>
    </CardHeader>

    <CardContent class="p-0 flex flex-col items-center">
      <img
        :src="fullImagePath"
        :alt="'Image ' + image.name"
        class="w-full h-auto object-scale-down"
      />
      <CardFooter class="flex justify-between w-full px-4 py-2 grow">
        <div class="flex justify-between w-full items-center">
          <p v-if="image.result_type === 'score'" class="text-left">
            Độ tin cậy: {{ (image.output.score * 100).toFixed(4) }}%
          </p>
          <Button class="ml-auto" variant="ghost">
            <CircleHelp></CircleHelp>
          </Button>
        </div>
      </CardFooter>
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

import { Button } from "@/components/ui/button";
import { CircleHelp } from "lucide-vue-next";

const props = defineProps({
  image: {
    type: Object,
    required: true,
  },
});

const fullImagePath = computed(() => {
  return `${import.meta.env.VITE_BASE_URL}/${props.image.output.path}`;
});
</script>
