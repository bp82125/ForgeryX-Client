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

    <div v-if="previewUrl" class="mt-4 relative">
      <p class="text-sm text-gray-500 mb-2">
        Ảnh đã chọn: {{ fileName }}, {{ fileSize }} KB,
        {{ imageResolution.width }} x {{ imageResolution.height }}
      </p>
      <div class="w-full rounded-lg overflow-hidden relative">
        <Button
          variant="primary"
          size="icon"
          class="absolute top-2 right-2 z-10 rounded-full w-8 h-8 opacity-90 bg-black hover:opacity-80"
          @click="discardImage"
        >
          <X class="h-4 w-4 text-white" />
        </Button>

        <VueCompareImage
          v-if="isUrl"
          :leftImage="previewUrl"
          :rightImage="convertedImageUrl"
          class="w-full object-contain"
        />
        <img
          v-else
          :src="previewUrl"
          alt="Selected image preview"
          class="w-full object-contain"
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
import { upload_image, get_example } from "@/utils/sseHandler";
import { LoaderCircle, X } from "lucide-vue-next";
import { VueCompareImage } from "vue3-compare-image";
import { useImageStore } from "@/stores/imageStore";

const imageStore = useImageStore();

const props = defineProps(["selectedFile"]);
const emit = defineEmits(["update:selectedFile"]);

const previewUrl = ref(null);
const convertedImageUrl = ref(null);
const fileSize = ref(null);
const fileName = ref(null);
const imageResolution = ref({ width: 0, height: 0 });
const isUploading = ref(false);
const isUrl = ref(false);

const getImageResolution = (url) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      resolve({ width: img.width, height: img.height });
    };
    img.src = url;
  });
};

watch(
  () => props.selectedFile,
  async (newFile) => {
    if (!newFile) {
      previewUrl.value = null;
      convertedImageUrl.value = null;
      fileSize.value = null;
      fileName.value = null;
      imageResolution.value = { width: 0, height: 0 };
      isUrl.value = false;
      return;
    }

    if (typeof newFile === "string") {
      isUrl.value = true;
      previewUrl.value = newFile;
      convertedImageUrl.value = newFile.replace(/\.jpg$/, ".png");
      fileName.value = newFile.split("/").pop();

      try {
        const response = await fetch(newFile, { method: "HEAD" });
        const contentLength = response.headers.get("content-length");
        fileSize.value = contentLength
          ? (contentLength / 1024).toFixed(2)
          : "N/A";
      } catch (error) {
        console.error("Error fetching image size:", error);
        fileSize.value = "N/A";
      }

      imageResolution.value = await getImageResolution(previewUrl.value);
      return;
    }

    isUrl.value = false;
    previewUrl.value = URL.createObjectURL(newFile);
    fileSize.value = (newFile.size / 1024).toFixed(2);
    fileName.value = newFile.name;
    imageResolution.value = await getImageResolution(previewUrl.value);
  },
  { immediate: true }
);

const handleFileChange = (event) => {
  const target = event.target;
  if (target.files) {
    const file = target.files[0];
    emit("update:selectedFile", file);
  }
};

const discardImage = () => {
  previewUrl.value = null;
  convertedImageUrl.value = null;
  fileSize.value = null;
  fileName.value = null;
  imageResolution.value = { width: 0, height: 0 };
  isUrl.value = false;
  imageStore.clearStore();
  emit("update:selectedFile", null);
};

const handleSubmit = async () => {
  if (!props.selectedFile) return;

  isUploading.value = true;

  if (isUrl.value) {
    const match = props.selectedFile.match(/\/([\da-fA-F-]+)\.jpg$/);
    const uuid = match ? match[1] : null;

    await get_example(uuid);
  } else {
    await upload_image(props.selectedFile);
  }

  isUploading.value = false;
};
</script>
