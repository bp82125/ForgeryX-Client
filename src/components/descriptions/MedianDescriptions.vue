<template>
  <div class="flex flex-col h-full">
    <DialogHeader class="flex-shrink-0 py-2">
      <DialogTitle>Median filtering noise residue (MEDIAN)</DialogTitle>
      <DialogDescription>
        Phát hiện ảnh bị chỉnh sửa bằng cách phân tích phần dư nhiễu từ bộ lọc
        trung vị
      </DialogDescription>
    </DialogHeader>

    <div class="space-y-4 text-sm py-2 overflow-y-auto flex-1">
      <div class="space-y-2">
        <p>
          Lọc trung vị (Median filtering) là một kỹ thuật xử lý ảnh thường được
          dùng để loại bỏ nhiễu mà vẫn giữ được các chi tiết quan trọng. Phương
          pháp này thay thế giá trị của mỗi điểm ảnh bằng giá trị trung vị của
          các điểm ảnh lân cận trong một phạm vi nhất định, giúp loại bỏ các
          điểm nhiễu bất thường như nhiễu muối tiêu (salt-and-pepper noise).
        </p>
        <p>
          Bằng cách áp dụng lọc trung vị lên ảnh gốc rồi lấy phần chênh lệch
          giữa hai ảnh, ta thu được phần dư của nhiễu (noise residue). Phần dư
          này chủ yếu chứa các chi tiết thay đổi nhỏ trong ảnh, thường là những
          chi tiết có tần số cao (high-frequency components). Điều này có thể
          giúp phát hiện sự khác biệt giữa các vùng trong ảnh, đặc biệt là khi
          có chỉnh sửa hoặc cắt ghép.
        </p>
        <p>
          Nếu một bức ảnh có các vùng nội dung tương tự nhưng phần dư của nhiễu
          lại khác nhau đáng kể, có thể khu vực đó đã bị chỉnh sửa hoặc lấy từ
          nguồn khác. Tuy nhiên, vì nhiễu không phải lúc nào cũng là dấu hiệu
          chắc chắn của sự can thiệp, phương pháp này nên được sử dụng cùng với
          các kỹ thuật pháp y số khác (digital forensics techniques) để có kết
          quả chính xác hơn.
        </p>
      </div>

      <div class="pt-2 border-t">
        <h3 class="font-medium mb-2 text-base">Tài liệu tham khảo:</h3>
        <ul class="space-y-2">
          <li>
            <a
              href="https://29a.ch/2015/08/21/noise-analysis-for-image-forensics"
              target="_blank"
              class="text-blue-600 hover:underline"
            >
              Noise Analysis for Image Forensics
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
