<template>
  <div class="flex flex-col h-full">
    <DialogHeader class="flex-shrink-0 py-2">
      <DialogTitle>High Frequencies Noise (WAVELET)</DialogTitle>
      <DialogDescription>
        Sử dụng sự không đồng nhất về nhiễu trong ảnh để phát hiện các khu vực
        bị chỉnh sửa
      </DialogDescription>
    </DialogHeader>

    <div class="space-y-4 text-sm py-2 overflow-y-auto flex-1 text-justify">
      <div class="space-y-2">
        <p>
          Khi áp dụng phương pháp này, ảnh đầu vào được biến đổi bằng wavelet
          rời rạc (DWT) và phân tách thành bốn thành phần: LL (Low-Low) giữ lại
          thông tin tổng thể, trong khi LH (Low-High), HL (High-Low) và HH
          (High-High) biểu diễn các chi tiết theo các hướng khác nhau. Đặc biệt,
          thành phần HH chứa các chi tiết có tần số cao nhất, rất nhạy cảm với
          nhiễu hoặc dấu vết chỉnh sửa trong ảnh.
        </p>
        <p>
          Việc phân tích thành phần HH cho phép phát hiện sự khác biệt giữa các
          vùng trong ảnh, ngay cả khi không thể nhận thấy bằng mắt thường. Nếu
          một khu vực trong ảnh đã bị chỉnh sửa, mức nhiễu trong HH có thể khác
          biệt so với phần còn lại. Bằng cách chia HH thành các khối nhỏ và ước
          lượng mức nhiễu bằng phương pháp Độ lệch tuyệt đối của trung vị (MAD),
          ta có thể khoanh vùng các khu vực nghi ngờ bị can thiệp.
        </p>
        <p>
          Trong kết quả đầu ra, giá trị của từng vùng cao hay thấp không quan
          trọng, điều cần chú ý là sự khác biệt nhất quán giữa các vùng ảnh. Vì
          thành phần HH có thể bị ảnh hưởng bởi nội dung hình ảnh, việc so sánh
          nên được thực hiện giữa các khu vực có đặc điểm trực quan tương đồng
          (ví dụ: cạnh với cạnh, vùng mịn với vùng mịn). Các phương pháp dựa
          trên các mẫu nhiễu (noise patterns) thường không quá chính xác, và trừ
          khi các chi tiết xuất hiện rất rõ ràng. Vì vậy, thuật toán này chỉ nên
          dùng để tham khảo và kết hợp với các phương pháp khác để ra kết quả
          đúng nhất
        </p>
      </div>

      <div class="pt-2 border-t">
        <h3 class="font-medium mb-2 text-base">Tài liệu tham khảo:</h3>
        <ul class="space-y-2">
          <li>
            <a
              href="https://www.utia.cas.cz/files/Soutez_09/Saic/Mahdian%20Saic%20_2009_Image-and-Vision-Computingfinal%20final%20version%20.pdf"
              target="_blank"
              class="text-blue-600 hover:underline"
            >
              Using noise inconsistencies for blind image forensics
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
