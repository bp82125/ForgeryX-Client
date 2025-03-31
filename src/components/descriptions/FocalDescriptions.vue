<template>
  <div class="flex flex-col h-full">
    <DialogHeader class="flex-shrink-0 py-2">
      <DialogTitle>FOCAL</DialogTitle>
      <DialogDescription>
        Cải tiến việc phát hiện ảnh bị chỉnh sửa thông qua phương pháp học đối
        lập và phân cụm không giám sát
      </DialogDescription>
    </DialogHeader>


    
    <div class="space-y-4 text-sm py-2 overflow-y-auto flex-1">
      <div class="space-y-2">
        <img
          src="@/assets/descriptions/focal/1.jpg"
          alt="FOCAL Method"
          class="w-full rounded-lg shadow"
        />
        <p class="text-center text-xs text-gray-500">
          Hình 1: Tổng quan về phu0ơng pháp FOCAL
        </p>
      </div>
      <div class="space-y-2">
        <p>
          Thay vì chỉ phân loại từng phần của ảnh là 'thật' hay 'bị chỉnh sửa'
          dựa trên dữ liệu huấn luyện như các phương pháp cũ, FOCAL (FOrensic
          ContrAstive cLustering) tiếp cận theo cách khác bằng cách so sánh trực
          tiếp các vùng trong cùng một bức ảnh để phát hiện bất thường
        </p>

        <p>
          FOCAL hoạt động dựa trên ba bước chính. Đầu tiên, hệ thống trích xuất
          các đặc điểm quan trọng để xác định vùng nguyên bản và vùng có dấu
          hiệu chỉnh sửa. Sau đó, thay vì chỉ dựa vào nhãn có sẵn, FOCAL so sánh
          trực tiếp các điểm ảnh trong cùng một bức ảnh để hiểu rõ sự khác biệt,
          giống như cách một người tinh mắt phát hiện chi tiết không khớp trong
          tranh. Cuối cùng, FOCAL tự động nhóm các vùng có đặc điểm giống nhau
          lại mà không cần một mô hình phân loại cố định, giúp phát hiện việc
          chỉnh sửa ngay cả khi chưa từng gặp kiểu đó trước đây.
        </p>

        <p>
          Nhờ cách tiếp cận này, FOCAL có thể phát hiện ảnh bị chỉnh sửa một
          cách chính xác hơn rất nhiều so với các phương pháp cũ. Nó không chỉ
          giúp nhận diện những bức ảnh đã bị cắt ghép một cách tinh vi mà còn có
          thể hoạt động tốt ngay cả khi ảnh đã qua nhiều bước chỉnh sửa khác
          nhau.
        </p>
      </div>
      <div class="pt-2 border-t">
        <h3 class="font-medium mb-2 text-base">Tài liệu tham khảo:</h3>
        <ul class="space-y-2">
          <li>
            <a
              href="https://arxiv.org/pdf/2308.09307"
              target="_blank"
              class="text-blue-600 hover:underline"
            >
              Rethinking Image Forgery Detection via Contrastive Learning and
              Unsupervised Clustering
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
