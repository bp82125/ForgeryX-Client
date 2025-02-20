<template>
  <div class="w-full max-w-lg">
    <h1 class="text-4xl font-bold mb-4">ForgeryX</h1>

    <form @submit.prevent="handleSubmit" class="w-full">
      <div class="grid w-full items-center gap-1.5">
        <Label for="image" class="mb-2">Chọn ảnh</Label>
        <Input
          id="image"
          type="file"
          @change="handleFileChange"
          accept="image/*"
        />
      </div>
      <Button
        type="submit"
        class="mt-4 w-full"
        :disabled="!selectedFile || isUploading"
      >
        <template v-if="isUploading">
          <LoaderCircle class="animate-spin h-5 w-5 mx-auto" />
        </template>
        <template v-else> Tải ảnh lên </template>
      </Button>
    </form>

    <div v-if="selectedFile" class="mt-4">
      <p class="text-sm text-gray-500 mb-2">
        Ảnh đã chọn: {{ selectedFile.name }} ({{ imageResolution.width }} x
        {{ imageResolution.height }}), {{ fileSize }} KB
      </p>
      <div class="w-full rounded-lg overflow-hidden">
        <img
          :src="previewUrl"
          alt="Selected image preview"
          class="w-full h-64 object-contain"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/toast";
import { sseHandler } from "@/utils/sseHandler";
import { LoaderCircle } from "lucide-vue-next";

const selectedFile = ref(null);
const previewUrl = ref(null);
const fileSize = ref(null);
const imageResolution = ref({ width: 0, height: 0 });
const isUploading = ref(false);
const { toast } = useToast();

const handleFileChange = (event) => {
  const target = event.target;
  if (target.files) {
    selectedFile.value = target.files[0];
    previewUrl.value = URL.createObjectURL(selectedFile.value);
    fileSize.value = (selectedFile.value.size / 1024).toFixed(2);

    const img = new Image();
    img.onload = () => {
      imageResolution.value = { width: img.width, height: img.height };
    };
    img.src = previewUrl.value;
  }
};

const handleSubmit = async () => {
  if (!selectedFile.value) return;
  isUploading.value = true;
  await sseHandler(selectedFile.value);
  isUploading.value = false;
};

watch(previewUrl, (newUrl, oldUrl) => {
  if (oldUrl) {
    URL.revokeObjectURL(oldUrl);
  }
});
</script>
