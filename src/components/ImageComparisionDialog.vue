<template>
  <Dialog :open="comparison.isOpen" @update:open="handleOpenChange">
    <DialogContent class="w-fit max-w-6xl">
      <DialogHeader>
        <DialogTitle>So sánh kết quả</DialogTitle>
      </DialogHeader>
      <ImgComparisonSlider
        hover="hover"
        class="focus:outline-none"
        style="--default-handle-width: clamp(40px, 10vw, 200px)"
      >
        <img
          slot="first"
          class="w-full max-h-[80vh] object-scale-down"
          :src="originalImage"
        />
        <img
          slot="second"
          class="w-full max-h-[80vh] object-scale-down"
          :src="comparedImage"
        />
        <svg
          slot="handle"
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          viewBox="-8 -3 16 6"
        >
          <path
            stroke="#fff"
            d="M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2"
            stroke-width="1"
            fill="#fff"
            vector-effect="non-scaling-stroke"
          ></path>
        </svg>
      </ImgComparisonSlider>
    </DialogContent>
  </Dialog>
</template>

<script setup>
import { computed } from "vue";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ImgComparisonSlider } from "@img-comparison-slider/vue";
import { useModalStore } from "@/stores/modalStore";
import { useImageStore } from "@/stores/imageStore";
import { storeToRefs } from "pinia";

const modalStore = useModalStore();
const imageStore = useImageStore();
const { comparison } = storeToRefs(modalStore);

const originalImage = computed(() => {
  return `${import.meta.env.VITE_BASE_URL}/${imageStore.original}`;
});

const comparedImage = computed(() => {
  return comparison.value.imageUrl;
});

const handleOpenChange = (open) => {
  if (!open) {
    modalStore.closeComparisonModal();
  }
};
</script>
