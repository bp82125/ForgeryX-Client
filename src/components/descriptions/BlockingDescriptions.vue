<template>
  <div class="flex flex-col h-full">
    <DialogHeader class="flex-shrink-0 py-2">
      <DialogTitle>JPEG blocking artifact inconsistencies (BLOCK)</DialogTitle>
      <DialogDescription>
        Phát hiện ảnh JPEG bị chỉnh sửa một cách thụ động qua việc phân tích các
        khối trong lưới nhiễu (BAG - Block Artifact Grid)
      </DialogDescription>
    </DialogHeader>

    <div class="space-y-4 text-sm py-2 overflow-y-auto flex-1">
      <div class="space-y-2">
        <div class="space-y-2">
          <img
            src="@/assets/descriptions/blocking/1.png"
            alt="Example of BAG grid on original and tampered images"
            class="w-full rounded-lg shadow"
          />
          <p class="text-center text-xs text-gray-500">
            Hình 1: Ví dụ về BAG trên ảnh đã chỉnh sửa
          </p>
        </div>
        <p>
          Phương pháp này dựa trên việc trích xuất các Block Artifact Grid - BAG
          để phát hiện các vùng bị chỉnh sửa. BAG là một lưới được tạo ra do quá
          trình nén JPEG, thể hiện qua các ranh giới mờ giữa các khối 8×8 pixel
          liền kề. Hiệu ứng này tuy không mong muốn nhưng lại trở thành dấu hiệu
          quan trọng để phát hiện ảnh bị chỉnh sửa. Do JPEG nén ảnh theo từng
          khối 8×8 pixel, khi một phần ảnh bị cắt ghép hoặc chỉnh sửa, lưới BAG
          trong vùng đó có thể bị lệch hoặc biến mất hoàn toàn, tạo ra các khu
          vực có dấu hiệu bất thường.
        </p>
        <p>
          Quá trình thực hiện gồm ba bước chính. Đầu tiên, thuật toán trích xuất
          các đường viền mờ nhạt giữa các khối 8×8 bằng cách phát hiện và tăng
          cường các cạnh có tính lặp lại theo chu kỳ 8 pixel. Tiếp theo, hệ
          thống kiểm tra sự không khớp của lưới BAG trên toàn bộ ảnh để xác định
          những khu vực có thể đã bị chỉnh sửa. Cuối cùng, một thuật toán đánh
          dấu giúp làm nổi bật các vùng có BAG bị lệch hoặc biến mất, cho phép
          phát hiện các khu vực đáng ngờ.
        </p>
        <p>
          Nếu đây là ảnh gốc, lưới BAG sẽ đồng nhất trên toàn bộ ảnh. Ngược lại,
          nếu có dấu hiệu BAG bị lệch hoặc biến mất hoàn toàn trong những vùng
          lẽ ra phải đồng nhất, như mặt bàn hoặc bầu trời không mây, đây có thể
          là dấu vết của việc đã bị can thiệp.
        </p>
      </div>

      <div class="pt-2 border-t">
        <h3 class="font-medium mb-2 text-base">Tài liệu tham khảo:</h3>
        <ul class="space-y-2">
          <li>
            <a
              href="https://www.sciencedirect.com/science/article/abs/pii/S0165168409001315"
              target="_blank"
              class="text-blue-600 hover:underline"
            >
              Passive detection of doctored JPEG image via block artifact grid
              extraction
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
