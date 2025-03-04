<template>
  <div v-if="Object.keys(metadata).length" class="container mx-auto px-4 my-16">
    <h1 class="text-3xl uppercase font-bold mb-4">EXIF Metadata</h1>

    <Card class="w-full shadow-sm">
      <CardContent>
        <div class="max-h-96 overflow-y-auto pr-2">
          <div class="space-y-2">
            <div
              v-for="(value, key) in metadata"
              :key="key"
              class="grid grid-cols-2 gap-4 py-2 border-b border-border"
            >
              <div class="text-sm font-medium text-muted-foreground">
                {{ key }}
              </div>
              <div class="text-sm break-words">{{ value }}</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useImageStore } from "@/stores/imageStore";
import { Card, CardContent } from "@/components/ui/card";

const imageStore = useImageStore();
const metadata = computed(() => imageStore.metadata);
</script>
