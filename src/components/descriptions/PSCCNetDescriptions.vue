<template>
  <div class="flex flex-col h-full">
    <DialogHeader class="flex-shrink-0 py-2">
      <DialogTitle>PSCC-Net</DialogTitle>
      <DialogDescription>
        Progressive Spatio-Channel Correlation Network for Image Manipulation
        Detection and Localization
      </DialogDescription>
    </DialogHeader>

    <div class="space-y-4 text-sm py-2 overflow-y-auto flex-1">
      <div class="space-y-2">
        <div class="space-y-2">
          <img
            src="@/assets/descriptions/psccnet/1.png"
            alt="PSCC-Net Architecture"
            class="w-full rounded-lg shadow"
          />
          <p class="text-center text-xs text-gray-500">
            Hình 1: Tổng quan về kiến trúc của PSCC-Net
          </p>
        </div>
        <p>
          PSCC-Net phát hiện những vùng trong ảnh đã bị chỉnh sửa thông qua việc
          phân tích bức ảnh qua nhiều giai đoạn. Phương pháp này bao gồm hai
          phần chính: phần phân tích từ trên xuống (top-down path) để trích xuất
          đặc điểm quan trọng trong ảnh và phần tinh chỉnh kết quả đầu ra từ
          dưới lên (bottom-up path) để dần dần làm rõ vùng bị chỉnh sửa. Ban
          đầu, PSCC-Net tạo ra một bản nháp thô sơ về khu vực có thể đã bị chỉnh
          sửa, sau đó từng bước cải thiện độ chính xác bằng cách bổ sung chi
          tiết. Nếu ở một giai đoạn nào đó kết quả đã đủ chắc chắn, hệ thống có
          thể dừng sớm để tối ưu hiệu suất và thời gian chạy
        </p>

        <div class="space-y-2">
          <img
            src="@/assets/descriptions/psccnet/2.png"
            alt=" Visualization of predicted manipulation masks from Scale 4 to Scale 1"
            class="w-full rounded-lg shadow"
          />
          <p class="text-center text-xs text-gray-500">
            Hình 2: Minh họa kết quả đầu ra trong từng giai đoạn bổ sung chi
            tiết
          </p>
        </div>

        <p>
          Điểm nổi bật của PSCC-Net là Spatio-Channel Correlation Module (SCCM).
          Module này giúp mô hình phân tích sâu hơn về sự khác biệt giữa vùng
          chỉnh sửa và vùng nguyên bản. SCCM hoạt động bằng cách xem xét mối
          quan hệ giữa các điểm trong ảnh (tương quan không gian/spatial-wise
          attentions), giúp hệ thống phát hiện những khu vực không khớp với phần
          còn lại. Đồng thời, SCCM cũng phân tích cách các lớp màu và chi tiết
          trong ảnh phản ứng với các thao tác chỉnh sửa (tương quan
          kênh/channel-wise attentions), cho phép phát hiện những dấu hiệu bất
          thường mà mắt thường khó nhận ra.
        </p>
      </div>

      <div class="pt-2 border-t">
        <h3 class="font-medium mb-2 text-base">Tài liệu tham khảo:</h3>
        <ul class="space-y-2">
          <li>
            <a
              href="https://arxiv.org/pdf/2103.10596"
              target="_blank"
              class="text-blue-600 hover:underline"
            >
              PSCC-Net: Progressive Spatio-Channel Correlation Network for Image
              Manipulation Detection and Localization
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
