<template>
  <div class="flex flex-col h-full">
    <DialogHeader class="flex-shrink-0 py-2">
      <DialogTitle>JPEG Ghosts (GHOST)</DialogTitle>
      <DialogDescription>
        Phát hiện ảnh kỹ thuật số bị chỉnh sửa từ các dấu vết của JPEG
      </DialogDescription>
    </DialogHeader>

    <div class="space-y-4 text-sm py-2 overflow-y-auto flex-1">
      <div class="space-y-2">
        <p>
          Khi một phần ảnh có chất lượng nén thấp hơn được chèn vào một ảnh có
          chất lượng cao hơn và sau đó được lưu lại, nó sẽ để lại dấu vết đặc
          trưng - gọi là "JPEG Ghost". Phương pháp này hoạt động bằng cách lưu
          lại ảnh ở nhiều mức chất lượng nén JPEG khác nhau và đo lường sự khác
          biệt giữa ảnh đã lưu và ảnh gốc, từ đó xác định xem có vùng nào đã
          trải qua nén JPEG trước đó ở mức chất lượng thấp hơn.
        </p>
        <p>
          Cơ chế hoạt động của phương pháp dựa trên sự thay đổi của các hệ số
          DCT (Discrete Cosine Transform) trong quá trình nén JPEG. Khi một vùng
          ảnh đã từng bị nén ở mức thấp hơn, sau đó bị nén lại ở mức cao hơn, nó
          sẽ thể hiện sự bất thường trong sai số giữa các lần nén. Bằng cách
          phân tích sự khác biệt tổng bình phương giữa các mức nén khác nhau, ta
          có thể xác định được các vùng bị chỉnh sửa. Phương pháp này có ưu điểm
          là đơn giản, không đòi hỏi mô hình phức tạp hay tập dữ liệu huấn luyện
          lớn, đồng thời có thể áp dụng trên cả ảnh có chất lượng thấp lẫn cao.
        </p>
      </div>

      <div class="pt-2 border-t">
        <h3 class="font-medium mb-2 text-base">Tài liệu tham khảo:</h3>
        <ul class="space-y-2">
          <li>
            <a
              href="https://farid.berkeley.edu/downloads/publications/tifs09.pdf"
              target="_blank"
              class="text-blue-600 hover:underline"
            >
              Exposing Digital Forgeries From JPEG Ghosts
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
