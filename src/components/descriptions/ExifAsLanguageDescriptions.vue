<template>
  <div class="flex flex-col h-full">
    <DialogHeader class="flex-shrink-0 py-2">
      <DialogTitle>EXIF as Language</DialogTitle>
      <DialogDescription>
        Mạng nơ-ron truy dấu dấu vết nén của anh cho việc phát hiện và khoanh
        vùng các khu vực bị ghép nối
      </DialogDescription>
    </DialogHeader>

    <div class="space-y-4 text-sm py-2 overflow-y-auto flex-1">
      <div class="space-y-2">
        <div class="space-y-2">
          <img
            src="@/assets/descriptions/exif_as_language/1.png"
            alt="EXIF as Language Overview"
            class="w-full rounded-lg shadow"
          />
          <p class="text-center text-xs text-gray-500">
            Hình 1: Tổng quan về phương pháp EXIF as Language
          </p>
        </div>
        <p>
          EXIF metadata không chỉ lưu trữ thông tin về máy ảnh và điều kiện chụp
          mà còn có thể được khai thác như một dạng ngôn ngữ để phân tích hình
          ảnh. Phương pháp "EXIF as Language" chuyển đổi metadata trong ảnh
          thành văn bản bằng cách kết hợp các thẻ và giá trị thành chuỗi có cấu
          trúc, ví dụ: "Make: Nikon, Model: D3200, Focal Length: 30.0mm,
          Exposure Time: 1/500 sec". Sau đó, thông tin này được xử lý bằng mô
          hình transformer, tương tự như cách các hệ thống AI xử lý ngôn ngữ tự
          nhiên.
        </p>
        <div class="space-y-2">
          <img
            src="@/assets/descriptions/exif_as_language/2.png"
            alt="Cross-modal image and photo metadata training"
            class="w-full rounded-lg shadow"
          />
          <p class="text-center text-xs text-gray-500">
            Hình 2: Huấn luyện mô hình cross-modal giữa hình ảnh và metadata
          </p>
        </div>
        <p>
          Hệ thống sử dụng hai bộ mã hóa (encoders): một bộ xử lý hình ảnh để
          trích xuất đặc trưng từ từng vùng nhỏ trong ảnh và một bộ mã hóa ngôn
          ngữ để phân tích EXIF metadata. Cả hai hoạt động trong cùng một không
          gian biểu diễn, giúp mô hình học được mối quan hệ giữa nội dung hình
          ảnh và thông tin camera. Nhờ đó, hệ thống có thể phát hiện ảnh bị
          chỉnh sửa bằng cách tìm kiếm sự khác biệt giữa các vùng ảnh: nếu một
          bức ảnh chứa nội dung từ nhiều nguồn khác nhau, embedding của các vùng
          ảnh sẽ không đồng nhất.
        </p>
        <div class="space-y-2">
          <img
            src="@/assets/descriptions/exif_as_language/3.png"
            alt="Detecting edited regions without metadata"
            class="w-full rounded-lg shadow"
          />
          <p class="text-center text-xs text-gray-500">
            Hình 3: Phát hiện vùng ảnh bị chỉnh sửa mà không cần metadata
          </p>
        </div>
      </div>

      <div class="pt-2 border-t">
        <h3 class="font-medium mb-2 text-base">Tài liệu tham khảo:</h3>
        <ul class="space-y-2">
          <li>
            <a
              href="https://arxiv.org/pdf/2301.04647"
              target="_blank"
              class="text-blue-600 hover:underline"
            >
              EXIF as Language: Learning Cross-Modal Associations Between Images
              and Camera Metadata
            </a>
          </li>
          <li>
            <a
              href="https://arxiv.org/pdf/2103.00020"
              target="_blank"
              class="text-blue-600 hover:underline"
            >
              Learning Transferable Visual Models From Natural Language
              Supervision
            </a>
          </li>
          <li>
            <a
              href="https://arxiv.org/pdf/1910.01108"
              target="_blank"
              class="text-blue-600 hover:underline"
            >
              DistilBERT, a distilled version of BERT: smaller, faster, cheaper
              and lighter
            </a>
          </li>
          <li>
            <a
              href="https://arxiv.org/pdf/1512.03385"
              target="_blank"
              class="text-blue-600 hover:underline"
            >
              Deep Residual Learning for Image Recognition
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
