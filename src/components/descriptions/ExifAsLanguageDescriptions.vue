<template>
  <div class="flex flex-col h-full">
    <DialogHeader class="flex-shrink-0 py-2">
      <DialogTitle>EXIF as Language</DialogTitle>
      <DialogDescription>
        Phát hiện ảnh bị chỉnh sửa bằng cách sử dụng mối liên hệ giữa ảnh và
        thông tin metadata của máy ảnh
      </DialogDescription>
    </DialogHeader>

    <div class="space-y-4 text-sm py-2 overflow-y-auto flex-1 text-justify">
      <div class="space-y-2">
        <div class="space-y-2">
          <img
            src="@/assets/descriptions/exif_as_language.png"
            alt="EXIF as Language Overview"
            class="w-full rounded-lg shadow"
          />
          <p class="text-center text-xs text-gray-500">
            Hình 1: Tổng quan về phương pháp EXIF as Language
          </p>
        </div>
        <p>
          Mỗi bức ảnh kỹ thuật số thường kèm theo thông tin EXIF – một loại dữ
          liệu ẩn lưu trữ các thông số như loại máy ảnh, độ dài tiêu cự, tốc độ
          chụp, khẩu độ… Những thông tin này vốn dùng để quản lý hoặc hiển thị
          ảnh, nhưng trong phương pháp "EXIF as Language", chúng được tận dụng
          như một dạng ngôn ngữ mô tả bức ảnh. Cụ thể, trong quá trình huấn
          luyện mô hình, các thông số EXIF được chuyển thành những câu văn ngắn
          có cấu trúc, ví dụ: “Make: Nikon, Model: D3200, Focal Length: 30.0mm,
          Exposure Time: 1/500 sec”. Đồng thời, ảnh cũng được chia thành nhiều
          vùng nhỏ, và mỗi vùng được trích xuất đặc trưng riêng. Mô hình sau đó
          học cách ghép nối từng vùng ảnh với chuỗi mô tả EXIF tương ứng, sao
          cho đặc điểm thị giác của vùng ảnh phải "phù hợp" với thông tin thiết
          bị đã ghi trong metadata. Việc kết hợp hai luồng thông tin – hình ảnh
          và văn bản mô tả EXIF – giúp mô hình hiểu sâu hơn về đặc trưng của các
          thiết bị chụp ảnh khác nhau.
        </p>

        <p>
          Sau khi đã được huấn luyện, mô hình không còn cần tới EXIF metadata
          nữa. Ở giai đoạn dự đoán, mô hình chỉ cần một bức ảnh đầu vào. Ảnh sẽ
          được chia nhỏ thành nhiều vùng (patch), và mỗi vùng được chuyển thành
          một vector thể hiện đặc trưng của thiết bị chụp ảnh (mà mô hình đã học
          được từ trước). Nếu toàn bộ ảnh được chụp bởi cùng một máy ảnh, các
          vùng này thường có đặc trưng tương đồng. Tuy nhiên, nếu ảnh bị cắt
          ghép từ nhiều nguồn khác nhau (ví dụ: mặt người từ ảnh này ghép vào
          nền ảnh khác), thì các vùng tương ứng sẽ có đặc trưng không khớp với
          nhau. Mô hình sẽ phát hiện sự không đồng nhất này bằng cách tạo một
          bản đồ thể hiện mức độ "tương đồng nội bộ" giữa các vùng trong ảnh, từ
          đó đánh dấu những vùng nghi vấn đã bị chỉnh sửa.
        </p>
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
