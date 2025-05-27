<template>
  <div class="flex flex-col h-full">
    <DialogHeader class="flex-shrink-0 py-2">
      <DialogTitle>CAT-Net</DialogTitle>
      <DialogDescription>
        Mạng nơ-ron theo dõi dấu vết nén để phát hiện và xác định vị trí ghép
        của các ảnh
      </DialogDescription>
    </DialogHeader>

    <div class="space-y-4 text-sm py-2 overflow-y-auto flex-1 text-justify">
      <div class="space-y-2">
        <div class="space-y-2">
          <img
            src="@/assets/descriptions/catnet/1.png"
            alt="CAT-Net Framework Overview"
            class="w-full rounded-lg shadow"
          />
          <p class="text-center text-xs text-gray-500">
            Hình 1: Tổng quan về kiến trúc của CAT-Net
          </p>
        </div>
        <p>
          CAT-Net (Compression Artifact Tracing Network) là một mô hình mạng
          nơ-ron tích chập (convolutional neural network) giúp phát hiện ảnh bị
          chỉnh sửa bằng cách tìm kiếm những dấu vết nhỏ không thể nhận ra bằng
          mắt thường. Nó kiểm tra ảnh theo hai cách để phát hiện dấu vết chỉnh
          sửa.
        </p>

        <p>
          Đầu tiên, CAT-Net phân tích màu sắc và kết cấu của hình ảnh để tìm ra
          những điểm bất thường. Khi một phần ảnh bị ghép từ một nguồn khác,
          ngay cả khi được chỉnh sửa tinh vi để hòa làm một với ảnh gốc, vẫn có
          những khác biệt nhỏ về màu sắc, độ sáng, độ bão hòa hoặc sự chuyển đổi
          giữa các vùng. Mắt thường đôi khi không nhận ra những thay đổi này,
          đặc biệt khi chúng rất nhỏ hoặc được ngụy trang bằng các kỹ thuật làm
          mờ viền ghép.
        </p>

        <p>
          Cách thứ hai là kiểm tra dấu vết nén của ảnh. Hầu hết ảnh kỹ thuật số
          được lưu dưới dạng nén (như JPEG), trong đó quá trình nén sử dụng phép
          biến đổi cosine rời rạc (DCT) để giảm kích thước tệp bằng cách loại bỏ
          thông tin ít quan trọng. Khi một bức ảnh bị chỉnh sửa rồi lưu lại,
          phần bị can thiệp có thể trải qua một quá trình nén khác biệt so với
          phần còn lại, dẫn đến sự không đồng nhất trong các hệ số DCT. Mỗi lần
          nén ảnh sẽ tạo ra một kiểu dấu vết riêng, và nếu một khu vực trong ảnh
          có dấu vết nén khác biệt, khả năng cao đó là vùng đã bị chỉnh sửa.
        </p>

        <p>
          Bằng cách kết hợp cả hai phương pháp trên, CAT-Net có thể phát hiện
          vùng ảnh bị chỉnh sửa với độ chính xác cao, ngay cả khi các thay đổi
          không dễ thấy bằng mắt thường.
        </p>
      </div>

      <div class="pt-2 border-t">
        <h3 class="font-medium mb-2 text-base">Tài liệu tham khảo:</h3>
        <ul class="space-y-2">
          <li>
            <a
              href="https://openaccess.thecvf.com/content/WACV2021/papers/Kwon_CAT-Net_Compression_Artifact_Tracing_Network_for_Detection_and_Localization_of_WACV_2021_paper.pdf"
              target="_blank"
              class="text-blue-600 hover:underline"
            >
              CAT-Net: Compression Artifact Tracing Network for Detection and
              Localization of Image Splicing
            </a>
          </li>
          <li>
            <a
              href="https://arxiv.org/pdf/2108.12947"
              target="_blank"
              class="text-blue-600 hover:underline"
            >
              Learning JPEG Compression Artifacts for Image Manipulation
              Detection and Localization
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
