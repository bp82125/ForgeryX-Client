<template>
  <div class="flex flex-col h-full">
    <DialogHeader class="flex-shrink-0 py-2">
      <DialogTitle>Mesorch</DialogTitle>
      <DialogDescription>
        Orchestrating Multi-scale & Hybrid Architecture for Image Manipulation
        Localization
      </DialogDescription>
    </DialogHeader>

    <div class="space-y-4 text-sm py-2 overflow-y-auto flex-1">
      <div class="space-y-2">
        <div class="space-y-2">
          <img
            src="@/assets/descriptions/mesorch/1.png"
            alt="Mesorch Framework Overview"
            class="w-full rounded-lg shadow"
          />
          <p class="text-center text-xs text-gray-500">
            Hình 1: Tổng quan về kiến trúc của Mesorch
          </p>
        </div>
        <p>
          Mesorch (viết tắt của Mesoscopic-Orchestration) là một phương pháp mới
          nhằm phát hiện và xác định vị trí các vùng bị chỉnh sửa trong ảnh .
          Điểm nổi bật của phương pháp này là cách tiếp cận "mesoscopic" - một
          mức độ trung gian nằm giữa mức độ vĩ mô (macroscopic) và vi mô
          (microscopic). Thay vì chỉ tập trung vào các dấu vết chỉnh sửa ở mức
          pixel (vi mô) hoặc chỉ quan tâm đến ngữ cảnh tổng thể của hình ảnh (vĩ
          mô), Mesorch kết hợp cả hai điều này để có thể phát hiện các vùng
          chỉnh sửa một cách toàn diện hơn.
        </p>

        <p>
          Về mặt kỹ thuật, Mesorch sử dụng kiến trúc lai kết hợp giữa hai mạng
          học sâu: CNN (Convolutional Neural Network) và Transformer hoạt động
          song song với nhau. CNN đảm nhận việc phát hiện các dấu vết vi mô như
          nhiễu, góc cạnh và độ tương phản bất thường, trong khi Transformer
          phân tích ngữ cảnh tổng thể và mối quan hệ giữa các đối tượng trong
          ảnh. Phương pháp còn tích hợp kỹ thuật phân tích tần số DCT (Discrete
          Cosine Transform) để tách biệt và tăng cường các đặc trưng tần số cao
          và thấp, giúp mô hình nhận diện tốt hơn cả các chỉnh sửa tinh vi và rõ
          ràng.
        </p>
      </div>

      <div class="pt-2 border-t">
        <h3 class="font-medium mb-2 text-base">Tài liệu tham khảo:</h3>
        <ul class="space-y-2">
          <li>
            <a
              href="https://arxiv.org/pdf/2412.13753"
              target="_blank"
              class="text-blue-600 hover:underline"
            >
              Mesoscopic Insights: Orchestrating Multi-scale & Hybrid
              Architecture for Image Manipulation Localization
            </a>
          </li>
        </ul>
      </div>
    </div>

    <DialogFooter class="flex-shrink-0 mt-4">
      <Button variant="outline" @click="modalStore.closeDescriptionModal()"
        >Đóng</Button
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
