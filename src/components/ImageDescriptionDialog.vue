<template>
  <Dialog :open="description.isOpen" @update:open="handleOpenChange">
    <DialogContent class="max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
      <component
        :is="currentComponent"
        v-if="currentComponent"
        :method-id="description.methodId"
        @close="modalStore.closeComparisonModal()"
        class="overflow-y-auto flex-1"
      />
      <div v-else class="p-6">
        <DialogHeader>
          <DialogTitle>Loading...</DialogTitle>
        </DialogHeader>
        <div class="flex items-center justify-center py-8">
          <Loader2 class="h-8 w-8 animate-spin" />
        </div>
      </div>
    </DialogContent>
  </Dialog>
</template>

<script setup>
import { computed, defineAsyncComponent } from "vue";
import { Loader2 } from "lucide-vue-next";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModalStore } from "@/stores/modalStore";
import { storeToRefs } from "pinia";

const modalStore = useModalStore();
const { description } = storeToRefs(modalStore);

const methodComponents = {
  trufor: defineAsyncComponent(() =>
    import("@/components/descriptions/TruForDescriptions.vue")
  ),
  exif_as_language: defineAsyncComponent(() =>
    import("@/components/descriptions/ExifAsLanguageDescriptions.vue")
  ),
  psccnet: defineAsyncComponent(() =>
    import("@/components/descriptions/PSCCNetDescriptions.vue")
  ),
  catnet: defineAsyncComponent(() =>
    import("@/components/descriptions/CATNetDescriptions.vue")
  ),
  focal: defineAsyncComponent(() =>
    import("@/components/descriptions/FocalDescriptions.vue")
  ),
  wavelet: defineAsyncComponent(() =>
    import("@/components/descriptions/WaveletDescriptions.vue")
  ),
  median: defineAsyncComponent(() =>
    import("@/components/descriptions/MedianDescriptions.vue")
  ),
  ela: defineAsyncComponent(() =>
    import("@/components/descriptions/ELADescriptions.vue")
  ),
  blocking: defineAsyncComponent(() =>
    import("@/components/descriptions/BlockingDescriptions.vue")
  ),
  splicebuster: defineAsyncComponent(() =>
    import("@/components/descriptions/SpliceBusterDescriptions.vue")
  ),
  dq: defineAsyncComponent(() =>
    import("@/components/descriptions/DQDescriptions.vue")
  ),
  ghost: defineAsyncComponent(() =>
    import("@/components/descriptions/GhostDescriptions.vue")
  ),
  mesorch: defineAsyncComponent(() =>
    import("@/components/descriptions/MesorchDescriptions.vue")
  ),
  default: defineAsyncComponent(() =>
    import("@/components/descriptions/DefaultDescriptions.vue")
  ),
};

const currentComponent = computed(() => {
  if (!description.value.methodId) return null;
  return (
    methodComponents[description.value.methodId] || methodComponents.default
  );
});

const handleOpenChange = (open) => {
  if (!open) {
    modalStore.closeDescriptionModal();
  }
};
</script>
