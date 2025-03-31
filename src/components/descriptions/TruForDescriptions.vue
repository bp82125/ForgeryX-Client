<template>
  <div class="flex flex-col h-full">
    <DialogHeader class="flex-shrink-0 py-2">
      <DialogTitle>TruFor</DialogTitle>
      <DialogDescription>
        Tận dụng đầy đủ các manh mối để phát hiện và khoanh vùng ảnh bị chỉnh
        sửa một cách đáng tin cậy
      </DialogDescription>
    </DialogHeader>

    <div class="space-y-4 text-sm py-2 overflow-y-auto flex-1">
      <div class="space-y-2">
        <div class="space-y-2">
          <img
            src="@/assets/descriptions/trufor/1.png"
            alt="TruFor Framework Overview"
            class="w-full rounded-lg shadow"
          />
          <p class="text-center text-xs text-gray-500">
            Hình 1: Tổng quan về kiến trúc của TruFor
          </p>
        </div>
        <p>
          TruFor là một phương pháp giúp phát hiện ảnh đã qua chỉnh sửa bằng
          cách phân tích các dấu vết nhiễu tự nhiên bên trong ảnh. Khi một bức
          ảnh được đưa vào, hệ thống sẽ trích xuất các đặc trưng nhiễu để tìm ra
          dấu hiệu của việc bị chỉnh sửa. Từ đó, nó tạo ra một bản đồ bất thường
          (anormaly map) để hiển thị những khu vực có khả năng bị chỉnh sửa.
        </p>

        <p>
          Ngoài ra, TruFor còn tạo ra một bản đồ độ tin cậy (confidence map) để
          đánh giá mức độ chính xác của việc dự báo. Từ đó, phương pháp này dễ
          dàng tính toán điểm toàn vẹn (integrity score) của ảnh, giúp người
          dùng dễ dàng xác định mức độ chính xác của kết quả đầu ra.
        </p>
        <div class="space-y-2">
          <img
            src="@/assets/descriptions/trufor/2.png"
            alt="TruFor Framework Overview"
            class="w-full rounded-lg shadow"
          />
          <p class="text-center text-xs text-gray-500">
            Hình 2: Tầm quan trọng của bản đồ tin cậy (confidence map)
          </p>
        </div>
      </div>

      <div class="pt-2 border-t">
        <h3 class="font-medium mb-2 text-base">Tài liệu tham khảo:</h3>
        <ul class="space-y-2">
          <li>
            <a
              href="https://arxiv.org/pdf/2212.10957"
              target="_blank"
              class="text-blue-600 hover:underline"
            >
              TruFor: Leveraging all-round clues for trustworthy image forgery
              detection and localization
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
