<template>
  <div>
    <DialogHeader>
      <DialogTitle>Image Analysis Details</DialogTitle>
      <DialogDescription>
        Information about the analysis method used for this image
      </DialogDescription>
    </DialogHeader>

    <div class="py-4">
      <Alert>
        <AlertTitle>Method Information</AlertTitle>
        <AlertDescription>
          Detailed information for method ID: {{ methodId }}
        </AlertDescription>
      </Alert>

      <div class="mt-4 p-4 border rounded-lg">
        <p class="text-sm text-muted-foreground mb-2">
          This is a generic information display for any method that doesn't have
          a specific component.
        </p>
        <p>
          The analysis was performed using proprietary algorithms to determine
          image characteristics and provide confidence scores based on the
          detected patterns.
        </p>
      </div>
    </div>

    <DialogFooter>
      <Button variant="outline" @click="modalStore.closeDescriptionModal()"
        >Close</Button
      >
    </DialogFooter>
  </div>
</template>

<script setup>
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

import { useModalStore } from "@/stores/modalStore";

const modalStore = useModalStore();

defineProps({
  methodId: {
    type: String,
    required: true,
  },
});

defineEmits(["close"]);
</script>
