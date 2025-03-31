<template>
  <div class="flex flex-col h-full">
    <DialogHeader class="flex-shrink-0 py-2">
      <DialogTitle>Error Level Analysis (ELA)</DialogTitle>
      <DialogDescription>
        Lần theo dấu vết nén để phát hiện chỉnh sửa ảnh
      </DialogDescription>
    </DialogHeader>

    <div class="space-y-4 text-sm py-2 overflow-y-auto flex-1">
      <div class="space-y-2">
        <p>
          Error Level Analysis (ELA) dựa trên sự khác biệt giữa ảnh gốc và phiên
          bản nén lại của chính nó. Phương pháp này tương tự với kỹ thuật JPEG
          Ghosts, nhưng thay vì trích xuất nhiều phiên bản có chất lượng nén
          khác nhau, ELA chỉ sử dụng một phiên bản nén duy nhất - thường là với
          chất lượng nén 75.
        </p>
        <p>
          ELA hoạt động bằng cách trừ đi phiên bản đã nén từ ảnh ban đầu, tạo ra
          một bản đồ sai khác (difference map). Nguyên tắc chính của phương pháp
          này là những vùng trong ảnh đã trải qua ít lần nén hơn (hoặc bị nén
          với chất lượng cao hơn) sẽ có độ sai số khác cao hơn so với những vùng
          đã bị nén nhiều lần hoặc bị mất dữ liệu nhiều hơn. Khi phân tích kết
          quả ELA, các vùng đáng chú ý là những khu vực có giá trị sai khác cao
          hơn so với những phần tương tự khác trong ảnh.
        </p>
        <p>
          Một điểm quan trọng khi sử dụng ELA là cần so sánh các vùng có đặc
          điểm tương đồng, chẳng hạn như cạnh (edges) với cạnh hoặc vùng đồng
          nhất (uniform regions) với vùng đồng nhất. Điều này giúp tránh hiểu
          sai kết quả do sự khác biệt tự nhiên trong kết cấu và nội dung của
          hình ảnh.
        </p>
      </div>

      <div class="pt-2 border-t">
        <h3 class="font-medium mb-2 text-base">Tài liệu tham khảo:</h3>
        <ul class="space-y-2">
          <li>
            <a
              href="https://fotoforensics.com/tutorial-ela.php"
              target="_blank"
              class="text-blue-600 hover:underline"
            >
              Tutorial: Error Level Analysis
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
