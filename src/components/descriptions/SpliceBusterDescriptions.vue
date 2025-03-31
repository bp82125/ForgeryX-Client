<template>
  <div class="flex flex-col h-full">
    <DialogHeader class="flex-shrink-0 py-2">
      <DialogTitle>Splicebuster</DialogTitle>
      <DialogDescription>
        Phát hiện ảnh cắt ghép bằng cách phân tích đặc trưng cục bộ và sử dụng
        thuật toán EM mà không cần biết các thông tin trước đó
      </DialogDescription>
    </DialogHeader>

    <div class="space-y-4 text-sm py-2 overflow-y-auto flex-1">
      <div class="space-y-2">
        <p>
          Splicebuster là một phương pháp phát hiện ảnh bị cắt ghép dựa trên
          việc phân tích phần nhiễu còn sót lại (image residual). Khi một ảnh
          chưa bị chỉnh sửa, phần dư này có tính đồng nhất, nhưng nếu có sự can
          thiệp, nó sẽ xuất hiện những điểm khác biệt do sự khác nhau về nguồn
          gốc của từng vùng ảnh.
        </p>
        <div class="space-y-2">
          <img
            src="@/assets/descriptions/splicebuster/1.png"
            alt="Splicebuster Framework Overview"
            class="w-full rounded-lg shadow"
          />
          <p class="text-center text-xs text-gray-500">
            Hình 1: Kết quả áp dụng thuật toán cho một số ảnh mẫu. Từ trên xuống
            dưới: ảnh bị chỉnh sửa, kết quả thu được từ phương pháp không giám
            sát và phương pháp có giám sát.
          </p>
        </div>
        <p>
          Phương pháp này có thể hoạt động theo hai chế độ. Ở chế độ không giám
          sát, hệ thống tự động học mô hình từ chính ảnh đầu vào để xác định
          vùng chỉnh sửa. Trong chế độ có giám sát, người dùng chọn một vùng
          nghi ngờ bị chỉnh sửa (bounding box), phần còn lại của ảnh được dùng
          làm dữ liệu huấn luyện. Hệ thống phân tích ảnh theo từng khối (sliding
          window), ước lượng đặc trưng từ vùng huấn luyện và so sánh với phần
          còn lại để tìm ra sự khác biệt. Từ đó, cho ra một bản đồ nhiệt (heat
          map) với màu sắc thể hiện mức độ nghi ngờ của từng vùng.
        </p>
      </div>

      <div class="pt-2 border-t">
        <h3 class="font-medium mb-2 text-base">Tài liệu tham khảo:</h3>
        <ul class="space-y-2">
          <li>
            <a
              href="https://ieeexplore.ieee.org/document/7368565"
              target="_blank"
              class="text-blue-600 hover:underline"
            >
              Splicebuster: A new blind image splicing detector
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
