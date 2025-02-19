<template>
  <div class="container p-4 flex flex-col items-center justify-center">
    <h1 class="text-2xl font-bold mb-4">Image Upload</h1>

    <form @submit.prevent="handleSubmit" class="w-full max-w-lg">
      <div class="grid w-full items-center gap-1.5">
        <Label for="image">Image</Label>
        <Input
          id="image"
          type="file"
          @change="handleFileChange"
          accept="image/*"
        />
      </div>
      <Button type="submit" class="mt-4 w-full" :disabled="!selectedFile">
        Upload Image
      </Button>
    </form>

    <div v-if="selectedFile" class="mt-4">
      <p class="text-sm text-gray-500 mb-2">
        Selected file: {{ selectedFile.name }}
      </p>
      <div
        class="w-full max-w-md border border-gray-200 rounded-lg overflow-hidden"
      >
        <img
          :src="previewUrl"
          alt="Selected image preview"
          class="w-full h-auto"
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

const selectedFile = ref(null);
const previewUrl = ref(null);
const { toast } = useToast();

const handleFileChange = (event) => {
  const target = event.target;
  if (target.files) {
    selectedFile.value = target.files[0];
    previewUrl.value = URL.createObjectURL(selectedFile.value);
  }
};

const handleSubmit = () => {
  if (!selectedFile.value) return;

  toast({
    title: "Image selected",
    description: `You've selected: ${selectedFile.value.name}`,
  });

  selectedFile.value = null;
  previewUrl.value = null;
  const input = document.getElementById("image");
  if (input) input.value = "";
};

watch(previewUrl, (newUrl, oldUrl) => {
  if (oldUrl) {
    URL.revokeObjectURL(oldUrl);
  }
});
</script>
