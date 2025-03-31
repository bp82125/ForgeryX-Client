<template>
  <div class="flex flex-col h-full">
    <DialogHeader class="flex-shrink-0 py-2">
      <DialogTitle>Double JPEG quantization inconsistencies (DQ)</DialogTitle>
      <DialogDescription>
        Phát hiện ảnh JPEG bị chỉnh sửa một cách nhanh chóng, chi tiết và tự
        động thông qua hệ số biến đổi cosine rời rạc (DCT coefficients)
      </DialogDescription>
    </DialogHeader>

    <div class="space-y-4 text-sm py-2 overflow-y-auto flex-1">
      <div class="space-y-2">
        <p>
          Phương pháp này giúp phát hiện ảnh JPEG đã bị chỉnh sửa bằng cách phân
          tích dấu vết của quá trình nén ảnh. Khi một bức ảnh được chụp và lưu
          dưới định dạng JPEG, nó sẽ trải qua một quá trình nén đặc biệt để giảm
          dung lượng. Nếu bức ảnh sau đó bị chỉnh sửa và lưu lại, một số vùng
          trong ảnh sẽ trải qua quá trình nén hai lần, trong khi các vùng mới
          chỉnh sửa có thể chỉ bị nén một lần. Sự khác biệt này để lại dấu vết
          đặc trưng trong dữ liệu ảnh, mà mắt thường không thể nhận ra. Bằng
          cách phân tích những dấu hiệu này, thuật toán có thể xác định khu vực
          nào đã bị chỉnh sửa mà không cần giải nén hoàn toàn ảnh, giúp tăng tốc
          độ xử lý và tiết kiệm bộ nhớ.
        </p>
        <p>
          Kết quả sẽ được hiển thị dưới dạng một bản đồ nhiệt (heat map), trong
          đó vùng đỏ thể hiện phần ảnh có khả năng chỉ bị nén một lần, còn vùng
          xanh là những phần đã qua nén hai lần. Nếu một bức ảnh có những vùng
          đỏ tập trung trong khi phần còn lại chủ yếu là xanh, đó có thể là dấu
          hiệu của chỉnh sửa. Ngược lại, nếu ảnh có nhiều vùng màu trung gian
          như vàng, cam, hoặc xanh lá, kết quả có thể không đáng tin cậy.
        </p>
      </div>

      <div class="pt-2 border-t">
        <h3 class="font-medium mb-2 text-base">Tài liệu tham khảo:</h3>
        <ul class="space-y-2">
          <li>
            <a
              href="https://mmlab.ie.cuhk.edu.hk/archive/2009/pr09_fast_automatic.pdf"
              target="_blank"
              class="text-blue-600 hover:underline"
            >
              Fast, automaticandfine-grainedtamperedJPEGimagedetection via
              DCTcoefficientanalysis
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
